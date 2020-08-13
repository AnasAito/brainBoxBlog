import React, { useEffect } from "react";
import get from "lodash/get";
import { useQueryPaginated, useQuery, useMutation } from "services/Client";
import { useHistory, useLocation } from "react-router-dom";
import withNotification from "services/Notification";
import withStore from "services/Store";
import removeData from "shared/helpers/removeData";
import concatData from "shared/helpers/concatData";

import List from "./View";
function All({ notification, store }) {
  const {
    data: { searchLike },
  } = useQuery({ event: "searchLike" });
  function useQueryParams() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQueryParams();
  const unitId = query.get("unitId");
  const { data: unit } = useQuery({
    event: "unit.get.one",
    variables: { where: { id: unitId } },
  });

  const unitTitle = get(unit, "unit.name", "");

  useEffect(() => {
    store.set("testViewTitle", unitTitle);
  }, [unitTitle, store]);

  const { data } = useQueryPaginated({
    event: "lesson.get.many",
    variables: {
      where: { unit: { id: unitId } },
      withSelect: true,
      like: { name: `%${searchLike}%` },
    },
  });

  const dataList = get(data, "lessons.data", []);

  const { mutate } = useMutation({
    event: "lesson.create",
    update: ({ data: newData }) => {
      const newData1 = concatData(data, newData.createLesson);
      return {
        event: "lesson.get.many",
        variables: {
          where: { unit: { id: unitId } },
          withSelect: true,
        },
        data: newData1,
      };
    },
  });
  const { mutate: deleteLesson } = useMutation({
    event: "lesson.delete",
    update: ({ data: newData }) => {
      const newData1 = removeData(data, newData.deleteLesson);
      return {
        event: "lesson.get.many",
        variables: {
          where: { unit: { id: unitId } },
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
        data: { name: "", unit: { id: unitId } },
      },
    });
    const lessonId = get(result, "data.createLesson.id");
    // console.log("lessonId", lessonId);
    history.push({
      pathname: `lessons/edit/${lessonId}`,
    });
  };
  const removeLesson = async (mutate, id) => {
    mutate({ variables: { where: { id } } })
      .then((res) => {
        if (get(res, "data.deleteLesson.id")) {
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
      handleDelete={(id) => removeLesson(deleteLesson, id)}
    />
  );
}

export default withNotification(withStore(All));
