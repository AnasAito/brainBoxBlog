import React from "react";

import Input from "shared/components/Input";
export default function View({ groups, formik, handlers }) {
  const {
    values: { name, },
    errors,
    touched,
  } = formik;
  const { change, blur } = handlers;
  return (
    <>
      <div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Create a group
          </h3>
        </div>
        <div className="mt-6 sm:mt-5">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg relative rounded-md shadow-sm sm:max-w-xs">
                <Input
                  id="name"
                  type="text"
                  name="name"
                  handleChange={change}
                  onBlur={blur}
                  inputValue={name}
                  inputState={
                    touched.name
                      ? errors.name
                        ? errors.name
                        : "success"
                      : null
                  }
                />
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
    </>
  );
}
