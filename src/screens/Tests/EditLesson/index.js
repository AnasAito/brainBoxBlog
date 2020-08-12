import React from "react";
import get from "lodash/get";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useQuery, useMutation } from "services/Client";
import { useParams, useHistory } from "react-router-dom";
import View from "./view";
export default function All() {
  const { id } = useParams();
  console.log("lessonId", id);
  let history = useHistory();
  const { data } = useQuery({
    event: "lesson.get.one",
    variables: {
      where: {
        id,
      },
    },
    skip: !id,
  });
  const lesson = get(data, "lesson", { name: "", order: 0 });

  const submit = async (mutate, values) => {
    await mutate({
      variables: {
        where: { id },
        data: {
          name: values.name,
          order: values.order,
        },
      },
    });
    history.goBack();
  };

  const { mutate } = useMutation({
    event: "lesson.update",
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: lesson.name,
      order: lesson.order,
    },
    validationSchema: object({
      name: string().min(5, "error").required("error"),
    }),
    onSubmit: (values) => {
      submit(mutate, values);
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
      onCancel={history.goBack}
    />
  );
}
