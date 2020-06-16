import React from "react";

export default function Item({ name }) {
  return (
    <dd class="mt-1 text-sm leading-5 text-gray-900">
      <div class="border border-gray-200 rounded-md pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
        <div class="w-0 flex-1 flex items-center">
          <svg
            class="flex-shrink-0 h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="ml-2 truncate">{name}</span>
        </div>
        {/* <div class="ml-4 flex-shrink-0">
          <button
            href="#"
            class="font-medium text-red-600 hover:text-red-500 transition duration-150 ease-in-out"
          >
            Remove
          </button>
        </div> */}
      </div>
    </dd>
  );
}
