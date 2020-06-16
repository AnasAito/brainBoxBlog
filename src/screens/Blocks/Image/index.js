import React from "react";
import get from "lodash/get";
import { useQueryPaginated, useMutation, useClearCache } from "services/Client";
import { useHistory, useLocation } from "react-router-dom";
import withNotification from "services/Notification";
import List from "./View";
function All(props) {
  const [loading, setLoading] = React.useState(false);
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
    event: "image.get.many",
    variables: {
      withSelect: true,
      orderBy: { createdAt: "desc" },
    },
  });

  const userData = get(data, "images.data", []);
  const count = get(data, "images.count", []);
  const { clearCache } = useClearCache({ event: "image.get.many" });

  const { mutate } = useMutation({
    event: "image.create",
    update: () => {
      clearCache();
    },
  });
  const { mutate: deleteTest } = useMutation({
    event: "image.delete",
    update: () => {
      clearCache();
    },
  });
  const submit = (mutate) => async (file) => {
    const audio = await mutate({
      variables: {
        data: {
          name: file.name,
        },
        file,
      },
    });
    const result = get(audio, "data.createImage.id");
    setLoading(false);
    if (result) {
      props.notification.error("Image Block Created");
    } else {
      props.notification.error("Error");
    }
  };
  const removeTest = async (mutate, id) => {
    mutate({ variables: { where: { id } } })
      .then((res) => {
        if (get(res, "data.deleteImage.id")) {
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
      loading={loading}
      handleCreate={submit(mutate)}
      handleDelete={(id) => removeTest(deleteTest, id)}
    />
  );
}

export default withNotification(All);
