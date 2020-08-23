import React from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import routes from "./routes";
import SearchBar from "shared/components/SearchBox";
export default function Dashboard() {
  return (
    <div className="flex flex-row justify-center  h-screen ">
      <nav className=" flex flex-col m-4  overflow-y-auto  self-center h-1/2 w-2/12  shadow-inner items-center    ">
        {routes.map((route) => {
          return (
            !route.invisible && (
              <NavLink
                key={route.name}
                to={route.layout + route.path}
                activeClassName=" rounded-md border bg-indigo-500 text-white   shadow-blue-2xl    "
                className=" my-5   w-32 h-32   text-center   text-lg font-black flex justify-center items-center"
              >
                {route.name}
              </NavLink>
            )
          );
        })}
      </nav>

      <div className="w-10/12 ">
        <div className="hidden sm:block pt-10 py-10">
          <div className="flex flex-row justify-between">
            <h2 className="text-3xl font-black">Blocks</h2>

            <SearchBar />
          </div>

          <div className="border-t border-gray-200"></div>
        </div>
        <Switch>
          {routes.map((route) => (
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
