import React from "react";
import get from "lodash/get";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useQuery, useMutation } from "services/Client";
import { useParams, useHistory } from "react-router-dom";
import View from "./view";
export default function All() {
  const { id } = useParams();
  let history = useHistory();
  const { data } = useQuery({
    event: "section.get.one",
    variables: {
      where: {
        id,
      },
    },
    skip: !id,
  });
  const section = get(data, "section", { name: "", order: 0, timeout: 10 });
  const submit = async (mutate, values) => {
    await mutate({
      variables: {
        where: { id },
        data: {
          name: values.title,
          timeout: values.timeout,
          order: values.order,
        },
      },
    });
    history.goBack();
  };

  const { mutate } = useMutation({
    event: "section.update",
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: section.name,
      order: section.order,
      timeout: section.timeout,
    },
    validationSchema: object({
      title: string().min(5, "error").required("error"),
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
