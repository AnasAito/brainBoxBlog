import React, { useEffect } from "react";
import get from "lodash/get";
import { useQuery, useMutation } from "services/Client";
import { useHistory, useLocation } from "react-router-dom";
import withNotification from "services/Notification";
import withStore from "services/Store";
import removeData from "shared/helpers/removeData";
import concatData from "shared/helpers/concatData";

import List from "./View";
function All({ notification, store }) {
  function useQueryParams() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQueryParams();
  const lessonId = query.get("lessonId");
  console.log("lessonIdtoAct", lessonId);
  const { data: lesson } = useQuery({
    event: "lesson.get.one",
    variables: { where: { id: lessonId } },
  });

  const lessonTitle = get(lesson, "lesson.name", "");

  useEffect(() => {
    store.set("testViewTitle", lessonTitle);
  }, [lessonTitle, store]);

  const { data } = useQuery({
    event: "activity.get.many",
    variables: {
      where: { lesson: { id: lessonId } },
      withSelect: true,
    },
  });

  const dataList = get(data, "activities.data", []);

  const { mutate } = useMutation({
    event: "activity.create",
    update: ({ data: newData }) => {
      const newData1 = concatData(data, newData.createActivity);
      return {
        event: "activity.get.many",
        variables: {
          where: { lesson: { id: lessonId } },
          withSelect: true,
        },
        data: newData1,
      };
    },
  });
  const { mutate: deleteActivity } = useMutation({
    event: "activity.delete",
    update: ({ data: newData }) => {
      const newData1 = removeData(data, newData.deleteActivity);
      return {
        event: "activity.get.many",
        variables: {
          where: { lesson: { id: lessonId } },
          withSelect: true,
        },
        data: newData1,
      };
    },
  });
  let history = useHistory();
  const submit = async (mutate) => {
    const result = await mutate({
      variables: {
        data: { name: "", template: "", lesson: { id: lessonId } },
      },
    });
    const activityId = get(result, "data.createActivity.id");
    history.push({
      pathname: `activities/edit/${activityId}`,
    });
  };
  const removeActivity = async (mutate, id) => {
    console.log("id to delete ", id);
    mutate({ variables: { where: { id } } })
      .then((res) => {
        if (get(res, "data.deleteActivity.id")) {
          notification.success("Delete Successful");
        } else {
          notification.error("Error");
        }
      })
      .catch((e) => {});
  };
  return (
    <List
      data={dataList}
      handleCreate={() => submit(mutate)}
      handleDelete={(id) => removeActivity(deleteActivity, id)}
    />
  );
}

export default withNotification(withStore(All));
