import React, { useState, useEffect } from "react";
import View from "./view";
import { useHistory, useParams } from "react-router-dom";
export default function Index({ attachInit, block, activityId, order }) {
  let history = useHistory();
  //const { id } = useParams();

  //console.log("block to be attached ");
  //console.log(block);
  return (
    <View
      attach={attachInit}
      blockData={block[0]}
      history={history}
      activityId={activityId}
      order={order}
    />
  );
}
