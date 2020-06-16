import React from "react";
import get from "lodash/get";
import { useQueryPaginated, useMutation, useClearCache } from "services/Client";
import { useHistory, useLocation } from "react-router-dom";
import withNotification from "services/Notification";
import List from "./View";
function All(props) {
  const [loading, setLoading] = React.useState(true);
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

  const { mutate: uploadFile } = useMutation({
    event: "file.upload.one",
  });
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
  const submit = (mutate, uploadFile) => async (file) => {
    setLoading(true);
    const fileUpload = await uploadFile({
      variables: { file },
    });
    const path = get(fileUpload, "data.singleUpload");
    const audio = await mutate({
      variables: {
        data: {
          title: file.name,
          path,
        },
      },
    });
    const result = get(audio, "data.createAudio.id");
    setLoading(false);
    if (result) {
      props.notification.error("Audio Block Created");
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
      loading={loading}
      handleCreate={submit(mutate, uploadFile)}
      handleDelete={(id) => removeTest(deleteTest, id)}
    />
  );
}

export default withNotification(All);
