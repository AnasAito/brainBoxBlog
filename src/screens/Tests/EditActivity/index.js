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
    event: "activity.get.one",
    variables: {
      where: {
        id,
      },
      withSelect: true,
    },
    skip: !id,
  });
  const activity = get(data, "activity", {
    name: "",
    order: 0,

    type: "",
    blocks: [],
  });

  const submit = async (mutate, values) => {
    await mutate({
      variables: {
        where: { id },
        data: {
          name: values.title,
          order: values.order,

          type: values.type,
        },
      },
    });
    history.goBack();
  };
  const { mutate } = useMutation({
    event: "activity.update",
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: activity.name,
      order: activity.order,

      type: activity.type,
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
