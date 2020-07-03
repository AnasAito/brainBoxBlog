import React from "react";
//import AddButoon from "../Components/addButoon";
import SmartContainer from "../Components/smartContainer";
export const previewerTemplates = {
  block31: (
    <div className=" w-full  rounded-lg border  ">
      <div className="flex flex-row rounded-lg ">
        <div class=" px-1 py-2 rounded-lg w-1/2">
          {/* build smart container switch from add button to block preview*/}
          {<SmartContainer />}
        </div>
        <div class=" px-1 py-2 rounded-lg w-1/2 ">{<SmartContainer />}</div>
      </div>
      <div className="flex flex-row rounded-lg ">
        <div class=" px-1 py-2 rounded-lg w-1/2">{<SmartContainer />}</div>
      </div>
    </div>
  ),
  block32: (
    <div className=" w-full  rounded-lg border  ">
      <div className="flex flex-row rounded-lg ">
        <div class=" px-1 py-2 rounded-lg w-full">{<SmartContainer />}</div>
      </div>
      <div className="flex flex-row rounded-lg ">
        <div class=" px-1 py-2 rounded-lg w-1/2">
          {/* build smart container switch from add button to block preview*/}
          {<SmartContainer />}
        </div>
        <div class=" px-1 py-2 rounded-lg w-1/2 ">{<SmartContainer />}</div>
      </div>
    </div>
  ),
  block33: (
    <div className=" w-full  rounded-lg border  ">
      <div className="flex flex-row rounded-lg ">
        <div class=" px-1 py-2 rounded-lg w-1/2">
          {/* build smart container switch from add button to block preview*/}
          {<SmartContainer />}
        </div>
        <div class=" px-1 py-2 rounded-lg w-1/2 ">
          <SmartContainer />
        </div>
      </div>
      <div className="flex flex-row rounded-lg ">
        <div class=" px-1 py-2 rounded-lg w-full">
          <SmartContainer />
        </div>
      </div>
    </div>
  )
};
