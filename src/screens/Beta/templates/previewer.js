import React from "react";
//import AddButoon from "../Components/addButoon";
import SmartContainer from "../Components/smartContainer";

// each smartContainer take an attach bool (if maper got on of the blocks saved = true )
// take also block if maper has a block id on this index block = [{}] or [ ] if no block is attached

export const previewerTemplates = {
  block31: (blocks, maper, activityId) => {
    console.log("block31 ");
    console.log(blocks.map(block => block.id).includes(maper[0]));
    console.log(blocks.map(block => block.id).includes(maper[1]));
    console.log(blocks.map(block => block.id).includes(maper[2]));

    return (
      <div className=" w-full  rounded-lg border  grid grid-cols-2  ">
        <div className="flex flex-col rounded-lg  ">
          <div class=" px-1 py-2 rounded-lg ">
            {/* build smart container switch from add button to block preview*/}
            {
              <SmartContainer
                key={"block310"}
                attachInit={blocks.map(block => block.id).includes(maper[0])}
                block={blocks.filter(block => block.id === maper[0])}
                activityId={activityId}
                order={0}
              />
            }
          </div>
          <div class=" px-1 py-2 rounded-lg  ">
            <SmartContainer
              key={"block311"}
              attachInit={blocks.map(block => block.id).includes(maper[1])}
              block={blocks.filter(block => block.id === maper[1])}
              activityId={activityId}
              order={1}
            />
          </div>
        </div>
        <div className="flex   rounded-lg   ">
          <div class=" px-1 py-2 rounded-lg w-full ">
            <SmartContainer
              key={"block312"}
              attachInit={blocks.map(block => block.id).includes(maper[2])}
              block={blocks.filter(block => block.id === maper[2])}
              activityId={activityId}
              order={2}
            />
          </div>
        </div>
      </div>
    );
  },
  block32: (blocks, maper, activityId) => {
    console.log("block32 ");
    console.log(blocks.map(block => block.id).includes(maper[0]));
    console.log(blocks.map(block => block.id).includes(maper[1]));
    console.log(blocks.map(block => block.id).includes(maper[2]));
    return (
      <div className=" w-full  rounded-lg border  ">
        <div className="flex flex-row rounded-lg ">
          <div class=" px-1 py-2 rounded-lg w-full">
            {" "}
            <SmartContainer
              key={"block320"}
              attachInit={blocks.map(block => block.id).includes(maper[0])}
              block={blocks.filter(block => block.id === maper[0])}
              activityId={activityId}
              order={0}
            />
          </div>
        </div>
        <div className="flex flex-row rounded-lg ">
          <div class=" px-1 py-2 rounded-lg w-1/2">
            {/* build smart container switch from add button to block preview*/}
            <SmartContainer
              key={"block321"}
              attachInit={blocks.map(block => block.id).includes(maper[1])}
              block={blocks.filter(block => block.id === maper[1])}
              activityId={activityId}
              order={1}
            />
          </div>
          <div class=" px-1 py-2 rounded-lg w-1/2 ">
            {" "}
            <SmartContainer
              key={"block322"}
              attachInit={blocks.map(block => block.id).includes(maper[2])}
              block={blocks.filter(block => block.id === maper[2])}
              activityId={activityId}
              order={2}
            />
          </div>
        </div>
      </div>
    );
  },
  block33: (blocks, maper, activityId) => {
    console.log("block33 ");
    console.log(blocks.map(block => block.id).includes(maper[0]));
    console.log(blocks.map(block => block.id).includes(maper[1]));
    console.log(blocks.map(block => block.id).includes(maper[2]));
    return (
      <div className=" w-full  rounded-lg border  ">
        <div className="flex flex-row rounded-lg ">
          <div class=" px-1 py-2 rounded-lg w-1/2">
            {/* build smart container switch from add button to block preview*/}
            <SmartContainer
              key={"block330"}
              attachInit={blocks.map(block => block.id).includes(maper[0])}
              block={blocks.filter(block => block.id === maper[0])}
              activityId={activityId}
              order={0}
            />
          </div>
          <div class=" px-1 py-2 rounded-lg w-1/2 ">
            <SmartContainer
              key={"block331"}
              attachInit={blocks.map(block => block.id).includes(maper[1])}
              block={blocks.filter(block => block.id === maper[1])}
              activityId={activityId}
              order={1}
            />
          </div>
        </div>
        <div className="flex flex-row rounded-lg ">
          <div class=" px-1 py-2 rounded-lg w-full">
            <SmartContainer
              key={"block332"}
              attachInit={blocks.map(block => block.id).includes(maper[2])}
              block={blocks.filter(block => block.id === maper[2])}
              activityId={activityId}
              order={2}
            />
          </div>
        </div>
      </div>
    );
  }
};
