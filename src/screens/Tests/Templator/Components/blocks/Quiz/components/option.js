import React from "react";

export default function QuizOption({
  option,
  index,
  focus,
  cor,
  correct,
  setObj,
  questionId,
  isRight,
  obj
}) {
  const color = cor
    ? correct
      ? "bg-green-400 text-white"
      : ""
    : focus
    ? "bg-blue-600 text-white"
    : "";
  const falsec = cor
    ? focus
      ? correct
        ? ""
        : "bg-red-500 text-white"
      : ""
    : "";
  return (
    <div
      className="flex  hover:shadow-lg cursor-pointer   ml-2 mr-2 mb-3"
      onClick={() => {
        !cor
          ? setObj({ ...obj, ...{ questionId, answerId: option.id, isRight } })
          : console.log("you finshed");
      }}
    >
      <div className="flex flex-row my-3  ">
        <div
          className={` text-xs rounded-full border border-gray-300 hover:bg-blue-400 cursor-pointer h-8 w-8 flex items-center justify-center mx-2 ${color}${falsec}`}
        >
          <p className="">{index + 1}</p>
        </div>
        <p className="  font-medium text-lg capitalize ">{option.label} </p>
      </div>
    </div>
  );
}
