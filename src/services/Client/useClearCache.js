import get from "lodash/get";
import { useQuery } from "services/Client";
import { useApolloClient } from "@apollo/react-hooks";

export default function useClearCache({ event }) {
  const { data: visitedPages } = useQuery({ event: "paginatedViews" });

  const client = useApolloClient();

  const clearCache = () => {
    const p = get(visitedPages, "paginatedViews").filter(
      (i) => i.view !== event
    );
    client.writeData({ data: { paginatedViews: p } });
  };
  return { clearCache };
}
