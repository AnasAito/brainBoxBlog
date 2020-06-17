import React from "react";
import Autosuggest from "shared/components/Autosuggest";
import { FieldArray } from "formik";
import Table from "./table";
import Upload from "shared/components/Upload";
export default function View({ formik, groups, handlers, onCancel }) {
  const {
    values: { file, group, groupIds, users },
    errors,
  } = formik;
  const { change, blur, onUpload } = handlers;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="max-w-lg flex flex-col justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <Upload
          handleFile={(value) => change("file", value)}
          file={file}
          description="XLSX, XLS up to 5MB"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />
        {errors.users && (
          <span className="text-red-500">{errors.users}</span>
        )}
        <FieldArray
          name="groupIds"
          render={(arrayHelpers) => (
            <div>
              <div className="mt-2">
                <Autosuggest
                  data={groups}
                  onSuggestionSelected={(e, { suggestion }) => {
                    arrayHelpers.push({
                      id: suggestion.id,
                      name: suggestion.name,
                    });
                    change("group", "");
                  }}
                  {...{
                    placeholder: "Search a group...",
                    value: group,
                    onBlur: blur,
                    onChange: (event, { newValue }) =>
                      change("group", newValue),
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
        <div className="flex justify-end mt-5">
          <span className="ml-3 inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Save
            </button>
          </span>
          <span className="ml-3 inline-flex rounded-md shadow-sm">
            <button
              type="button"
              onClick={() => onUpload(file, change)}
              className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Preview
            </button>
          </span>
        </div>
      </div>
      <div className="grid col-span-2">
        <Table data={users} pageCount={users.length} />
      </div>
    </div>
  );
}
