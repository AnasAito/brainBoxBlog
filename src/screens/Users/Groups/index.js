import React from "react";
import get from "lodash/get";
import { object, string } from "yup";
import { Formik, Form } from "formik";
import { useMutation, useClearCache } from "services/Client";
import withNotification from "services/Notification";

import Table from "shared/components/Table";
import View from "./view";

import { useQueryPaginated } from "services/Client";
function All({ notification }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Actions",
        Cell: (props) => (
          <button href="#" className="text-indigo-600 hover:text-indigo-900">
            Edit
          </button>
        ),
      },
    ],
    []
  );

  const { data, loading, pageSize } = useQueryPaginated({
    event: "group.get.many",
    variables: {
      withSelect: true,
      orderBy: { createdAt: "desc" },
    },
  });
  const userData = get(data, "groups.data", []);
  const count = get(data, "groups.count", []) / pageSize;

  const { clearCache } = useClearCache({ event: "group.get.many" });

  const { mutate } = useMutation({
    event: "group.create",
    update: () => {
      clearCache();
    },
  });

  const submit = async (mutate, values) => {
    const results = await mutate({
      variables: {
        data: { name: values.name },
      },
    });

    get(results, "data.createGroup")
      ? notification.success("Group Created")
      : notification.error("Error");
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(values) => submit(mutate, values)}
        validationSchema={object({
          name: string().min(5, "error").required("error"),
        })}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <View
              formik={{
                values: { ...values },
                errors: { ...errors },
                touched: { ...touched },
              }}
              handlers={{
                change: handleChange,
                blur: handleBlur,
              }}
            />
          </Form>
        )}
      </Formik>

      <div className="flex flex-col col-span-2">
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
