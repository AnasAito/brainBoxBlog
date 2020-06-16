import React from "react";
import get from "lodash/get";
import { object, string, array } from "yup";
import { Formik, Form } from "formik";
import withNotification from "services/Notification";

import { useQuery, useMutation } from "services/Client";
import View from "./view";
function All({ notification }) {
  const {
    data: { searchLike },
  } = useQuery({ event: "searchLike" });

  const { data } = useQuery({
    event: "group.get.many",
    variables: {
      like: {
        name: `%${searchLike}%`,
      },
    },
    skip: searchLike === "",
  });
  const groups = get(data, "groups.data", []);

  const { mutate } = useMutation({ event: "user.create.many" });

  const submit = async (mutate, values) => {
    const results = await mutate({
      variables: {
        data: [
          {
            firstName: values.firstname,
            lastName: values.lastname,
            email: values.email.toLowerCase(),
            type: "student",
          },
        ],
        groups: values.groupIds,
      },
    });

    get(results, "data.createUsers") === "ok"
      ? notification.success("User Created")
      : notification.error("Error");
  };

  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        group: "",
        groupIds: [],
      }}
      onSubmit={(values) => submit(mutate, values)}
      validationSchema={object({
        firstName: string().min(5, "error").required("error"),
        lastName: string().min(5, "error").required("error"),
        email: string().email("error").required("error"),
        groupIds: array()
          .min(1, "please choose one group at least")
          .required("error"),
      })}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <View
            groups={groups}
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
  );
}

export default withNotification(All);
