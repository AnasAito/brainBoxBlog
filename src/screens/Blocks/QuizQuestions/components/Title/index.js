import React, { useState, useEffect, useRef } from "react";
import Field from "./field";
export default function Question({ title, onSave }) {
  const [edit, setEdit] = useState(false);

  const [value, setValue] = useState("");
  const count = useRef(0);
  const timeout = useRef(null);

  useEffect(() => {
    setValue(title);
    if (title === "") {
      setEdit(true);
    } else {
      setEdit(false);
    }
  }, [title]);

  const handleBlur = (e) => {
    // handle saving here
    // close edit mode
    onSave({ title: value });
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
      ) : (
        <p className="font-medium text-xl" id="question" onClick={handleClick}>
          {title}
        </p>
      )}
    </div>
  );
}
