import React from "react";
import Inspector from "./components/Inspector";
import NavButton from "./components/Navigator";

import ClipLoader from "react-spinners/ClipLoader";
export default function View({
  recordingData,
  words,
  sentence,
  index,
  setIndex,
  len,
  startRecord,
  stopRecord,
  loading,
  bar
}) {
  // console.log(bar);
  const { record: isRecord, recordedBlob } = recordingData;
  const stopIconPath =
    "M16,4.995v9.808C16,15.464,15.464,16,14.804,16H4.997C4.446,16,4,15.554,4,15.003V5.196C4,4.536,4.536,4,5.196,4h9.808C15.554,4,16,4.446,16,4.995z";
  const startIconPath =
    "M9 18v-1.06A8 8 0 0 1 2 9h2a6 6 0 1 0 12 0h2a8 8 0 0 1-7 7.94V18h3v2H6v-2h3zM6 4a4 4 0 1 1 8 0v5a4 4 0 1 1-8 0V4z";

  return (
    <div className="rounded-md shadow-lg bg-gray-50  pb-5">
      <div className="bg-gray-50 px-4 py-5 border-b border-gray-100 sm:px-6">
        <div className="-ml-4 -mt-4 flex justify-between items-center bg-gray-50  sm:flex-no-wrap">
          <div className="ml-4 mt-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Speaking
            </h3>
            <p className="mt-1 text-sm leading-5 text-gray-500">
              Press the microphone and read the sentences
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className=" flex flex-row  justify-between my-6 mx-3 mr-6">
        <div>
          <p className="font-medium mb-1 text-gray-600 ml-4 ">
            Sentence {index + 1} of {len}
          </p>
        </div>
        <div className="justify-center">
          <NavButton
            first={index === 0}
            last={index === len - 1}
            setIndex={setIndex}
          />
        </div>
      </div>
      <div className=" flex justify-center pb-5 flex-col items-center ">
        {!words.length > 0 ? (
          <div className=" text-black font-sans text-lg ">{sentence}</div>
        ) : (
          <Inspector words={words} />
        )}
        <div className="pt-5 flex flex-row">
          {recordedBlob && (
            <div
              className="rounded-full bg-white h-10 w-10 flex self-center items-center justify-center hover:bg-blue-100 cursor-pointer mr-5 border border-blue-500"
              onClick={() => {
                console.log("upload sound");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 4l12 6-12 6z" />
              </svg>
              <audio src={recordedBlob}></audio>
            </div>
          )}

          {!loading ? (
            <div
              className={`rounded-full bg-white h-16 w-16 flex items-center justify-center hover:bg-blue-100 cursor-pointer border border-blue-500 `}
              onClick={isRecord ? stopRecord : startRecord}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d={isRecord ? stopIconPath : startIconPath} />
              </svg>
            </div>
          ) : (
            <div className="relative">
              <div className="absolute top-1 left-1 justify-center ">
                <ClipLoader size={60} color={"#4299e1"} />
              </div>

              <div className="z-0 rounded-full mt-1   h-16 w-16 flex items-center justify-center  cursor-pointer ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-blue-600 ml-1 mb-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16,4.995v9.808C16,15.464,15.464,16,14.804,16H4.997C4.446,16,4,15.554,4,15.003V5.196C4,4.536,4.536,4,5.196,4h9.808C15.554,4,16,4.446,16,4.995z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" m-5">
        {bar.map((score, index) => {
          const width = `w-${parseInt(score / 10) + 1}/12`;
          return (
            <div className="flex flex-row   mb-1 ">
              <div className="font-medium text-gray-600 w-2/5 md:w-1/5  ">
                {index + 1}{" "}
                <sup>{index === 0 ? "st" : index === 1 ? "nd" : "rd"}</sup>
                {score === "error" ? "" : `    : ${score} %`}
              </div>
              <div className="w-3/5 md:w-4/5">
                {score === "error" ? (
                  <div className={`h-6   bg-red-400 rounded-r-md w-11/12`} />
                ) : (
                  <div className={`h-6   bg-blue-400 rounded-r-md ${width}`} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
