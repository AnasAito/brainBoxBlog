import React from "react";
import Autosuggest from "shared/components/Autosuggest";
import Select from "react-select";

export default function View({
  groups,
  tests,
  sections,
  activities,
  formik,
  handlers,
}) {
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
            Choose Activity to Grade
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
                    change("sectionContainerId")(option.sectionContainer);
                  }}
                  options={tests}
                  className="sm:text-sm sm:leading-5"
                  placeholder="Select test..."
                />
              </div>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Section
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg relative rounded-md shadow-sm sm:max-w-xs">
                <Select
                  onChange={(option) => change("sectionId")(option.value)}
                  options={sections}
                  className="sm:text-sm sm:leading-5"
                  placeholder="Select section..."
                />
              </div>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Activity
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg relative rounded-md shadow-sm sm:max-w-xs">
                <Select
                  onChange={(option) => {
                    change("activityId")(option.value);
                    change("activityType")(option.type);
                  }}
                  options={activities}
                  className="sm:text-sm sm:leading-5"
                  placeholder="Select activity..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-5">
        <div className="flex justify-end">
        <span className="text-xs text-gray-500">
            Only activities that have a quiz block can be graded automatically
          </span>
          <span className="ml-3 inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              className={`${
                isDisabled && "opacity-50 cursor-not-allowed"
              } inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out`}
            >
              Grade
            </button>
          </span>
        </div>
      </div>
    </form>
  );
}
