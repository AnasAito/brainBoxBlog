import React from "react";
import get from "lodash/get";
import { object, string } from "yup";
import { Formik, Form } from "formik";
import withNotification from "services/Notification";
import { useParams, useHistory } from "react-router-dom";

import { useQuery, useMutation } from "services/Client";
import forEachAsync from "shared/helpers/forEachAsync";
import View from "./view";
function All({ notification }) {
  let history = useHistory()
  const { id } = useParams();
  const { data: userData } = useQuery({
    event: "user.get.one",
    variables: {
      where: {
        id,
      },
    },
    skip: !id,
  });

  const user = get(userData, "user", {
    firstName: "",
    lastName: "",
    email: "",
  });

  const { data: userGroupData } = useQuery({
    event: "user.group.get.many",
    variables: {
      where: {
        user: { id },
      },
      withSelect: true,
    },
    skip: !id,
  });

  const userGroups = get(userGroupData, "userGroups.data", []).map(
    (userGroup) => userGroup.group
  );
  console.log(userGroupData);

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

  const { mutate } = useMutation({ event: "user.group.create" });

  const { mutate: updateUser } = useMutation({ event: "user.update" });

  const submit = async (mutate, updateUser, values) => {
    console.log(values);
    const results = await updateUser({
      variables: {
        data: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email.toLowerCase(),
        },
        where: { id },
      },
    });

    await forEachAsync(values.groupIds, async (o) => {
      const variables = {
        data: {
          group: {
            id: o.id,
          },
          user: {
            id,
          },
        },
      };

      return mutate({ variables: variables });
    });

    get(results, "data.updateUser")
      ? notification.success("User Updated")
      : notification.error("Error");

    history.goBack()
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        group: "",
        groupIds: [],
      }}
      onSubmit={(values) => submit(mutate, updateUser, values)}
      validationSchema={object({
        firstName: string().min(5, "error").required("error"),
        lastName: string().min(5, "error").required("error"),
        email: string().email("error").required("error"),
      })}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <View
            userGroups={userGroups}
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
