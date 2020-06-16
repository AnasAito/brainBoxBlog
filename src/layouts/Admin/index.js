import React from "react";
import Nav from "./Nav";
import { Switch, Route } from "react-router-dom";
import useLayoutReducer from "./useLayoutReducer";
import routes from "routes";

export default function Layout({ header }) {
  const { state, dispatch } = useLayoutReducer(routes);
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200">
        <Nav data={state} handler={dispatch} />
      </nav>

      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              {header}
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            <Switch>
              {routes.map((route) => (
                <Route
                  key={route.name}
                  path={route.layout + route.path}
                  component={route.component}
                />
              ))}
            </Switch>
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </div>
    </div>
  );
}
