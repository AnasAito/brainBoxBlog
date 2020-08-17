import React from "react";
import SmartContainer from "./Components/smartContainer";
import BlockView from "./Components/smartContainer/blockView";
{
  /**/
}
export default function View({ layout, activityId }) {
  console.log(layout);
  // add sort by order
  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }
  const sortLayout = (layout) => {
    const layoutValues = Object.values(layout).sort();
    return layoutValues.map((value) => getKeyByValue(layout, value));
  };
  return (
    <div className="w-screen  flex flex-wrap   ">
      {sortLayout(layout).map((key) => (
        <BlockView
          key={key}
          blockId={key}
          activityId={activityId}
          isFull={layout[key].split("-")[1] === "f"}
        />
      ))}

      <SmartContainer
        key={"newBlock"}
        activityId={activityId}
        order={Object.keys(layout).length}
      />
    </div>
  );
}
