import React from "react";

import View from "./view";
import { useQuery } from "services/Client";

import get from "lodash/get";
import { useParams } from "react-router-dom";
// given inputs activity.id : "ckbuul42f000j01etawlwer4v"
export default function Editor() {
  // init with template.name or first template on carousel if template = null
  // need template object
  // maper will be used to render block or add button
  // to do
  // - query activity template and blocks by activity.id  : done
  // -
  const { id } = useParams();

  const { data } = useQuery({
    event: "activity.get.one",

    variables: {
      where: {
        id,
      },
      withSelect: true,
    },
    skip: !id,
  });
  //default value if activity is empty
  console.log("test", data);
  const layout = get(data, "activity.layout", {});

  return (
    <div className="flex  ">
      <View layout={layout} activityId={id} />
    </div>
  );
}
