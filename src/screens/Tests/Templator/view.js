import React from "react";
import SmartContainer from "./Components/smartContainer";
import BlockView from "./Components/smartContainer/blockView";

export default function View({ layout, activityId }) {
  console.log(layout);

  return (
    <div className="w-screen  flex flex-wrap   ">
      {Object.keys(layout).map(function (key, index) {
        return (
          <div
            className={` p-3 ${
              layout[key].split("-")[1] === "f" ? "w-full" : "w-1/2"
            }`}
          >
            <BlockView key={key} blockId={key} />
          </div>
        );
      })}

      <SmartContainer
        key={"newBlock"}
        activityId={activityId}
        order={Object.keys(layout).length}
      />
    </div>
  );
}
