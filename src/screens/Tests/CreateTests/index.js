import React from "react";
import get from "lodash/get";
import { useQueryPaginated, useMutation, useClearCache } from "services/Client";
import { useHistory } from "react-router-dom";
import withNotification from "services/Notification";
import List from "./View";
function All(props) {
  const { data } = useQueryPaginated({
    event: "test.get.many",
    variables: {
      withSelect: true,
      orderBy: { createdAt: "desc" },
    },
  });

  const userData = get(data, "placementTests.data", []);
  const count = get(data, "placementTests.count", []);
  const { clearCache } = useClearCache({ event: "test.get.many" });

  const { mutate } = useMutation({
    event: "test.create",
    update: () => {
      clearCache();
    },
  });
  const { mutate: deleteTest } = useMutation({
    event: "test.delete",
    update: () => {
      clearCache();
    },
  });
  let history = useHistory();
  const submit = async (mutate) => {
    const result = await mutate({ variables: { data: { title: "" } } });
    const testId = get(result, "data.createPlacementTest.id");
    history.push({ pathname: `edit/${testId}`, search: "?new=true" });
  };
  const removeTest = async (mutate, id) => {
    mutate({ variables: { where: { id } } })
      .then((res) => {
        if (get(res, "data.deletePlacementTest.id")) {
          props.notification.success("Delete Successful");
        } else {
          props.notification.error("Error");
        }
      })
      .catch((e) => {});
  };
  return (
    <List
      data={userData}
      count={count}
      handleCreate={() => submit(mutate)}
      handleDelete={(id) => removeTest(deleteTest, id)}
    />
  );
}

export default withNotification(All);
