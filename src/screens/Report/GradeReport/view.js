import React from "react";
import Autosuggest from "shared/components/Autosuggest";
import Select from "react-select";
import Button from "components/ButtonWithLoader";

export default function View({ groups, tests, loading, formik, handlers }) {
  const {
    values: { groupName },
    isDisabled,
  } = formik;
  const { change, submit } = handlers;

  return (
    <form autoComplete="off" onSubmit={submit}>
      <div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Choose Group And Test
          </h3>
        </div>
        <div className="mt-6 sm:mt-5">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Group
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg relative rounded-md shadow-sm sm:max-w-xs">
                <Autosuggest
                  data={groups}
                  getOptionLabel={(option) => option.name}
                  onSuggestionSelected={(e, { suggestion }) => {
                    change("groupId")(suggestion.id);
                  }}
                  {...{
                    placeholder: "Search a group...",
                    value: groupName,
                    onChange: (event, { newValue }) =>
                      change("groupName")(newValue),
                  }}
                />
              </div>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Test
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg relative rounded-md shadow-sm sm:max-w-xs">
                <Select
                  onChange={(option) => {
                    change("testId")(option.value);
                  }}
                  options={tests}
                  className="sm:text-sm sm:leading-5"
                  placeholder="Select test..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-5">
        <div className="flex justify-end">
          <span className="ml-3 inline-flex rounded-md shadow-sm">
            <Button
              type="submit"
              loading={loading}
              size={20}
              className={`${
                isDisabled && "opacity-50 cursor-not-allowed"
              } inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out`}
            >
              Save Report
            </Button>
          </span>
        </div>
      </div>
    </form>
  );
}
