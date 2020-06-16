import React, { useLayoutEffect } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";

import get from "lodash/get";
import { addHocs } from "shared/helpers/Addhocs";

import { useMutation, useQuery } from "services/Client";
import { withRouter } from "react-router-dom";

import Global from "services/Global";
import withNotification from "services/Notification";
import withStore from "services/Store";
import View from "./view";

function LoginPage({ store, history }) {
  const { data: userGetOne } = useQuery({
    event: "user.get.one",
    variables: { where: { id: Global.get("user.id") } },
  });

  useLayoutEffect(() => {
    const userConfirmed = get(userGetOne, "user.confirmed");
    if (userConfirmed) {
      history.push("/home/dashboard");
    }
  });

  const { mutate } = useMutation({
    event: "user.login",
  });

  const login = async (mutate, values) => {
    const result = await mutate({
      variables: {
        email: values.email.toLowerCase(),
        password: values.password,
      },
    });

    const loginOutput = get(result, "data.adminLogin");

    if (loginOutput) {
      const { user, token } = loginOutput;
      const enabled = get(user, "enabled");
      const confirmed = get(user, "confirmed");

      const userId = get(user, "id");
      const firstName = get(user, "firstName");
      const email = get(user, "email");
      store.set("userEnabled", enabled);
      store.set("userConfirmed", confirmed);
      Global.set("token", token);
      Global.set("user.id", userId);
      Global.set("user.email", email);
      Global.set("user.firstName", firstName);
      history.push("/admin/dashboard");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: object({
      password: string().min(5, "error").required("error"),
      email: string().email("error").required("error"),
    }),
    onSubmit: (values) => {
      login(mutate, values);
    },
  });
  return (
    <View
      formik={{
        values: { ...formik.values },
        errors: { ...formik.errors },
        touched: { ...formik.touched },
      }}
      handlers={{
        submit: formik.handleSubmit,
        change: formik.handleChange,
        blur: formik.handleBlur,
      }}
    />
  );
}

export default addHocs(LoginPage, [withStore, withNotification, withRouter]);
