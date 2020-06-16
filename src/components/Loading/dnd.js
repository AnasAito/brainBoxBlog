import React from "react";
import Skeleton from "react-loading-skeleton";
export default function Dnd() {
  return (
    <div>
      <div className="flex flex-row  justify-between ">
        <div className="m-5">
          {" "}
          <p className="text-lg mb-3 ">
            <Skeleton />
          </p>
        </div>
        <div>
          <div className="flex flex-row items-center">
            <span className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex mr-1 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-400 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
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
            <span className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-400  focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
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
          </div>
        </div>
      </div>
      <div className="flex flex-row ">
        {[1, 2, 3, 4].map(i => (
          <div className="w-1/4 m-3  " key={i}>
            <Skeleton width={100} />
            <div
              style={{ height: 150 }}
              className=" rounded-lg border-dashed border-4  "
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row mt-28 ">
        {[1, 2, 3, 4].map(i => (
          <div className="w-1/4 m-3  " key={i + 10}>
            <Skeleton height={150} />
          </div>
        ))}
      </div>
    </div>
  );
}
