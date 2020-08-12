import React from "react";
import get from "lodash/get";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useQuery, useMutation } from "services/Client";
import { useParams, useHistory } from "react-router-dom";
import View from "./view";

export default function All() {
  const { id } = useParams();
  const history = useHistory();
  const { data } = useQuery({
    event: "course.get.one",
    variables: {
      where: {
        id,
      },
    },
    skip: !id,
  });
  const course = get(data, "course", { name: "", overview: "" });

  const submit = async (mutate, values) => {
    await mutate({
      variables: {
        where: { id },
        data: {
          name: values.name,
          overview: values.overview,
        },
      },
    });
    history.goBack();
  };

  const { mutate } = useMutation({
    event: "course.update",
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: course.name,
      overview: course.overview,
    },
    validationSchema: object({
      name: string().min(5, "error").required("error"),
      overview: string().min(5, "error").required("error"),
    }),
    onSubmit: (values) => {
      submit(mutate, values);
    },
  });

  // console.log(formik.values.instructions)

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
      onCancel={() => history.goBack()}
    />
  );
}
