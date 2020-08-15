import React from "react";
//import Highlighter from "react-highlight-words";
import Highlighter from "./Highlighter";
import GrammaSummary from "./gramma";
import ReadSummary from "./readability";

export default function AllCorrection({
  cardData,
  readingSummary,

  chunks
}) {
  {
    /* const Highlight = ({ children, highlightIndex }) => {
    console.log(highlightIndex);
    return (
      <div className="inline-block">
        <Popover
          key={highlightIndex}
          text={children}
          tagData={grammaTag[highlightIndex]}
        />
      </div>
    );
  };*/
  }
  return (
    <>
      <div class="rounded-md  p-2 shadow-md">
        <Highlighter chunks={chunks} />
      </div>

      <div className="mt-4">
        <GrammaSummary cardData={cardData[0]} />
      </div>
      <div className="mt-4">
        <ReadSummary readingSummary={readingSummary} />
      </div>
    </>
  );
}
