import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import Alert from "./view";
import { useQuery } from "services/Client";
import withStore from "services/Store";

const Body = ({ store }) => {
  const { data } = useQuery({ event: "alert" });
  const type = get(data, "alert.type", "");
  const message = get(data, "alert.message", "");
  const opened = get(data, "alert.opened", "");
  const handleClose = () => {
    store.set("alert", {
      message: "",
      type: "",
      opened: false,
      __typename: "alert"
    });
  };
  if (!type || !message) return <div />;

  return (
    <Alert
      type={type}
      message={message}
      handleClose={handleClose}
      opened={opened}
    />
  );
};
Body.propTypes = {
  store: PropTypes.object.isRequired
};

export default withStore(Body);
