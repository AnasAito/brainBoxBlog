import React from "react";
export const carouselTemplates = [
  {
    title: "block31",
    content: option => (
      <div
        className={` w-36  rounded-lg border flex flex-col shadow-xl ${
          option === "block31" ? "bg-indigo-100" : ""
        }  `}
      >
        <div className="flex flex-row rounded-lg ">
          <div class=" px-1 py-2 rounded-lg w-1/2">
            <div class="border-2 border-dashed border-gray-200 rounded-lg  h-16"></div>
          </div>
          <div class=" px-1 py-2 rounded-lg w-1/2 ">
            <div class="border-2 border-dashed border-gray-200 rounded-lg  h-16"></div>
          </div>
        </div>
        <div className="flex flex-row rounded-lg ">
          <div class=" px-1 py-2 rounded-lg w-1/2">
            <div class="border-2 border-dashed border-gray-200 rounded-lg  h-16"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "block32",
    content: option => (
      <div
        className={` w-36  rounded-lg border flex flex-col shadow-xl ${
          option === "block32" ? "bg-indigo-100" : ""
        }  `}
      >
        <div class=" px-1 py-2 rounded-lg ">
          <div class="border-2 border-dashed border-gray-200 rounded-lg  h-16"></div>
        </div>
        <div className="flex flex-row rounded-lg ">
          <div class=" px-1 py-2 rounded-lg w-1/2">
            <div class="border-2 border-dashed border-gray-200 rounded-lg  h-16"></div>
          </div>
          <div class=" px-1 py-2 rounded-lg w-1/2 ">
            <div class="border-2 border-dashed border-gray-200 rounded-lg  h-16"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "block33",
    content: option => (
      <div
        className={` w-36  rounded-lg border flex flex-col shadow-xl ${
          option === "block33" ? "bg-indigo-100" : ""
        }  `}
      >
        <div className="flex flex-row rounded-lg ">
          <div class=" px-1 py-2 rounded-lg w-1/2">
            <div class="border-2 border-dashed border-gray-200 rounded-lg  h-16"></div>
          </div>
          <div class=" px-1 py-2 rounded-lg w-1/2 ">
            <div class="border-2 border-dashed border-gray-200 rounded-lg  h-16"></div>
          </div>
        </div>
        <div class=" px-1 py-2 rounded-lg ">
          <div class="border-2 border-dashed border-gray-200 rounded-lg  h-16"></div>
        </div>
      </div>
    )
  }
];
