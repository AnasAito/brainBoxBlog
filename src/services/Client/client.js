import React from "react";
import { ApolloConsumer } from "react-apollo";
import throttle from "lodash/throttle";
import mutations from "../Client/schemas/mutations";

const Client = App => {
  const withClient = props => (
    <ApolloConsumer>
      {client => {
        const remoteClient = {
          mutate: (event, data) =>
            client.mutate({
              mutation: mutations[event],
              ...data
            }),
          throttledMutation: (event, wait) =>
            throttle(
              data =>
                client.mutate({
                  mutation: mutations[event],
                  ...data
                }),
              wait,
              { trailing: true }
            )
        };

        return <App {...props} client={remoteClient} />;
      }}
    </ApolloConsumer>
  );
  return withClient;
};

export default Client;
