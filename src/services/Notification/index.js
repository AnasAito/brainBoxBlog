import React from "react";
import PropTypes from "prop-types";
import withStore from "services/Store";

const NotificationManager = App => {
  const withNotification = ({ store, ...rest }) => {
    const error = message => {
      store.set("notification", {
        message,
        type: "danger",
        __typename: "notification"
      });
    };

    const success = message => {
      store.set("notification", {
        message,
        type: "success",
        opened: true,
        __typename: "notification"
      });
    };

    const warning = message => {
      store.set("notification", {
        message,
        type: "warning",
        opened: true,
        __typename: "notification"
      });
    };

    const notification = {
      error,
      success,
      warning
    };
    return <App {...rest} notification={notification} />;
  };
  withNotification.propTypes = {
    store: PropTypes.object.isRequired
  };

  return withStore(withNotification);
};

export default NotificationManager;
