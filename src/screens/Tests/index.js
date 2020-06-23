import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "./routes";
import SearchBar from "shared/components/SearchBar/index";
export default function Dashboard() {
  return (
    <div>
      <div className="hidden sm:block pt-10">
        <div className="flex flex-row justify-between">
          <h2 className="text-3xl font-black">Tests</h2>

          <SearchBar />
        </div>

        <div class="border-t border-gray-100"></div>
      </div>
      <div className="pt-10 ">
        <Switch>
          {routes.map(route => (
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
