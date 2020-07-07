import React from "react";
import get from "lodash/get";
import { object, string } from "yup";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { useMutation, useClearCache, useQuery, useQueryPaginated } from "services/Client";
import withNotification from "services/Notification";

import Table from "shared/components/Table";
import View from "./view";

function All({ notification }) {
  let history = useHistory();
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
              onClick={() =>
                history.push(
                  `/admin/users/groups/edit/${props.row.original.id}`
                )
              }
              className="text-indigo-600 hover:text-indigo-900"
            >
              Edit
            </button>
          );
        },
      },
    ],
    [history, activityId]
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
    </div>
  );
}

export default withNotification(All);
