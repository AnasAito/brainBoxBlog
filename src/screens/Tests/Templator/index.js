import React, { useState, useEffect } from "react";

import View from "./view";
import { useQuery } from "services/Client";

import get from "lodash/get";

// given inputs activity.id : "ckbuul42f000j01etawlwer4v"
export default function Editor({ id = "ckdrddt37003f01cfb86w3k4f" }) {
  // init with template.name or first template on carousel if template = null
  // need template object
  // maper will be used to render block or add button
  // to do
  // - query activity template and blocks by activity.id  : done
  // -

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

  const layout = get(data, "activity.layout", {});

  return (
    <div className="flex  ">
      <View layout={layout} activityId={id} />
    </div>
  );
}
