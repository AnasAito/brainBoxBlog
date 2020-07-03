import React from "react";
//import AddButoon from "../Components/addButoon";
import SmartContainer from "../Components/smartContainer";
// each smartContainer take an attach bool (if maper got on of the blocks saved = true )
// take also block if maper has a block id on this index block = [{}] or [ ] if no block is attached
export const previewerTemplates = {
  block31: (blocks, maper) => {
    return (
      <div className=" w-full  rounded-lg border  ">
        <div className="flex flex-row rounded-lg ">
          <div class=" px-1 py-2 rounded-lg w-1/2">
            {/* build smart container switch from add button to block preview*/}
            {
              <SmartContainer
                attachInit={blocks.map(block => block.id).includes(maper[0])}
                block={blocks.filter(block => block.id === maper[0])}
              />
            }
          </div>
          <div class=" px-1 py-2 rounded-lg w-1/2 ">
            <SmartContainer
              attachInit={blocks.map(block => block.id).includes(maper[1])}
              block={blocks.filter(block => block.id === maper[1])}
            />
          </div>
        </div>
        <div className="flex flex-row rounded-lg ">
          <div class=" px-1 py-2 rounded-lg w-1/2">
            <SmartContainer
              attachInit={blocks.map(block => block.id).includes(maper[2])}
              block={blocks.filter(block => block.id === maper[2])}
            />
          </div>
        </div>
      </div>
    );
  },
  block32: (blocks, maper) => (
    <div className=" w-full  rounded-lg border  ">
      <div className="flex flex-row rounded-lg ">
        <div class=" px-1 py-2 rounded-lg w-full">
          {" "}
          <SmartContainer
            attachInit={blocks.map(block => block.id).includes(maper[0])}
            block={blocks.filter(block => block.id === maper[0])}
          />
        </div>
      </div>
      <div className="flex flex-row rounded-lg ">
        <div class=" px-1 py-2 rounded-lg w-1/2">
          {/* build smart container switch from add button to block preview*/}
          <SmartContainer
            attachInit={blocks.map(block => block.id).includes(maper[1])}
            block={blocks.filter(block => block.id === maper[1])}
          />
        </div>
        <div class=" px-1 py-2 rounded-lg w-1/2 ">
          {" "}
          <SmartContainer
            attachInit={blocks.map(block => block.id).includes(maper[2])}
            block={blocks.filter(block => block.id === maper[2])}
          />
        </div>
      </div>
    </div>
  ),
  block33: (blocks, maper) => (
    <div className=" w-full  rounded-lg border  ">
      <div className="flex flex-row rounded-lg ">
        <div class=" px-1 py-2 rounded-lg w-1/2">
          {/* build smart container switch from add button to block preview*/}
          <SmartContainer
            attachInit={blocks.map(block => block.id).includes(maper[0])}
            block={blocks.filter(block => block.id === maper[0])}
          />
        </div>
        <div class=" px-1 py-2 rounded-lg w-1/2 ">
          <SmartContainer
            attachInit={blocks.map(block => block.id).includes(maper[1])}
            block={blocks.filter(block => block.id === maper[1])}
          />
        </div>
      </div>
      <div className="flex flex-row rounded-lg ">
        <div class=" px-1 py-2 rounded-lg w-full">
          <SmartContainer
            attachInit={blocks.map(block => block.id).includes(maper[2])}
            block={blocks.filter(block => block.id === maper[2])}
          />
        </div>
      </div>
    </div>
  )
};
