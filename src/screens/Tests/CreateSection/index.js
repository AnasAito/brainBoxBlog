import React from "react";
import get from "lodash/get";
import { useQueryPaginated, useMutation } from "services/Client";
import { useHistory, useLocation } from "react-router-dom";
import withNotification from "services/Notification";
import removeData from "shared/helpers/removeData";
import concatData from "shared/helpers/concatData";

import List from "./View";
function All(props) {
  function useQueryParams() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQueryParams();
  const sectionContainerId = query.get("sectionContainer");
  const { data } = useQueryPaginated({
    event: "section.get.many",
    variables: {
      where: { sectionContainer: { id: sectionContainerId } },
      withSelect: true,
    },
  });

  const dataList = get(data, "sections.data", []);

  const { mutate } = useMutation({
    event: "section.create",
    update: ({ data: newData }) => {
      const newData1 = concatData(data, newData.createSection);
      return {
        event: "section.get.many",
        variables: {
          where: { sectionContainer: { id: sectionContainerId } },
          withSelect: true,
        },
        data: newData1,
      };
    },
  });
  const { mutate: deleteTest } = useMutation({
    event: "section.delete",
    update: ({ data: newData }) => {
      const newData1 = removeData(data, newData.deleteSection);
      return {
        event: "section.get.many",
        variables: {
          where: { sectionContainer: { id: sectionContainerId } },
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
        data: { name: "", sectionContainer: { id: sectionContainerId } },
      },
    });
    const sectionId = get(result, "data.createSection.id");
    history.push({
      pathname: `sections/edit/${sectionId}`,
    });
  };
  const removeTest = async (mutate, id) => {
    mutate({ variables: { where: { id } } })
      .then((res) => {
        if (get(res, "data.deleteSection.id")) {
          props.notification.success("Delete Successful");
        } else {
          props.notification.error("Error");
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

export default withNotification(All);
