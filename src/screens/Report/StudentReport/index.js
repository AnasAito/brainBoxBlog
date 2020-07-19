import React, { useState } from "react";
import get from "lodash/get";
import { object, string } from "yup";
// import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { useMutation, useQueryPaginated, useQuery } from "services/Client";
import withNotification from "services/Notification";
import Table from "shared/components/Table";

import View from "./view";

function All({ notification }) {
  const [firstNameFilter, setFirstNameFilter] = useState("%%");
  const [lastNameFilter, setlastNameFilter] = useState("%%");
  const [emailFilter, setEmailFilter] = useState("%%");
  const {
    data: { searchLike },
  } = useQuery({ event: "searchLike" });

  const [loading, setLoading] = React.useState(false);

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
    setLoading(true);
    const results = await mutate({
      variables: {
        where: {
          placementTest: { id: values.testId },
          usergroup: { group: { id: values.groupId } },
        },
      },
    });
    const file = get(results, "data.placementTestReport");
    if (file) {
      notification.success("Report successfully generated");
      window.open(file);
    } else {
      notification.error(
        "There appears to be a problem, please contact your administrator"
      );
    }
    setLoading(false);
  };

  const handleGeneratePDF = async (mutate, id, testId) => {
    setLoading(true);
    const results = await mutate({
      variables: {
        where: {
          id,
        },
      },
    });
    const file = get(results, "data.userPdfReport");
    if (file) {
      notification.success("Report successfully generated");
      window.open(file);
    } else {
      notification.error(
        "There appears to be a problem, please contact your administrator"
      );
    }
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      groupName: "",
      groupId: "",
      testId: "",
    },
    validationSchema: object({
      testId: string().required("error"),
    }),
    onSubmit: (values) => {
      submit(mutate, values);
    },
  });

  const { groupId } = formik.values;

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

  const { mutate } = useMutation({
    event: "user.report.pdf",
  });

  const { data, loading: userLoading, pageSize } = useQueryPaginated({
    event: "user.placement.test.get.many",
    variables: {
      withSelect: true,
      where: {
        completed: true,
        placementTest: { id: formik.values.testId },
        usergroup: { group: { id: groupId } },
      },
      like: {
        user: {
          firstName: firstNameFilter,
          lastName: lastNameFilter,
          email: emailFilter,
        },
      },
      orderBy: { createdAt: "desc" },
    },
    skip: formik.values.testId === "" || groupId === "",
  });

  const userData = get(data, "userPlacementTests.data", []);
  const count = get(data, "userPlacementTests.count", []) / pageSize;

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
        Header: "Actions",
        Cell: (props) => {
          return (
            <button
              className="text-blue-600 hover:text-blue-900"
              onClick={() =>
                handleGeneratePDF(
                  mutate,
                  props.row.original.id,
                  formik.values.testId
                )
              }
            >
              Export as PDF
            </button>
          );
        },
      },
    ],
    []
  );

  return (
    <div className="grid grid-cols-4 gap-4">
      <View
        groups={groups}
        tests={tests}
        loading={loading}
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
      <div className="col-span-3">
        <Table
          columns={columns}
          data={userData}
          loading={userLoading}
          pageCount={count}
          setters={{
            "header_user.firstName": setFirstNameFilter,
            "header_user.lastName": setlastNameFilter,
            "header_user.email": setEmailFilter,
          }}
        />
      </div>
    </div>
  );
}

export default withNotification(All);
