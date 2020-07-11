import React, { useState } from "react";
import get from "lodash/get";
import { object, string } from "yup";
// import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import {
  useMutation,
  useClearCache,
  useQuery,
  useQueryPaginated,
} from "services/Client";
import withNotification from "services/Notification";

import Table from "shared/components/Table";
import Modal from "./Modal";
import View from "./view";

function All({ notification }) {
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState("");
  const [score, setScore] = useState(0);
  const {
    data: { searchLike },
  } = useQuery({ event: "searchLike" });

  const { data: groupsData } = useQuery({
    event: "group.get.many",
    variables: {
      like: {
        name: `%${searchLike}%`,
      },
    },
    skip: searchLike === "",
  });
  const groups = get(groupsData, "groups.data", []);

  const submit = async (mutate, values) => {
    const results = await mutate({
      variables: {
        where: {
          id: values.testId,
        },
        activity: { id: values.activityId },
      },
    });

    get(results, "data.gradePlacementTest") === "OK"
      ? notification.success("Activity Graded")
      : notification.error("Error");
  };

  const handleGradeSingle = (mutate, values) => async (score) => {
    const results = await mutate({
      variables: {
        where: {
          id: values.testId,
        },
        score: parseInt(score),
        user: {
          id: userId,
        },
        activity: { id: values.activityId },
      },
    });

    get(results, "data.gradePlacementTest") === "OK"
      ? notification.success("Grade Saved")
      : notification.error("Error");
  };

  const formik = useFormik({
    initialValues: {
      groupName: "",
      groupId: "",
      testId: "",
      sectionContainerId: "",
      sectionId: "",
      activityId: "",
      activityType: "",
    },
    validationSchema: object({
      activityType: string().matches("quiz").required("error"),
    }),
    onSubmit: (values) => {
      submit(mutate, values);
    },
  });

  const {
    groupId,
    testId,
    sectionContainerId,
    sectionId,
    activityId,
    activityType,
  } = formik.values;

  const { data: placementTestsData } = useQuery({
    event: "group.placement.test.get.many",
    variables: {
      where: {
        group: { id: groupId },
      },
      withSelect: true,
    },
    skip: groupId === "",
  });

  const tests = get(placementTestsData, "groupPlacementTests.data", []).map(
    (v) => ({
      value: v.placementTest.id,
      label: v.placementTest.title,
      sectionContainer: v.placementTest.sectionContainer.id,
    })
  );

  const { data: sectionsData } = useQuery({
    event: "section.get.many",
    variables: {
      where: {
        sectionContainer: { id: sectionContainerId },
      },
      orderBy: {
        order: 1,
      },
      withSelect: true,
    },
    skip: sectionContainerId === "",
  });

  const sections = get(sectionsData, "sections.data", []).map((v) => ({
    value: v.id,
    label: v.name,
  }));

  const { data: activitiesData } = useQuery({
    event: "activity.get.many",
    variables: {
      where: {
        section: { id: sectionId },
      },
      orderBy: {
        order: 1,
      },
      withSelect: true,
    },
    skip: sectionId === "",
  });

  const activities = get(activitiesData, "activities.data", []).map((v) => ({
    value: v.id,
    label: v.name,
    type: v.type,
  }));

  const columns = React.useMemo(
    () => [
      {
        Header: "Email",
        accessor: "user.email",
      },
      {
        Header: "First Name",
        accessor: "user.firstName",
      },
      {
        Header: "Last Name",
        accessor: "user.lastName",
      },
      {
        Header: "Score",
        accessor: `score[${activityId}]`,
      },
      {
        Header: "Actions",
        Cell: (props) => {
          return (
            <button
              onClick={() => {
                setUserId(props.row.original.user.id);
                setScore(get(props.row.original, `score[${activityId}]`, 0));
                setShow(true);
              }}
              className="text-indigo-600 hover:text-indigo-900"
            >
              More
            </button>
          );
        },
      },
    ],
    [activityId]
  );

  const { data, loading, pageSize } = useQueryPaginated({
    event: "user.placement.test.get.many",
    variables: {
      withSelect: true,
      where: {
        completed: true,
        placementTest: { id: testId },
        usergroup: { group: { id: groupId } },
      },
      orderBy: { createdAt: "desc" },
    },
    skip: testId === "" || groupId === "",
  });
  const userData = get(data, "userPlacementTests.data", []);
  const count = get(data, "userPlacementTests.count", []) / pageSize;

  const { clearCache } = useClearCache({
    event: "user.placement.test.get.many",
  });

  const { mutate } = useMutation({
    event: "test.grade",
    update: () => {
      clearCache();
    },
  });

  const { data: userActivityData } = useQuery({
    event: "user.activity.get.one",
    variables: {
      where: { user: { id: userId }, activity: { id: activityId } },
    },
    skip: userId === "" && activityId === "",
  });

  const getPayload = (data, type) => {
    if (type === "speaking") {
      return get(data, "userActivity.answers.recordPath", "");
    }
  };

  const payload = getPayload(userActivityData, activityType);
  return (
    <div className="grid grid-cols-4 gap-4">
      <View
        groups={groups}
        tests={tests}
        sections={sections}
        activities={activities}
        formik={{
          values: { ...formik.values },
          errors: { ...formik.errors },
          touched: { ...formik.touched },
          isDisabled: !(formik.isValid && formik.dirty),
        }}
        handlers={{
          submit: formik.handleSubmit,
          change: formik.handleChange,
          blur: formik.handleBlur,
        }}
      />

      <div className="flex flex-col col-span-3">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <Table
              columns={columns}
              data={userData}
              loading={loading}
              pageCount={count}
            />
          </div>
        </div>
      </div>
      <Modal
        show={show}
        modalText="Grade"
        modalTitle="Grade"
        payload={payload}
        type="success"
        buttonText="Save"
        score={score}
        setScore={setScore}
        onSubmit={handleGradeSingle(mutate, formik.values)}
        onClose={() => setShow(false)}
      />
    </div>
  );
}

export default withNotification(All);
