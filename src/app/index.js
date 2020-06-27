// hello from ui-dev branch by ANASIO
import React, { Fragment, Suspense, lazy } from "react";

import { addHocs } from "shared/helpers/Addhocs";
import Notification from "services/Notification/body";
import Loading from "services/Loading";

// import Alert from "services/Alert/body";

import Router from "./services/Router";
import Apollo from "./services/Apollo";
import Security from "./services/Security";
import Logout from "./services/Logout";
import Beta from "screens/Beta/index";
import { Route, Switch, Redirect } from "react-router";

const Auth = lazy(() => import("layouts/Auth"));
const Admin = lazy(() => import("layouts/Admin"));

const App = () => {
  return (
    <Fragment>
      <Notification />
      {/* <Modal /> */}
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/admin" component={Admin} />
          <Route path="/logout" component={Logout} />
          <Route path="/beta" component={Beta} />
          <Redirect from="/" to="/admin" exact />

          {/* <Route component={NotFound} /> */}
        </Switch>
      </Suspense>
      {/* <Redirect from="/" to="/main/courses" /> */}
    </Fragment>
  );
};
export default addHocs(App, [Security, Router, Apollo]);
