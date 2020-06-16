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
    event: "quiz.get.many",
    variables: {
      withSelect: true,
      orderBy: { createdAt: "desc" },
    },
  });

  const userData = get(data, "quizzes.data", []);
  const count = get(data, "quizzes.count", []);
  const { clearCache } = useClearCache({ event: "quiz.get.many" });

  const { mutate } = useMutation({
    event: "quiz.create",
    update: () => {
      clearCache();
    },
  });
  const { mutate: deleteTest } = useMutation({
    event: "quiz.delete",
    update: () => {
      clearCache();
    },
  });
  const submit = async (mutate) => {
    const result = await mutate({ variables: { data: { title: "new quiz" } } });
    const testId = get(result, "data.createQuiz.id");
    console.log(testId);
  };
  const removeTest = async (mutate, id) => {
    mutate({ variables: { where: { id } } })
      .then((res) => {
        if (get(res, "data.deleteQuiz.id")) {
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
