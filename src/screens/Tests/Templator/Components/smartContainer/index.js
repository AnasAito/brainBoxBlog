import React, { useState, useEffect } from "react";
import View from "./view";
import { useHistory, useParams } from "react-router-dom";
import { useMutation, useQuery } from "services/Client";
import get from "lodash/get";
export default function Index({ activityId, order, isDelete, blockToDelete }) {
  let history = useHistory();

  return (
    <View
      history={history}
      activityId={activityId}
      order={order}
      blockToDelete={blockToDelete}
      isDelete={isDelete}
    />
  );
}
