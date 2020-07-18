import React from "react";

export default function GraphWrapper({ children }) {
  return (
    <div className="bg-white">
      <div class="bg-white px-4  border-b  rounded-t-md border-gray-200 sm:px-6  ">
        <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap  ">
          <div class="ml-4 ">
            <h3 class="text-lg leading-6   font-medium text-gray-900">
              Number of users
            </h3>
          </div>

          <div class="">
            <nav class="-mb-px flex">
              <a
                href="#"
                class="whitespace-no-wrap py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
              >
                1M
              </a>
              <a
                href="#"
                class="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
              >
                3M
              </a>
              <a
                href="#"
                class="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700"
                aria-current="page"
              >
                1Y
              </a>
              <a
                href="#"
                class="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
              >
                ALL
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className=" h-96 ">{children}</div>
    </div>
  );
}
