import React from "react";
import Autosuggest from "shared/components/Autosuggest";
import Input from "shared/components/Input";
export default function View({ groups, formik, handlers }) {
  const {
    values: { firstName, lastName, email },
    errors,
    touched,
  } = formik;
  const { submit, change, blur } = handlers;
  return (
    <form autoComplete="off" onSubmit={submit}>
      <div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Personal Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
            Use a permanent address where you can receive mail.
          </p>
        </div>
        <div className="mt-6 sm:mt-5">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              for="first_name"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              First name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg relative rounded-md shadow-sm sm:max-w-xs">
                <Input
                  id="firstName"
                  type="text"
                  name="firstName"
                  handleChange={change}
                  onBlur={blur}
                  inputValue={firstName}
                  inputState={
                    touched.firstName
                      ? errors.firstName
                        ? errors.firstName
                        : "success"
                      : null
                  }
                />
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              for="last_name"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Last name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg relative rounded-md shadow-sm sm:max-w-xs">
                <Input
                  id="lastName"
                  type="text"
                  name="lastName"
                  handleChange={change}
                  onBlur={blur}
                  inputValue={lastName}
                  inputState={
                    touched.lastName
                      ? errors.lastName
                        ? errors.lastName
                        : "success"
                      : null
                  }
                />
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              for="email"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Email address
            </label>
            <div className="max-w-lg relative rounded-md shadow-sm sm:max-w-xs">
              <Input
                id="email"
                type="text"
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

          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              for="country"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Groups
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                <Autosuggest placeholder="Search a group..." data={groups} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-5">
        <div className="flex justify-end">
          <span className="ml-3 inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Save
            </button>
          </span>
        </div>
      </div>
    </form>
  );
}
