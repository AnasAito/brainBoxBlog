import React from "react";
import get from "lodash/get";
import { useQueryPaginated, useMutation, useClearCache } from "services/Client";
import { useHistory, useLocation } from "react-router-dom";
import withNotification from "services/Notification";
import List from "./View";
function All(props) {
  function useQueryParams() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQueryParams();
  const page = query.get("page");
  const pageSize = query.get("pageSize");
  let history = useHistory();

  React.useEffect(() => {
    if (!page || !pageSize) {
      history.push({ search: "&page=0&pageSize=7" });
    }
  }, [page, pageSize, history]);

  const { data } = useQueryPaginated({
    event: "audio.get.many",
    variables: {
      withSelect: true,
      orderBy: { createdAt: "desc" },
    },
  });

  const userData = get(data, "audios.data", []);
  const count = get(data, "audios.count", []);
  const { clearCache } = useClearCache({ event: "audio.get.many" });

  const { mutate } = useMutation({
    event: "audio.create",
    update: () => {
      clearCache();
    },
  });
  const { mutate: deleteTest } = useMutation({
    event: "audio.delete",
    update: () => {
      clearCache();
    },
  });
  const submit = async (mutate) => {
    const result = await mutate({
      variables: { data: { title: "", content: "" } },
    });
    const testId = get(result, "data.createAudio.id");
    console.log(result);
    if (testId) {
      history.push({ pathname: `text/${testId}`, search: "?new=true" });
    } else {
      props.notification.error("Error");
    }
  };
  const removeTest = async (mutate, id) => {
    mutate({ variables: { where: { id } } })
      .then((res) => {
        if (get(res, "data.deleteAudio.id")) {
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
