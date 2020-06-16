import React from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function Pagination({ pageCount: controlledPageCount }) {
  let history = useHistory();
  function useQueryParams() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQueryParams();
  const pageIndex = parseInt(query.get("page"));
  const pageSize = parseInt(query.get("pageSize"));
  const activityId = query.get("attach");
  const prevPage = activityId
    ? `?attach=${activityId}&page=${pageIndex - 1}&pageSize=${pageSize}`
    : `?page=${pageIndex - 1}&pageSize=${pageSize}`;
    const nextPage = activityId
    ? `?attach=${activityId}&page=${pageIndex + 1}&pageSize=${pageSize}`
    : `?page=${pageIndex + 1}&pageSize=${pageSize}`;
  return (
    <div className="bg-white px-4 py-3 mt-5 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="hidden sm:block">
        <p className="text-sm leading-5 text-gray-700">
          Showing
          <span className="font-medium"> {pageIndex * pageSize + 1} </span>
          to
          <span className="font-medium">
            {" "}
            {pageSize * pageIndex + pageSize > controlledPageCount
              ? controlledPageCount
              : pageSize * pageIndex + pageSize}{" "}
          </span>
          of
          <span className="font-medium"> {controlledPageCount} </span>
          results
        </p>
      </div>

      <div className="flex justify-between sm:justify-end">
        <button
          onClick={() =>
            history.push({
              search: prevPage,
            })
          }
          className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}
        >
          Previous
        </button>
        <button
          onClick={() =>
            history.push({
              search: nextPage,
            })
          }
          className={`ml-3 relative inline-flex disabled:cursor-not-allowed items-center px-4 py-2 disabled:cursor-pointer border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
