import React from "react";
import Autosuggest from "shared/components/Autosuggest";
import { FieldArray } from "formik";
import DatePicker from "react-datepicker";

import Input from "shared/components/Input";
export default function View({
  dates,
  handleDate,
  groups,
  formik,
  handlers,
}) {
  const {
    values: { name, group, testIds, updateIds },
    errors,
    touched,
  } = formik;
  const { change, blur } = handlers;
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

          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="group"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Attach Test
            </label>
            <div>
              <DatePicker
                className="border-2 border-gray-100 rounded-lg p-2 mr-1"
                selected={dates.startDate}
                onChange={(date) => handleDate(date, "startDate")}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
              <DatePicker
                className="border-2 border-gray-100 rounded-lg p-2"
                selected={dates.endDate}
                onChange={(date) => handleDate(date, "endDate")}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </div>
            <div className="mt-1 sm:mt-0 sm:col-span-1">
              <FieldArray
                name="testIds"
                render={(arrayHelpers) => (
                  <div>
                    <div className="max-w-lg rounded-md sm:max-w-xs ">
                      <Autosuggest
                        data={groups}
                        getOptionLabel={(option) => option.title}
                        onSuggestionSelected={(e, { suggestion }) => {
                          arrayHelpers.push({
                            id: suggestion.id,
                            title: suggestion.title,
                            startDate: dates.startDate,
                            endDate: dates.endDate,
                          });
                          change("group")("");
                        }}
                        {...{
                          placeholder: "Search a test...",
                          value: group,
                          onChange: (event, { newValue }) =>
                            change("group")(newValue),
                        }}
                      />
                    </div>{" "}
                    <div className="flex flex-wrap">
                      {testIds &&
                        testIds.map((groupsId, index) => (
                          <span
                            key={groupsId.id}
                            className="inline-flex mr-1 mt-1 items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800"
                          >
                            {groupsId.title}
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
                    </div>
                  </div>
                )}
              />
              <FieldArray
                name="updateIds"
                render={(arrayHelpers) =>
                  updateIds.map((groupPt, i) => (
                    <span
                      key={groupPt.id}
                      onClick={() => {
                        const { enabled, ...rest } = groupPt;
                        return arrayHelpers.replace(i, {
                          enabled: !groupPt.enabled,
                          ...rest,
                        });
                      }}
                      className={`cursor-pointer inline-flex mr-1 mt-1 items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 ${
                        groupPt.enabled
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {groupPt.placementTest.title}
                    </span>
                  ))
                }
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
