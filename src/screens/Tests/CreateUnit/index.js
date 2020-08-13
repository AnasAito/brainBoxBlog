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
  const levelId = query.get("levelId");
  const { data: level } = useQuery({
    event: "level.get.one",
    variables: { where: { id: levelId } },
  });

  const levelTitle = get(level, "level.name", "");

  useEffect(() => {
    store.set("testViewTitle", levelTitle);
  }, [levelTitle, store]);

  const { data } = useQueryPaginated({
    event: "unit.get.many",
    variables: {
      where: { level: { id: levelId } },
      withSelect: true,
      like: { name: `%${searchLike}%` },
    },
  });

  const dataList = get(data, "units.data", []);

  const { mutate } = useMutation({
    event: "unit.create",
    update: ({ data: newData }) => {
      const newData1 = concatData(data, newData.createUnit);
      return {
        event: "unit.get.many",
        variables: {
          where: { level: { id: levelId } },
          withSelect: true,
        },
        data: newData1,
      };
    },
  });
  const { mutate: deleteUnit } = useMutation({
    event: "unit.delete",
    update: ({ data: newData }) => {
      const newData1 = removeData(data, newData.deleteUnit);
      return {
        event: "unit.get.many",
        variables: {
          where: { level: { id: levelId } },
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
        data: { name: "", level: { id: levelId } },
      },
    });
    const unitId = get(result, "data.createUnit.id");
    history.push({
      pathname: `units/edit/${unitId}`,
    });
  };
  const removeUnit = async (mutate, id) => {
    mutate({ variables: { where: { id } } })
      .then((res) => {
        if (get(res, "data.deleteUnit.id")) {
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
      handleDelete={(id) => removeUnit(deleteUnit, id)}
    />
  );
}

export default withNotification(withStore(All));
