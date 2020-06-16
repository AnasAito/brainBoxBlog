import React, { useState, useEffect, useRef } from "react";
import TeX from "@matejmazur/react-katex";
import Publish from "../ButtonIO";
import Field from "./field";
export default function Question({ question, onSave, index }) {
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
      </div>
    </div>
  );
}
