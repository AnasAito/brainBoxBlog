import React from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import routes from "./routes";
export default function Dashboard() {
  return (
    <div className="flex flex-row justify-center  ">
      <nav className=" flex flex-col m-4 flex w-1/12    ">
        {routes.map(route => {
          return (
            !route.invisible && (
              <NavLink
                key={route.name}
                to={route.layout + route.path}
                activeClassName=" rounded-md border bg-indigo-500 text-white   shadow-blue-2xl    "
                className=" my-5  w-20 h-20   text-center  text-xl font-black flex justify-center items-center"
              >
                {route.name}
              </NavLink>
            )
          );
        })}
      </nav>

      <div className="w-11/12 ">
        <div className="hidden sm:block pt-10 py-10">
          <div className="flex flex-row justify-between">
            <h2 className="text-3xl font-black">Report</h2>
          </div>

          <div className="border-t border-gray-200"></div>
        </div>
        <Switch>
          {routes.map(route => (
            <Route
              exact={route.exact}
              key={route.name}
              path={route.layout + route.path}
              component={route.component}
            />
          ))}
          <Redirect to="report/group" />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </div>
  );
}