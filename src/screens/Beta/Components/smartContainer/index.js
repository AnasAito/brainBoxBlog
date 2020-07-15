import React, { useState, useEffect } from "react";
import View from "./view";
import { useHistory, useParams } from "react-router-dom";
import { useMutation, useQuery } from "services/Client";
import get from "lodash/get";
export default function Index({ attachInit, block, activityId, order }) {
  let history = useHistory();

  const { data: activity } = useQuery({
    event: "activity.get.one",
    variables: { where: { id: activityId }, withSelect: true },
    skip: !activityId
  });

  const update = async () => {
    // updat layout
    const prevLayout = get(activity, "activity.layout", {});
    console.log("layout");
    console.log(prevLayout);

    const activityUpdated = await updateLayout({
      variables: {
        where: { id: activityId },
        data: {
          layout: {
            ...prevLayout,
            [order]: ""
          }
        }
      }
    });
    //notification.success("Block successfully attached to activity");
    //console.log("success");
  };
  const { mutate: updateLayout } = useMutation({
    event: "activity.update"
  });
  return (
    <View
      attach={attachInit}
      blockData={block[0]}
      history={history}
      activityId={activityId}
      order={order}
      update={update}
    />
  );
}
