import React, { useState, useEffect, useRef } from "react";
import TeX from "@matejmazur/react-katex";
import Publish from "../ButtonIO";
import Field from "./field";
export default function Question({ question, onSave, onDelete, index }) {
  const [edit, setEdit] = useState(false);

  const [value, setValue] = useState("");
  const count = useRef(0);
  const timeout = useRef(null);

  useEffect(() => {
    setValue(question.label);
    if (question.label === "") {
      setEdit(true);
    } else {
      setEdit(false);
    }
  }, [question]);

  const handleBlur = (e) => {
    // handle saving here
    // close edit mode
    onSave(question.id, { label: value });
    setEdit(false);
  };
  const handleClick = (e) => {
    // cancel previous callback
    if (timeout.current) clearTimeout(timeout.current);

    // increment count
    count.current++;

    // schedule new callback  [timeBetweenClicks] ms after last click
    timeout.current = setTimeout(() => {
      // listen for double clicks
      if (count.current === 2) {
        // turn on edit mode
        setEdit(true);
      }

      // reset count
      count.current = 0;
    }, 300); // 250 ms
  };

  return (
    <div className="flex justify-between items-center pt-4">
      {edit ? (
        <Field
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
        />
      ) : question.hasMath ? (
        <div onClick={handleClick}>
          <TeX>{`${index + 1} - ${question.label}`}</TeX>
        </div>
      ) : (
        <p className="font-medium text-xl" id="question" onClick={handleClick}>
          {index + 1} - {question.label}
        </p>
      )}
      <div className="flex items-center">
        <Publish
          active={question.hasMath}
          handleClick={() =>
            onSave(question.id, { hasMath: !question.hasMath })
          }
        />
        <div
            className="inline-block h-8 w-8 rounded-full ml-2  flex justify-center items-center"
            alt=""
            onClick={() => onDelete(question.id)}
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
      </div>
    </div>
  );
}
