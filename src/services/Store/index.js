import React from "react";
import { withApollo } from "react-apollo";

import queries from "../Client/schemas/queries";

const Store = App => {
  const withStore = props => {
    const { client } = props;
    const storeClient = {
      set: (key, value) => client.writeData({ data: { [key]: value } }),
      read: (event, variables) =>
        client.query({ query: queries[event], variables }),
      write: ({ event, data, variables = {} }) => {
        client.writeQuery({
          query: queries[event],
          data,
          variables
        });
      }
    };
    return <App {...props} store={storeClient} />;
  };
  return withApollo(withStore);
};

export default Store;
