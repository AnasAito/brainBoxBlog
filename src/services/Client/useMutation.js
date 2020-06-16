import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";
import mutations from "./schemas/mutations";
import queries from "./schemas/queries";

function useMutationWrapper({ event, update = () => null }) {
  const [mutate, { loading, client }] = useMutation(mutations[event], {
    update(cache, { data: returnedData }) {
      const updateData = update({ data: returnedData });
      if (!updateData) return;
      const { event: queryEvent, variables, data } = updateData;
      cache.writeQuery({
        query: queries[queryEvent],
        variables,
        data
      });
    },
    onError(error){
      client.writeData({
        data: {
          notification: {
            message: error.message.replace("GraphQL error:", ""),
            type: "danger",
            opened: true,
            __typename: "notification",
          },
        },
      });
    }
  });

  if (loading) {
    if (event === "file.upload.one") {
      client.writeData({
        data: {
          uploading: true
        }
      });
    }
  } 
  //   if (error) return `Error, ${error.message}`;
  return { mutate };
}

useMutationWrapper.propTypes = {
  event: PropTypes.string.isRequired,
  update: PropTypes.func
};

export default useMutationWrapper;
