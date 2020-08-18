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
    // place smart container for deleted block in order(get from cache) - activId
    setIndex();
    const layoutValues = Object.values(layout).sort();

    return layoutValues.map((value) => getKeyByValue(layout, value));
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
        order={Object.keys(layout).length}
      />
    </div>
  );
}
