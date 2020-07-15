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
  const sectionId = query.get("section");

  const { data: sectionTitle } = useQuery({
    event: "section.get.one",
    variables: { where: { id: sectionId } },
  });

  const testTitle = get(sectionTitle, "section.name", "");

  useEffect(() => {
    store.set("testViewTitle", testTitle);
  }, [testTitle, store]);

  
  const { data } = useQuery({
    event: "activity.get.many",
    variables: {
      where: { section: { id: sectionId } },
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
          where: { section: { id: sectionId } },
          withSelect: true,
        },
        data: newData1,
      };
    },
  });
  const { mutate: deleteTest } = useMutation({
    event: "activity.delete",
    update: ({ data: newData }) => {
      const newData1 = removeData(data, newData.deleteActivity);
      return {
        event: "activity.get.many",
        variables: {
          where: { section: { id: sectionId } },
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
        data: { name: "", template: "", section: { id: sectionId } },
      },
    });
    const activityId = get(result, "data.createActivity.id");
    history.push({
      pathname: `activities/edit/${activityId}`,
    });
  };
  const removeTest = async (mutate, id) => {
    mutate({ variables: { where: { id } } })
      .then((res) => {
        if (get(res, "data.deleteSection.id")) {
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
      handleDelete={(id) => removeTest(deleteTest, id)}
    />
  );
}

export default withNotification(withStore(All));
