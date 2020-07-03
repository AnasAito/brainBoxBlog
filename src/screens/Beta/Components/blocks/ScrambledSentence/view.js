import React from "react";
export default function SentenceBloc({
  sentence,
  scrSentence,
  Sindex,
  chipClick,
  redoClick,
  correctSentence,
  cor,
}) {
  return (
    <div className="rounded-sm shadow-lg m-1  bg-gray-100 ">
      <div className="flex flex-row flex-wrap  ">
        {scrSentence
          .filter((value) => !sentence.includes(value))
          .map((word, index) => (
            <span
              key={index}
              className=" cursor-pointer m-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-blue-100 text-blue-800 hover:bg-blue-200"
              onClick={() => {
                chipClick(word, Sindex);
              }}
            >
              {word}
            </span>
          ))}
        <span className=" m-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-gray-100 text-gray-100  ">
          empty
        </span>
      </div>
      <div className="p-2  bg-white flex flex-row flex-wrap items-center">
        <div className="w-11/12">
          {sentence.map((word, index) => (
            <span
              key={index}
              className="  inline-flex items-center px-3 py-0.5  text-sm font-medium leading-5 bg-blue-100 text-blue-800 "
            >
              {word}
            </span>
          ))}
        </div>
        <div
          className="lg:ml-6 cursor-pointer rounded-full "
          onClick={() => {
            redoClick(Sindex);
          }}
        >
          <svg
            className="ml-2 -mr-0.5 h-4 w-4 hover:bg-gray-100"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {cor ? (
        <div className="flex flex-row flex-wrap  p-2 ">
          {correctSentence.map((word, index) => {
            const color =
              word === sentence[index] ? "bg-green-100" : "bg-red-100";
            return (
              <span
                key={index}
                className={`${color} inline-flex items-center px-3 py-0.5  text-sm font-medium leading-5`}
              >
                {word}
              </span>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
