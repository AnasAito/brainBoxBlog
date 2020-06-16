import React, { useState, useEffect } from "react";
import Field from "./field";
import Publish from "../ButtonIO";

import TeX from "@matejmazur/react-katex";

export default function Option({ option, onSave, onDelete }) {
  const [showControls, setShowControls] = useState(false);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");

  const handleBlur = (e) => {
    // handle saving here
    // close edit mode
    onSave(option.id, { label: value });
    setEdit(false);
  };

  useEffect(() => {
    setValue(option.label);
  }, [option]);

  return (
    <div
      className="flex items-center hover:shadow-lg ml-2 mr-2 mb-3 px-2"
      key={option.id}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      // onClick={() => setObj({ questionId, answerId: option.id })}
    >
      <div className="flex items-center my-3">
        <div
          className={`text-xs flex-shrink-0 rounded-full ${
            option.rightAnswer ? "bg-green-500" : "bg-red-500"
          }  text-white cursor-pointer h-8 w-8 flex items-center justify-center mx-2`}
          onClick={() =>
            onSave(option.id, { rightAnswer: !option.rightAnswer })
          }
        >
          {option.order}
        </div>
        <div>
          {edit ? (
            <Field
              autoFocus
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={handleBlur}
            />
          ) : option.hasMath ? (
            <TeX >{`${option.label}`}</TeX>
          ) : (
            <p className="font-medium text-md">{option.label} </p>
          )}
        </div>
      </div>
      {showControls && (
        <div className="flex items-end">
          <div
            className="inline-block h-8 w-8 rounded-full ml-2  flex justify-center items-center"
            alt=""
            onClick={() => setEdit(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="h-6 w-6 cursor-pointer text-indigo-600 hover:text-indigo-500"
              fill="currentColor"
            >
              <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
            </svg>
          </div>
          <div
            className="inline-block h-8 w-8 rounded-full ml-2  flex justify-center items-center"
            alt=""
            onClick={() => onDelete(option.id)}
          >
            <svg
              id="Capa_1"
              className="h-6 w-6 cursor-pointer text-red-600 hover:text-red-500"
              viewBox="0 0 515.556 515.556"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z" />
              <path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z" />
            </svg>
          </div>
          <div className="ml-2">
            <Publish
              active={option.hasMath}
              handleClick={() =>
                onSave(option.id, { hasMath: !option.hasMath })
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}
