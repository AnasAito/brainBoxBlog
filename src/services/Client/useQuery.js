import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";

import queries from "./schemas/queries";

function useQueryWrapper({ event, variables, fetchPolicy, skip }) {
  const { loading, error, data } = useQuery(queries[event], {
    variables,
    fetchPolicy,
    skip,
  });

  // if (loading) {
  //   return "";
  // }
  if (error) return `Error, ${error.message}`;

  return { data, loading };
}

useQueryWrapper.propTypes = {
  event: PropTypes.string.isRequired,
};

export default useQueryWrapper;
