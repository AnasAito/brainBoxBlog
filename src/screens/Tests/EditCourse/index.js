import React, { useState, useEffect } from "react";
import get from "lodash/get";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useQuery, useMutation } from "services/Client";
import { useParams, useHistory } from "react-router-dom";

import View from "./view";

export default function All() {
  const [loading, setLoading] = useState(false);
  const [imgOverview, setImageOverview] = useState("");
  const [imgSidebar, setImageSidebar] = useState("");
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
  const course = get(data, "course", {
    name: "",
    overview: "",
    imgOverview: { cloudinaryId: "" },
    imgSidebar: { cloudinaryId: "" },
  });

  useEffect(() => {
    setImageOverview(get(course, "imgOverview.cloudinaryId", ""));
    setImageSidebar(get(course, "imgSidebar.cloudinaryId", ""));
  }, [course]);
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

  const { mutate: createImage } = useMutation({ event: "image.create" });
  const handleUpdateCourse = (mutate) => async (id, data) => {
    if (id) {
      const result = await mutate({
        variables: { where: { id }, data },
      });
      console.log(result);
    }
  };
  const handleAddSidebarImage = async (file) => {
    setLoading(true);
    console.log("file", file.name);

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
      handleUpdateCourse(mutate)(id, {
        imgSidebar: { id: imageId },
      });
      setLoading(false);
    }
    // setFiles([]);
  };
  const deleteSidebarImage = () => {
    handleUpdateCourse(mutate)(id, {
      imgSidebar: { id: null },
    });
    setImageSidebar("");
  };
  const deleteOverviewImage = () => {
    handleUpdateCourse(mutate)(id, {
      imgOverview: { id: null },
    });
    setImageOverview("");
  };

  const handleAddOverviewImage = async (file) => {
    setLoading(true);
    console.log("file", file.name);

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
      handleUpdateCourse(mutate)(id, {
        imgOverview: { id: imageId },
      });
      setLoading(false);
    }
    // setFiles([]);
  };
  console.log("imgover", imgOverview);

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
      handleAddOverviewImage={handleAddOverviewImage}
      handleAddSidebarImage={handleAddSidebarImage}
      loading={loading}
      imgOverview={imgOverview}
      imgSidebar={imgSidebar}
      deleteSidebarImage={deleteSidebarImage}
      deleteOverviewImage={deleteOverviewImage}
    />
  );
}
