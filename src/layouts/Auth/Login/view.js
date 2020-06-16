import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
export default function View({ formik, handlers }) {
  const {
    values: { email, password },
    errors,
    touched,
  } = formik;
  const { submit, change, blur } = handlers;

  return (
    <>
      <div>
        <img
          className="h-20 w-auto m-auto"
          src="https://res.cloudinary.com/geerd/image/upload/v1590067038/UM6P__LANGUAGE_LAB_xpphdt"
          alt="Workflow"
        />
        <h2 className="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
          Sign in
        </h2>
      </div>

      <div className="mt-8">
        <div className="mt-6">
          <form onSubmit={submit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Input
                  id="email"
                  type="email"
                  name="email"
                  handleChange={change}
                  onBlur={blur}
                  inputValue={email}
                  inputState={
                    touched.email
                      ? errors.email
                        ? errors.email
                        : "success"
                      : null
                  }
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Input
                  id="password"
                  type="password"
                  name="password"
                  handleChange={change}
                  onBlur={blur}
                  inputValue={password}
                  inputState={
                    touched.password
                      ? errors.password
                        ? errors.password
                        : "success"
                      : null
                  }
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm leading-5">
                <Link
                  to="/auth/reset"
                  className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
                >
                  Sign in
                </button>
              </span>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs mt-2">
            &copy;2020 GEERD. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
