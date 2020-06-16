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
    event: "test.get.one",
    variables: {
      where: {
        id,
      },
    },
    skip: !id,
  });
  const test = get(data, "placementTest", { title: "", instructions: "" });

  const submit = async (mutate, values) => {
    await mutate({
      variables: {
        where: { id },
        data: {
          title: values.title,
          instructions: values.instructions,
        },
      },
    });
    history.goBack();
  };

  const { mutate } = useMutation({
    event: "test.update",
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: test.title,
      instructions: test.instructions,
    },
    validationSchema: object({
      title: string().min(5, "error").required("error"),
      instructions: string().min(5, "error").required("error"),
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
      onCancel={() => history.goBack()}
    />
  );
}
