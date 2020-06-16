import React from "react";
import Skeleton from "react-loading-skeleton";
export default function FillBlank() {
  return (
    <div className="  rounded-lg shadow-xl p-3  bg-gray-50 ">
      <div className="flex flex-row-reverse items-center mb-3">
        <span className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            //  onClick={() => setcorr(true)}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-500  focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
          >
            Check Answers
            <svg
              className="ml-2 -mr-0.5 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M0 11l2-2 5 5L18 3l2 2L7 18z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
        <span className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex mr-1 items-center px-3 py-2 border border-transparent text-sm leading-4 ml-3 font-medium rounded-md text-white bg-gray-500  focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
          >
            Reset
            <svg
              className="ml-2 -mr-0.5 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
      <div className="text-lg antialiased font-bold mb-3 mt-8 w-2/3">
        <Skeleton />
      </div>

      <div className="flex flex-row justify-between  ">
        <Skeleton height={20} width={80} />
        <Skeleton height={20} width={80} />
        <Skeleton height={20} width={80} />
        <Skeleton height={20} width={80} />
      </div>
      <div className="border-t-2 mt-3 w-1/2 ml-1/4  mr-1/4  " />
      <div className=" p-3 ">
        {[1, 2, 3, 4, 5].map((sent, i) => (
          <div className="mt-5" key={i}>
            <Skeleton />
          </div>
        ))}
      </div>
    </div>
  );
}
