import React from "react";
import SmartContainer from "./Components/smartContainer";
import BlockView from "./Components/smartContainer/blockView";

export default function View({ layout, activityId }) {
  return (
    <div className="w-screen  flex flex-wrap   ">
      {Object.keys(layout).map(function (key, index) {
        return (
          <div className="  p-3 w-1/2">
            <BlockView key={key} blockId={key} />
          </div>
        );
      })}

      <SmartContainer
        key={"block320"}
        activityId={activityId}
        order={Object.keys(layout).length}
      />
    </div>
  );
}
