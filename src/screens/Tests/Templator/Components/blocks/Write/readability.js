import React from "react";
const Card = ({ text, count, more }) => {
  return (
    <div class="flex flex-col justify-between  bg-white overflow-hidden shadow rounded-lg"></div>
  );
};
const styleParser = {
  Positive: {
    textColor: "text-green-800",
    borderColor: "border-green-400",
    bgColor: "bg-green-50",
    hover: "hover:bg-green-100",
    shadow: "shadow-green-inner",
    svgColor: "text-green-400",
    svgPath: (
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clip-rule="evenodd"
      />
    )
  },
  Information: {
    textColor: "text-blue-800",
    borderColor: "border-blue-400",
    bgColor: "bg-blue-50",
    hover: "hover:bg-blue-100",
    shadow: "shadow-blue-inner",
    svgColor: "text-blue-400",
    svgPath: (
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clip-rule="evenodd"
      />
    )
  },
  Negative: {
    textColor: "text-red-800",
    borderColor: "border-red-400",
    bgColor: "bg-red-50",
    hover: "hover:bg-red-100",
    shadow: "shadow-red-inner",
    svgColor: "text-red-400",

    svgPath: (
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clip-rule="evenodd"
      />
    )
  }
};
export default function ReadSummary({ readingSummary }) {
  let score = readingSummary[1].subItems[0].Text.split("Ease")[1];

  return (
    <div>
      <span class="inline-flex  items-center px-3 py-0.5 rounded-full  font-medium shadow-md  text-white bg-blue-400">
        <h3 class="text-lg leading-6 font-medium ">Readability </h3>
      </span>
      <div className="flex flex-col lg:flex-row mt-5">
        <div className="lg:w-5/12 flex mb-2 lg:mb-0 justify-center items-center  ">
          <div className=" w-7/12 h-auto bg-green-50 p-3 rounded-md ">
            <div className="flex flex-row justify-between">
              <p className="text-green-700 font-semibold text-sm">
                FLESCH READING EASE
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-3 cursor-pointer fill-current  text-gray-300 hover:text-gray-500"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm2-13c0 .28-.21.8-.42 1L10 9.58c-.57.58-1 1.6-1 2.42v1h2v-1c0-.29.21-.8.42-1L13 9.42c.57-.58 1-1.6 1-2.42a4 4 0 1 0-8 0h2a2 2 0 1 1 4 0zm-3 8v2h2v-2H9z" />
              </svg>
            </div>

            <p className="text-green-900 font-black  text-4xl">{score}</p>
            <p className="text-sm text-green-600"> Target > 60</p>
          </div>
        </div>
        <div class="md:w-7/12  flex flex-col">
          {readingSummary.map((summary, index) => {
            console.log(summary);
            const style = styleParser[summary.isPositive];
            return (
              <div
                class={`rounded-md  p-4 mb-2 ${style.bgColor} ${style.shadow}`}
              >
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg
                      class={`h-5 w-5 ${style.svgColor}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {style.svgPath}
                    </svg>
                  </div>
                  <div class="ml-3 flex-1 md:flex md:justify-between">
                    <p
                      class={`text-sm leading-5 text-blue-700 ${style.textColor}`}
                    >
                      {summary.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
