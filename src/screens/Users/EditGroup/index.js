import React, { useState } from "react";
import get from "lodash/get";
import { object, string } from "yup";
import { Formik, Form } from "formik";
import withNotification from "services/Notification";
import { useParams, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "services/Client";
import forEachAsync from "shared/helpers/forEachAsync";
import View from "./view";

import "react-datepicker/dist/react-datepicker.css";

function All({ notification }) {
  let history = useHistory();
  const [state, setState] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDate = (date, stateDate) => {
    setState((state) => ({
      ...state,
      [stateDate]: date,
    }));
  };

  const { id } = useParams();

  const { data: groupData } = useQuery({
    event: "group.get.one",
    variables: {
      where: {
        id,
      },
    },
    skip: !id,
  });

  const { data: groupPlacementTestData } = useQuery({
    event: "group.placement.test.get.many",
    variables: {
      where: { group: { id } },
      withSelect: true,
    },
  });

  const groupPlacementTests = get(
    groupPlacementTestData,
    "groupPlacementTests.data",
    []
  );
  const group = get(groupData, "group", { name: "" });

  const {
    data: { searchLike },
  } = useQuery({ event: "searchLike" });

  const { data } = useQuery({
    event: "test.get.many",
    variables: {
      like: {
        title: `%${searchLike}%`,
      },
    },
    skip: searchLike === "",
  });
  const groups = get(data, "placementTests.data", []);

  const { mutate } = useMutation({ event: "group.update" });

  const { mutate: createGroupPlacementTest } = useMutation({
    event: "group.placement.test.create",
  });

  const { mutate: updateGroupPlacementTest } = useMutation({
    event: "group.placement.test.update",
  });

  const submit = async (
    mutate,
    createGroupPlacementTest,
    updateGroupPlacementTest,
    values
  ) => {
    const results = await mutate({
      variables: {
        where: { id },
        data: {
          name: values.name,
        },
      },
    });

    await forEachAsync(values.updateIds, async (o) => {
      const variables = {
        where: { id: o.id },
        data: {
          enabled: o.enabled,
        },
      };

      return updateGroupPlacementTest({ variables: variables });
    });

    await forEachAsync(values.testIds, async (o) => {
      const variables = {
        data: {
          placementTest: {
            id: o.id,
          },
          group: {
            id,
          },
          enabled: false,
          begin: o.startDate,
          end: o.endDate,
          notes: "",
        },
      };

      return createGroupPlacementTest({ variables: variables });
    });

    get(results, "data.updateGroup.id")
      ? notification.success("Group Updated")
      : notification.error("Error");

    history.goBack();
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        name: group.name,
        group: "",
        testIds: [],
        updateIds: groupPlacementTests,
      }}
      onSubmit={(values) =>
        submit(
          mutate,
          createGroupPlacementTest,
          updateGroupPlacementTest,
          values
        )
      }
      validationSchema={object({
        name: string().min(5, "error").required("error"),
      })}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <View
            dates={state}
            handleDate={handleDate}
            groups={groups}
            groupPlacementTests={groupPlacementTests}
            formik={{
              values: { ...values },
              errors: { ...errors },
              touched: { ...touched },
            }}
            handlers={{
              change: handleChange,
              blur: handleBlur,
            }}
          />
        </Form>
      )}
    </Formik>
  );
}

export default withNotification(All);
