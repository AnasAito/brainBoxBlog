import React from "react";
import SmartContainer from "./Components/smartContainer";
import BlockView from "./Components/smartContainer/blockView";

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
  const getMaxOrder = (layout) => {
    const layoutValues = Object.values(layout)
      .map((value) => value.split("-")[0])
      .sort();
    return layoutValues.length == 0 ? 0 : layoutValues[layoutValues.length - 1];
  };
  return (
    <div className="w-screen  flex flex-wrap h-full    ">
      {sortLayout(layout).map((key, index) => {
        switch (key) {
          case "test":
            return <div>test</div>;

          case "audiorecorder":
            return (
              <BlockView
                key={key}
                blockId={key}
                activityId={activityId}
                isFull={layout[key].split("-")[1] === "f"}
                isStatic
              />
            );

          default:
            return (
              <BlockView
                key={key}
                blockId={key}
                activityId={activityId}
                isFull={layout[key].split("-")[1] === "f"}
              />
            );
        }
      })}

      <SmartContainer
        key={"newBlock"}
        activityId={activityId}
        order={parseFloat(getMaxOrder(layout)) + 1}
      />
    </div>
  );
}
