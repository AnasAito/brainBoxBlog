import React from "react";
import get from "lodash/get";
import { object, string } from "yup";
// import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { useMutation, useClearCache, useQuery } from "services/Client";
import withNotification from "services/Notification";
import View from "./view";

const axios = require("axios").default;

function All({ notification }) {
  const {
    data: { searchLike },
  } = useQuery({ event: "searchLike" });

  const [loading, setLoading] = React.useState(false);

  const { data: groupsData } = useQuery({
    event: "group.get.many",
    variables: {
      like: {
        name: `%${searchLike}%`,
      },
    },
    skip: searchLike === "",
  });
  const groups = get(groupsData, "groups.data", []);

  const submit = async (mutate, values) => {
    setLoading(true);
    const results = await mutate({
      variables: {
        where: {
          placementTest: { id: values.testId },
          usergroup: { group: { id: values.groupId } },
        },
      },
    });
    const file = get(results, "data.placementTestReport");
    const response = await axios
      .request({
        method: "get",
        responseType: "blob",
        url: "https://us-central1-lofty-hall-246216.cloudfunctions.net/downloadZip",
      })
      .catch((err) => {
        console.log(err);
      });

    if (response) {
      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = downloadUrl;

      link.setAttribute("download", "downloadzip"); //any other extension

      document.body.appendChild(link);

      link.click();

      link.remove();

      console.log("Download Finished");
    } else {
      console.log("Download Error");
    }
    if (file) {
      notification.success("Report successfully generated");
      window.open(file);
    } else {
      notification.error(
        "There appears to be a problem, please contact your administrator"
      );
    }
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      groupName: "",
      groupId: "",
      testId: "",
    },
    validationSchema: object({
      testId: string().required("error"),
    }),
    onSubmit: (values) => {
      submit(mutate, values);
    },
  });

  const { groupId } = formik.values;

  const { data: placementTestsData } = useQuery({
    event: "group.placement.test.get.many",
    variables: {
      where: {
        group: { id: groupId },
      },
      withSelect: true,
    },
    skip: groupId === "",
  });

  const tests = get(placementTestsData, "groupPlacementTests.data", []).map(
    (v) => ({
      value: v.placementTest.id,
      label: v.placementTest.title,
      sectionContainer: v.placementTest.sectionContainer.id,
    })
  );

  const { clearCache } = useClearCache({
    event: "user.placement.test.get.many",
  });

  const { mutate } = useMutation({
    event: "files.report",
    update: () => {
      clearCache();
    },
  });

  return (
    <div className="grid grid-cols-4 gap-4">
      <View
        groups={groups}
        tests={tests}
        loading={loading}
        formik={{
          values: { ...formik.values },
          errors: { ...formik.errors },
          touched: { ...formik.touched },
          isDisabled: !(formik.isValid && formik.dirty),
        }}
        handlers={{
          submit: formik.handleSubmit,
          change: formik.handleChange,
          blur: formik.handleBlur,
        }}
      />
    </div>
  );
}

export default withNotification(All);
