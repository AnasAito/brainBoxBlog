import React from "react";
import ReactHtmlParser from "react-html-parser";
import GridLoader from "react-spinners/GridLoader";
import AllCorrection from "./allCorrection";
import BlockWrapper from "components/blockWrapper";
export default function View({
  corr,
  cardData,
  loading,
  setText,
  onfinish,

  instructions,
  readingSummary,
  chunks
}) {
  console.log(chunks);
  return (
    <BlockWrapper
      blockName="Writing"
      onfinish={onfinish}
      reset={() => console.log("reset")}
    >
      <div className="grid grid-cols-1 gap-2 bg-white m-auto rounded overflow-hidden p-3">
        <div>
          <p className="font-medium text-xl">{ReactHtmlParser(instructions)}</p>
        </div>
        {corr ? (
          <AllCorrection
            cardData={cardData}
            readingSummary={readingSummary}
            chunks={chunks}
          />
        ) : (
          <>
            {loading ? (
              <div className="flex justify-center items-center">
                {" "}
                <GridLoader size={30} color={"#EBF5FF"} />
              </div>
            ) : (
              <div className="rounded-md shadow-sm">
                <textarea
                  id="about"
                  rows="6"
                  class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  placeholder="Write here"
                  onChange={e => setText(e.target.value)}
                />
              </div>
            )}
          </>
        )}
      </div>
    </BlockWrapper>
  );
}
