import React from "react";
import get from "lodash/get";
import {
  useQueryPaginated,
  useQuery,
  useMutation,
  useClearCache,
} from "services/Client";
import { useHistory } from "react-router-dom";
import withNotification from "services/Notification";
import List from "./View";

function All(props) {
  const {
    data: { searchLike },
  } = useQuery({ event: "searchLike" });
  const { data } = useQueryPaginated({
    event: "course.get.many",
    variables: {
      withSelect: true,
      orderBy: { createdAt: "desc" },
      like: { name: `%${searchLike}%` },
    },
  });
  console.log("courses", data);
  const userData = get(data, "courses.data", []);
  const count = get(data, "courses.count", []);

  const { clearCache } = useClearCache({ event: "course.get.many" });

  const { mutate: createCourse } = useMutation({
    event: "course.create",
    update: () => {
      clearCache();
    },
  });
  const { mutate: deleteCourse } = useMutation({
    event: "course.delete",
    update: () => {
      clearCache();
    },
  });
  let history = useHistory();
  const submit = async (mutate) => {
    const result = await mutate({ variables: { data: { name: "" } } });

    const courseId = get(result, "data.createCourse.id");
    console.log("result ", courseId);
    history.push({ pathname: `edit/${courseId}`, search: "?new=true" });
  };
  const removeCourse = async (mutate, id) => {
    mutate({ variables: { where: { id } } })
      .then((res) => {
        if (get(res, "data.deleteCourse.id")) {
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
      handleCreate={() => submit(createCourse)}
      handleDelete={(id) => removeCourse(deleteCourse, id)}
    />
  );
}

export default withNotification(All);
