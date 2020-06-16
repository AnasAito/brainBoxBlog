import React from "react";
import Input from "shared/components/Input";
export default function View({ formik, handlers, onCancel }) {
  const {
    values: { title, order, timeout },
    errors,
    touched,
  } = formik;
  const { submit, change, blur } = handlers;
  return (
    <form autoComplete="off" onSubmit={submit}>
      <div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Section Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
            You can edit the section title and timeout.
          </p>
        </div>
        <div className="mt-6 sm:mt-5">
          <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Title
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg relative rounded-md shadow-sm sm:max-w-xs">
                <Input
                  id="title"
                  type="text"
                  name="title"
                  handleChange={change}
                  onBlur={blur}
                  inputValue={title}
                  inputState={
                    touched.title
                      ? errors.title
                        ? errors.title
                        : "success"
                      : null
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-5">
          <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="order"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Order
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg relative rounded-md shadow-sm sm:max-w-xs">
                <Input
                  id="order"
                  type="number"
                  name="order"
                  handleChange={change}
                  onBlur={blur}
                  inputValue={order}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-5">
          <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="timeout"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Timeout
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg relative rounded-md shadow-sm sm:max-w-xs">
                <Input
                  id="timeout"
                  type="number"
                  name="timeout"
                  handleChange={change}
                  onBlur={blur}
                  inputValue={timeout}
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
              onClick={onCancel}
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Cancel
            </button>
          </span>
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
