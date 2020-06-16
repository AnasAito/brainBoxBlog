import React from "react";
import PropTypes from "prop-types";
import withStore from "services/Store";

const ModalManager = App => {
  const withModal = ({ store, ...rest }) => {
    const error = message => {
      store.set("modal", {
        message,
        type: "error",
        opened: true,
        __typename: "alert"
      });
    };

    const success = message => {
      store.set("modal", {
        message,
        type: "success",
        opened: true,
        __typename: "notification"
      });
    };

    const warning = message => {
      store.set("modal", {
        message,
        type: "warning",
        opened: true,
        __typename: "notification"
      });
    };

    const info = message => {
      store.set("modal", {
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
  withModal.propTypes = {
    store: PropTypes.object.isRequired
  };

  return withStore(withModal);
};

export default ModalManager;
