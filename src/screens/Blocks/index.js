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

      <div className="w-11/12">
        <Switch>
          {routes.map(route => (
            <Route
              exact={route.exact}
              key={route.name}
              path={route.layout + route.path}
              component={route.component}
            />
          ))}
          <Redirect to="blocks/quiz?page=0&pageSize=7" />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </div>
  );
}
