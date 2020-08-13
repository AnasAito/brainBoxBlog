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
  const courseId = query.get("courseId");
  const { data: course } = useQuery({
    event: "course.get.one",
    variables: { where: { id: courseId } },
  });

  const courseTitle = get(course, "course.name", "");

  useEffect(() => {
    store.set("testViewTitle", courseTitle);
  }, [courseTitle, store]);

  const { data } = useQueryPaginated({
    event: "level.get.many",
    variables: {
      where: { course: { id: courseId } },
      withSelect: true,
      like: { name: `%${searchLike}%` },
    },
  });

  const dataList = get(data, "levels.data", []);

  const { mutate } = useMutation({
    event: "level.create",
    update: ({ data: newData }) => {
      const newData1 = concatData(data, newData.createLevel);
      return {
        event: "level.get.many",
        variables: {
          where: { course: { id: courseId } },
          withSelect: true,
        },
        data: newData1,
      };
    },
  });
  const { mutate: deleteLevel } = useMutation({
    event: "level.delete",
    update: ({ data: newData }) => {
      const newData1 = removeData(data, newData.deleteLevel);
      return {
        event: "level.get.many",
        variables: {
          where: { course: { id: courseId } },
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
        data: { name: "", course: { id: courseId } },
      },
    });
    const levelId = get(result, "data.createLevel.id");
    history.push({
      pathname: `levels/edit/${levelId}`,
    });
  };
  const removeLevel = async (mutate, id) => {
    mutate({ variables: { where: { id } } })
      .then((res) => {
        if (get(res, "data.deleteLevel.id")) {
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
      handleDelete={(id) => removeLevel(deleteLevel, id)}
    />
  );
}

export default withNotification(withStore(All));
