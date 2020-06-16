import React from "react";
import get from "lodash/get";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useQuery, useMutation } from "services/Client";
import View from "./view";
export default function All() {
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

  const submit = async (mutate, values) => {};

  const { mutate } = useMutation({
    event: "user.login",
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: object({
      firstName: string().min(5, "error").required("error"),
      lastName: string().min(5, "error").required("error"),
      email: string().email("error").required("error"),
    }),
    onSubmit: (values) => {
      submit(mutate, values);
    },
  });
  return (
    <View
      groups={groups}
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
