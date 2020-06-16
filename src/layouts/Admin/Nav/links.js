import React from "react";
import { NavLink } from "react-router-dom";

export default function Links({ routes }) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 flex items-center">
        <img
          className="block lg:hidden h-8 w-auto"
          src="https://res.cloudinary.com/geerd/image/upload/v1590067038/UM6P__LANGUAGE_LAB_xpphdt"
          alt="Workflow logo"
        />
        <img
          className="hidden lg:block h-12 w-auto"
          src="https://res.cloudinary.com/geerd/image/upload/v1590067038/UM6P__LANGUAGE_LAB_xpphdt"
          alt="Workflow logo"
        />
      </div>
      <div className="hidden sm:-my-px sm:ml-6 sm:flex">
        {routes.map((route) => (
          <NavLink
            key={route.name}
            to={route.layout + route.path}
            activeClassName="border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:border-indigo-700 hover:border-indigo-300 transition duration-150 ease-in-out"
            className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
          >
            {route.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
