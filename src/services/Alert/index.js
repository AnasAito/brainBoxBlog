import React from "react";
import PropTypes from "prop-types";
import withStore from "services/Store";

const AlertManager = App => {
  const withAlert = ({ store, ...rest }) => {
    const error = message => {
      store.set("alert", {
        message,
        type: "error",
        opened: true,
        __typename: "alert"
      });
    };

    const success = message => {
      store.set("alert", {
        message,
        type: "success",
        opened: true,
        __typename: "notification"
      });
    };

    const warning = message => {
      store.set("alert", {
        message,
        type: "warning",
        opened: true,
        __typename: "notification"
      });
    };

    const info = message => {
      store.set("alert", {
        message,
        type: "info",
        opened: true,
        __typename: "notification"
      });
    };
    const alert = {
      error,
      success,
      warning,
      info
    };
    return <App {...rest} alert={alert} />;
  };
  withAlert.propTypes = {
    store: PropTypes.object.isRequired
  };

  return withStore(withAlert);
};

export default AlertManager;
