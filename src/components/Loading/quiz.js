import React from "react";
import Skeleton from "react-loading-skeleton";

export default function Quiz() {
  return (
    <div className="m-auto  p-3  bg-gray-50 rounded-lg overflow-hidden  shadow-lg">
      <div className=" flex flex-row justify-between m-4 items-center ">
        <p className="font-black">Quiz</p>
        <div className="flex flex-row items-center">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="inline-flex mr-1 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-500  focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
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
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white  bg-gray-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
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
      <div className=" bg-white    m-auto  rounded    overflow-hidden   ">
        <div className="  flex-row  justify-between my-6 mx-3">
          <div className="w-1/3 mb-5">
            <Skeleton height={10} />
          </div>

          <Skeleton height={20} />
        </div>
        <hr />
        <div className="m-6  ">
          {[1, 2, 3, 4].map((option, i) => (
            <div className=" flex flex-row mt-5 " key={i}>
              <Skeleton circle={true} height={20} width={20} />
              <div className="w-10/12 ml-5">
                <Skeleton height={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className=" flex justify-center mt-4  ">
        <button
          type="button"
          className=" uppercase mb-4 items-center px-4 py-2 border border-black hover:border-blue-500 text-sm leading-5 font-medium  rounded-lg  text-black hover:text-white  bg-transparent hover:bg-blue-500  transition ease-in-out duration-150"
          onClick={onfinish}
        >
          Check answers
        </button>
      </div> */}
    </div>
  );
}
