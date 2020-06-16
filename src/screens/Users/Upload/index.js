import React from "react";
import get from "lodash/get";
import { object, array } from "yup";
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
  const { mutate: getUserFromFile } = useMutation({ event: "users.from.file" });

  const onUpload = (usersFromFile) => async (file, setFieldValue) => {
    const result = await usersFromFile({
      variables: {
        file,
      },
    });

    setFieldValue("users", get(result, "data.usersFromFile") || []);
  };

  const submit = async (mutate, values) => {
    const users = values.users.map((user) => ({
      firstName: user.firstName || null,
      lastName: user.lastName || null,
      email: user.email || null,
      type: "student",
    }));

    const results = await mutate({
      variables: {
        data: users,
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
        group: "",
        groupIds: [],
        users: [],
        file: null,
      }}
      onSubmit={(values) => submit(mutate, values)}
      validationSchema={object({
        groupIds: array()
          .min(1, "please choose one group at least")
          .required("error"),
      })}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
      }) => (
        <Form>
          <View
            groups={groups}
            formik={{
              values: { ...values },
              errors: { ...errors },
              touched: { ...touched },
            }}
            handlers={{
              change: setFieldValue,
              blur: handleBlur,
              onUpload: onUpload(getUserFromFile),
            }}
          />
        </Form>
      )}
    </Formik>
  );
}

export default withNotification(All);
