import React from "react";
import { Route, Switch } from "react-router";

import Login from "./Login";

function Main() {
  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-1/3">
        <div className="mx-auto w-full max-w-sm">
          <Switch>
            <Route path="/auth/login" name="Login" component={Login} />
          </Switch>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://res.cloudinary.com/geerd/image/upload/q_auto:eco/v1590024236/landing_page_resources/um6p_pergola_xrvwrr.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Main;
