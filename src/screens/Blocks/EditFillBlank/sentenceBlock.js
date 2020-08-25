import React, { useState, useEffect } from "react";

function SentenceBlock({
  id,
  setAnswersDict,
  answersDict,
  sentence,
  answerIndex,
  handleClick,
  sentences,
  setSentences,
}) {
  const [value, setValue] = useState(sentence);
  const [words, setWords] = useState([]);
  useEffect(() => {
    let b = [...sentences];
    b[id] = value;
    setSentences(b);
    setWords(value.split(" ").filter((word) => !(word === "")));
  }, [value]);

  return (
    <div className="  shadow-md rounded  p-3 my-2 ">
      <input
        id={id.toString()}
        autoComplete="off"
        className=" my-1 form-input block w-full   transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
      <div className=" flex flex-wrap">
        {words.map((word, index) => {
          const colorbool = answerIndex.includes(index);
          return (
            <div key={index} className="m-5">
              <span
                onClick={() => handleClick(id, index, colorbool)}
                class={`  cursor-pointer inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium leading-5  ${
                  !colorbool
                    ? "bg-indigo-100 text-indigo-800"
                    : "bg-indigo-500 text-white"
                } `}
              >
                {word}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SentenceBlock;
