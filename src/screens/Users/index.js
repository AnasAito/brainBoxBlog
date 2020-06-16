import React from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import routes from "./routes";
export default function Dashboard() {
  return (
    <div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            {routes.map((route) => (
              <NavLink
                key={route.name}
                to={route.layout + route.path}
                activeClassName="border-indigo-500 text-indigo-600 focus:text-indigo-800 focus:border-indigo-700 hover:border-indigo-300"
                className="w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
              >
                {route.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      <div className="pt-10">
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.layout + route.path}
              component={route.component}
            />
          ))}
          <Redirect to="users/all?page=0&pageSize=10" />

          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </div>
  );
}
