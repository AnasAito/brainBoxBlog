import React from "react";
import Autosuggest from "shared/components/Autosuggest";
import { FieldArray } from "formik";

import Input from "shared/components/Input";
export default function View({ groups, formik, handlers }) {
  const {
    values: { firstName, lastName, email, group, groupIds },
    errors,
    touched,
  } = formik;
  const { change, blur } = handlers;
  console.log(errors);
  return (
    <>
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
              htmlFor="first_name"
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
              htmlFor="last_name"
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
              htmlFor="email"
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
              htmlFor="group"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Groups
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <FieldArray
                name="groupIds"
                render={(arrayHelpers) => (
                  <div>
                    <div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
                      <Autosuggest
                        data={groups}
                        onSuggestionSelected={(e, { suggestion }) => {
                          arrayHelpers.push({
                            id: suggestion.id,
                            name: suggestion.name,
                          });
                          change("group")("");
                        }}
                        {...{
                          placeholder: "Search a group...",
                          value: group,
                          onChange: (event, { newValue }) =>
                            change("group")(newValue),
                        }}
                      />
                    </div>{" "}
                    <div className="flex flex-row  mt-1">
                      {groupIds &&
                        groupIds.map((groupsId, index) => (
                          <span
                            key={groupsId.id}
                            className="inline-flex mr-1 items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800"
                          >
                            {groupsId.name}
                            <button
                              onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                              type="button"
                              className="flex-shrink-0 -mr-0.5 ml-1.5 inline-flex text-indigo-500 focus:outline-none focus:text-indigo-700"
                              aria-label="Remove large badge"
                            >
                              <svg
                                className="h-2 w-2"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 8 8"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeWidth="1.5"
                                  d="M1 1l6 6m0-6L1 7"
                                />
                              </svg>
                            </button>
                          </span>
                        ))}
                      {errors.groupIds && (
                        <span className="text-red-500">{errors.groupIds}</span>
                      )}
                    </div>
                  </div>
                )}
              />
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
    </>
  );
}
