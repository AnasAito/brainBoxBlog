import React from "react";
import Option from "./components/option";
import NavButton from "./components/nav";
//import BlockWrapper from "components/blockWrapper";

const BlockWrapper = ({ children, blockName }) => {
  return (
    <div className="m-auto  p-3 h-full w-full  bg-gray-50 rounded-lg overflow-hidden shadow-lg shadow-cool-gray-lg ">
      <div className=" flex flex-row justify-between m-4 items-center ">
        <p className="font-black">{blockName}</p>
        <div className="flex flex-row items-center">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="inline-flex mr-1 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
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
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
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
      {children}
    </div>
  );
};

export default function View(props) {
  const {
    // title,
    question,
    index,
    setIndex,
    length,
    setObj,
    obj,
    cor,
    reset,
    onfinish,
  } = props;
  return (
    <BlockWrapper reset={reset} onfinish={onfinish} blockName="Quiz">
      <div className=" bg-white    m-auto  rounded    overflow-hidden   ">
        <div className=" flex flex-row  justify-between my-6 mx-3">
          <div>
            <p className="font-medium mb-1 text-gray-600 ">
              Question {index + 1} of {length}
            </p>
            <p className="font-medium text-xl capitalize">{question.label}</p>
          </div>
          <div className="justify-center">
            <NavButton
              first={index + 1 === 1}
              last={index + 1 === length}
              //  length={length}
              setIndex={setIndex}
            />
          </div>
        </div>
        <hr />
        <div className="mt-6">
          {question.questionOptions.map((option, index) => {
            return (
              <Option
                option={option}
                questionId={question.id}
                key={option.id}
                isRight={option.rightAnswer}
                index={index}
                focus={option.id === obj[question.id]}
                correct={option.rightAnswer}
                cor={cor}
                setObj={setObj}
                obj={obj}
              />
            );
          })}
        </div>
      </div>
    </BlockWrapper>
  );
}
