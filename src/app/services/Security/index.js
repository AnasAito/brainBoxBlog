import React from "react";
import { Redirect, withRouter } from "react-router";
import Proptypes from "prop-types";
import { useQuery } from "services/Client";

const exceptions = ["/auth/login"];

const Security = (App) => {
  const Secured = function Secured(props) {
    const location = props.location.pathname;
    const { data: userEnabled } = useQuery({ event: "userEnabled" });

    if (exceptions.includes(location)) return <App />;
    else {
      const token = localStorage.getItem("token");
      if (!token || !userEnabled.userEnabled)
        return <Redirect to="/auth/login" />;
      return <App />;
    }
  };
  Secured.propTypes = {
    location: Proptypes.object.isRequired,
  };
  return withRouter(Secured);
};

export default Security;
