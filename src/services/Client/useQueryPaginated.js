import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import { useLocation } from "react-router-dom";
import usePagination from "./usePagination";
import queries from "./schemas/queries";

function useQueryWrapper({ event, variables, skip }) {
  function useQueryParams() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQueryParams();
  const pageIndex = parseInt(query.get("page"));
  const pageSize = parseInt(query.get("pageSize"));

  const { fetchPolicy } = usePagination({ event, page: pageIndex });
  const { loading, error, data } = useQuery(queries[event], {
    variables: { ...variables, take: pageSize, skip: pageIndex * pageSize },
    fetchPolicy,
    skip,
  });

  if (error) return `Error, ${error.message}`;

  return { data, loading, pageSize };
}

useQueryWrapper.propTypes = {
  event: PropTypes.string.isRequired,
};

export default useQueryWrapper;
