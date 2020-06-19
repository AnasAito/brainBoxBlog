import React from "react";
import get from "lodash/get";
import NavButton from "./components/nav";
import Option from "./components/Option";
import Question from "./components/Question";
import Title from "./components/Title";
import UploadImage from "./components/UploadImage";
import Publish from "./components/ToggleAddImage";
// import Image from "blocks/Image";
import "katex/dist/katex.min.css";

export default function View(props) {
  const [showImageControl, setShowImageControl] = React.useState(false);
  const [showImageUpload, setShowImageUpload] = React.useState(false);

  const { data, handler, mutations } = props;

  const { question, title, options, length, index, loading } = data;
  const {
    handleUpdateQuestion,
    handleUpdateQuestionOption,
    handleCreateQuestion,
    handleCreateQuestionOption,
    handleDeleteQuestionOption,
    handleAddImage,
    handleUpdateQuiz,
    handleDeleteQuestion
  } = mutations;
  const questionImage = get(question, "image.cloudinaryId");
  return (
    <div className="m-auto  p-3  bg-gray-50 rounded-lg overflow-hidden  shadow-lg">
      <div className=" flex flex-row justify-between m-4 items-center ">
        <Title title={title} onSave={handleUpdateQuiz} />

        <div className="flex items-center">
          <button
            type="button"
            onClick={handleCreateQuestion}
            className="inline-flex mr-1 items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-indigo active:bg-blue-700 transition ease-in-out duration-150"
          >
            Create Question
          </button>
          <button
            type="button"
            onClick={handleCreateQuestionOption}
            className="inline-flex mr-1 items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-indigo active:bg-blue-700 transition ease-in-out duration-150"
          >
            Add Choice
          </button>
          <Publish
            active={showImageUpload}
            handleClick={() => setShowImageUpload(!showImageUpload)}
          />
        </div>
      </div>
      <div className="bg-white m-auto rounded overflow-hidden">
        <div className="flex flex-col my-6 mx-3 max-w-full">
          <div className="flex justify-end items-center">
            <div className="flex items-center justify-center">
              <NavButton
                first={index + 1 === 1}
                last={index + 1 === length}
                //  length={length}
                setIndex={handler}
              />
            </div>
          </div>

          <div className="overflow-auto">
            <Question
              question={question}
              index={index}
              onSave={handleUpdateQuestion}
              onDelete={handleDeleteQuestion}
            />
          </div>
          <div className="self-center">
            {questionImage ? (
              <div
                key={questionImage}
                className="mt-5 mx-10 relative"
                onMouseEnter={() => setShowImageControl(true)}
                onMouseLeave={() => setShowImageControl(false)}
              >
                <img
                  className="border border-gray-200 shadow-inner"
                  src={`https://res.cloudinary.com/geerd/image/upload/q_auto:eco/${questionImage}.jpg`}
                  alt="quiz"
                />
                {showImageControl && (
                  <div className="absolute transform-50 top-1/2 left-1/2 flex">
                    <button
                      onClick={() =>
                        handleUpdateQuestion(question.id, {
                          image: { id: null },
                        })
                      }
                      className="inline-flex mr-1 items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-red-700 transition ease-in-out duration-150"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ) : (
              showImageUpload && (
                <div className="mt-2">
                  <UploadImage handleSave={handleAddImage} loading={loading} />
                </div>
              )
            )}
          </div>
        </div>
        <hr />
        <div className="mt-6">
          {options.map((option, index) => {
            return (
              <Option
                key={option.id}
                option={option}
                onDelete={handleDeleteQuestionOption}
                onSave={handleUpdateQuestionOption}
              />
            );
          })}
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
