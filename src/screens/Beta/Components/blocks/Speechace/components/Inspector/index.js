import React from "react";
export default function Inspector({ words }) {
  return (
    <div className="flex flex-row flex-wrap ">
      {words.map((word, i) => (
        <div key={i} className={`${word.color}  text-lg mx-1`}>
          {word.word}
        </div>
      ))}
    </div>
  );
}
