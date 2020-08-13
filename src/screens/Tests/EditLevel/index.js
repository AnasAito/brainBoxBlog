import React, { useState } from "react";
import get from "lodash/get";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useQuery, useMutation } from "services/Client";
import { useParams, useHistory } from "react-router-dom";
import View from "./view";
export default function All() {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  let history = useHistory();
  const { data } = useQuery({
    event: "level.get.one",
    variables: {
      where: {
        id,
      },
    },
    skip: !id,
  });

  const level = get(data, "level", { name: "", order: 0, overview: "" });

  const submit = async (mutate, values) => {
    await mutate({
      variables: {
        where: { id },
        data: {
          name: values.name,
          overview: values.overview,
          order: values.order,
        },
      },
    });
    history.goBack();
  };

  const { mutate } = useMutation({
    event: "level.update",
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: level.name,
      order: level.order,
      overview: level.overview,
    },
    validationSchema: object({
      name: string().min(5, "error").required("error"),
    }),
    onSubmit: (values) => {
      submit(mutate, values);
    },
  });

  const { mutate: createImage } = useMutation({ event: "image.create" });
  const handleUpdateLevel = (mutate) => async (id, data) => {
    if (id) {
      const result = await mutate({
        variables: { where: { id }, data },
      });
    }
  };
  const handleAddImage = async (file) => {
    setLoading(true);

    const result = await createImage({
      variables: {
        file,
        data: { name: file.name },
      },
    });

    const imageId = get(result, "data.createImage.id");
    if (imageId) {
      //  update course
      console.log("imageId", imageId);
      handleUpdateLevel(mutate)(id, {
        imgOverview: { id: imageId },
      });
      setLoading(false);
    }
    // setFiles([]);
  };
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
      handleAddImage={handleAddImage}
      loading={loading}
    />
  );
}
