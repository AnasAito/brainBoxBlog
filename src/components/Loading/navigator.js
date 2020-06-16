import React from "react";
import Skeleton from "react-loading-skeleton";

export default function Naviator() {
  return (
    <div className="flex flex-row justify-between md:w-9/12 pr-1 w-full  ">
      <div className="">
        <span className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex mr-1 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-500  focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="-ml-0.5 mr-2 h-4 w-4 fill-current  "
            >
              <path d="M3.828 9l6.071-6.071-1.414-1.414L0 10l.707.707 7.778 7.778 1.414-1.414L3.828 11H20V9H3.828z" />
            </svg>
            Back
          </button>
        </span>
      </div>
      
      <div className=" flex  flex-row justify-evenly ">
        <div className="transition duration-500 transform hover:scale-110  rounded-full bg-white py-1 px-10 cursor-pointer">
          <div className="text-lg antialiased font-bold text-gray-600 text-center capitalize">
          <Skeleton width={300} />
          </div>
        </div>
      </div>

      <div className="">
        <span className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex mr-1 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-500  focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className=" ml-2 h-4 w-4 fill-current  "
            >
              <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z" />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
}
