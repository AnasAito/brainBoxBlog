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
    event: "scrambled.sentence.get.one",
    variables: {
      where: {
        id,
      },
    },
    skip: !id,
  });
  const test = get(data, "scrambledsentence", { title: "" });
  console.log(data);
  const submit = async (mutate, values) => {
    await mutate({
      variables: {
        where: { id },
        data: {
          title: values.title,
          //content: values.content,
        },
      },
    });
    history.goBack();
  };

  const { mutate } = useMutation({
    event: "scrambled.sentence.update",
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: test.title,
      // content: test.content,
    },
    validationSchema: object({
      title: string().min(5, "error").required("error"),
      // content: string().min(5, "error").required("error"),
    }),
    onSubmit: (values) => {
      submit(mutate, values);
    },
  });
  return <div>scrambled :{id}</div>;
}
