import React from "react";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "apollo-link-error";
import requestLink from "./links/requestLink";
import errors from "./errors";

const data = {
  currentCourse: null,
  currentLevel: null,
  currentUnit: null,
  currentLesson: null,
  currentPlacementTest: null,
  currentUserGroup: null,
  currentSection: null,
  currentActivity: null,
  initialTime: null,
  timeout: false,
  currentActivityName: null,
  notification: null,
  alert: null,
  screenWrapperTitle: "",
  currentAnswers: null,
  visitedActivities: [],
  uploading: false,
  userEnabled: true,
  blocksLoading: false,
  pageSize: 10,
  pageIndex: 0,
  searchLike: "",
  testViewTitle:"Tests",
  paginatedViews: [],
};

const cache = new InMemoryCache();

const USER_ENABLED = gql`
  {
    userEnabled @client
  }
`;

const NOTIFICATION = gql`
  {
    notification @client {
      type
      message
      opened
    }
  }
`;

const resetToken = onError(
  ({ response, networkError, graphQLErrors, operation }, cb) => {
    const { cache } = operation.getContext();
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, code, path }) => {
        if (Object.keys(errors).includes(code)) {
          localStorage.clear();
          cache.writeQuery({
            query: USER_ENABLED,
            data: { userEnabled: false },
          });
        }
        return null;
      });
    if (networkError) {
      cache.writeQuery({
        query: NOTIFICATION,
        data: {
          alert: {
            message: networkError.message,
            type: "danger",
            opened: true,
            __typename: "alert",
          },
        },
      });
    }
  }
);

const client = new ApolloClient({
  link: ApolloLink.from([
    resetToken,
    requestLink,
    createUploadLink({
      uri: process.env.REACT_APP_BACKEND_URI,
    }),
  ]),
  cache,
  resolvers: {},
});

cache.writeData({ data });

client.onResetStore(() => {
  // eslint-disable-next-line
  console.log("reset store");
  client.writeData({
    data,
  });
});

const Apollo = (App) =>
  function Apolloed() {
    return (
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
      // <ApolloProvider client={client}>
      //   <ApolloNetworkStatusProvider>
      //     <GlobalLoadingIndicator />
      //     <App />
      //   </ApolloNetworkStatusProvider>
      // </ApolloProvider>
    );
  };

export default Apollo;
