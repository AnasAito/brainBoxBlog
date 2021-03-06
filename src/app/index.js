import React, { Fragment, Suspense, lazy } from "react";

import { addHocs } from "shared/helpers/Addhocs";
import Notification from "services/Notification/body";
import Loading from "services/Loading";

// import Alert from "services/Alert/body";

import Router from "./services/Router";
import Apollo from "./services/Apollo";

import "react-quill/dist/quill.snow.css";

import { Route, Switch, Redirect } from "react-router";
const Home = lazy(() => import("layouts/Home"));
const Main = lazy(() => import("layouts/Main"));
const Article = lazy(() => import("layouts/Article"));
const About = lazy(() => import("layouts/About"));
const App = () => {
  return (
    <Fragment>
      <Notification />
      {/* <Modal /> */}
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/main/:id" component={Main} />
          <Route path="/article/:id" component={Article} />
          <Route path="/about" component={About} />
          <Redirect from="/" to="/home" exact />

          {/* <Route component={NotFound} /> */}
        </Switch>
      </Suspense>
      {/* <Redirect from="/" to="/main/courses" /> */}
    </Fragment>
  );
};
export default addHocs(App, [Router, Apollo]);
