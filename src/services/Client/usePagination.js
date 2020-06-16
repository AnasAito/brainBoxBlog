import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { get, find } from "lodash";
import { useApolloClient } from "@apollo/react-hooks";

import { useQuery } from "services/Client";

function addToVisited(isFetchNetwork, newVisitedPages, page, event) {
  if (isFetchNetwork) {
    newVisitedPages.push({
      view: event,
      page: page,
      __typename: "paginatedViews",
    });
  }
}

function checkInVisited(newVisitedPages, page, event) {
  return !find(newVisitedPages, (o) => o.page === page && o.view === event);
}

function usePagination({ event, page }) {
  const [fetchPolicy, setFetchPolicy] = useState("network-only");
  const { data } = useQuery({ event: "paginatedViews" });
  const client = useApolloClient();

  const changeFetchPolicy = useCallback((fp) => {
    setFetchPolicy(fp);
  }, []);

  useEffect(() => {
    const newVisitedPages = get(data, "paginatedViews", []);
    const isFetchNetwork = checkInVisited(newVisitedPages, page, event);
    addToVisited(isFetchNetwork, newVisitedPages, page, event);
    const fp = isFetchNetwork ? "network-only" : "cache-first";
    changeFetchPolicy(fp);
    client.writeData({ data: { paginatedViews: newVisitedPages } });
  });

  return { fetchPolicy };
}

usePagination.propTypes = {
  store: PropTypes.object.isRequired,
};

export default usePagination;
