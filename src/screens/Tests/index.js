import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "./routes";

export default function Dashboard() {
  return (
    <div>
      <div className="hidden sm:block">
        <h2>Tests</h2>
      </div>
      <div className="pt-10">
        <Switch>
          {routes.map((route) => (
            <Route
              exact={route.exact}
              key={route.name}
              path={route.layout + route.path}
              component={route.component}
            />
          ))}
          <Redirect to="tests/all?page=0&pageSize=7" />
        </Switch>
      </div>
    </div>
  );
}
