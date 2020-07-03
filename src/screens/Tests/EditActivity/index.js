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
        id
      },
      withSelect: true
    },
    skip: !id
  });
  //default value if activity is empty
  const activity = get(data, "activity", {
    name: "",
    order: 0,
    template: "template1",
    type: "",
    blocks: []
  });

  const submit = async (mutate, values) => {
    await mutate({
      variables: {
        where: { id },
        data: {
          name: values.title,
          order: values.order,
          template: values.template,
          type: values.type
        }
      }
    });
    history.goBack();
  };
  const { mutate } = useMutation({
    event: "activity.update"
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: activity.name,
      order: activity.order,
      template: activity.template,
      type: activity.type
    },
    validationSchema: object({
      title: string()
        .min(5, "error")
        .required("error")
    }),
    onSubmit: values => {
      submit(mutate, values);
    }
  });

  return (
    <View
      blocks={activity.blocks}
      formik={{
        values: { ...formik.values },
        errors: { ...formik.errors },
        touched: { ...formik.touched }
      }}
      handlers={{
        submit: formik.handleSubmit,
        change: formik.handleChange,
        blur: formik.handleBlur
      }}
      onCancel={history.goBack}
    />
  );
}
