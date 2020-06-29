import React from "react";
import AddButoon from "../Components/addButoon";
export const previewerTemplates = {
  block31: (
    <div className=" w-full  rounded-lg border  ">
      <div className="flex flex-row rounded-lg ">
        <div class=" px-1 py-2 rounded-lg w-1/2">
          <div class="border-2 border-dashed border-gray-200 rounded-lg  h-96   ">
            {/* build smart container switch from add button to block preview*/}
            {
              <div className=" h-full w-full flex justify-center hover:bg-gray-100  ">
                <AddButoon />
              </div>
            }
          </div>
        </div>
        <div class=" px-1 py-2 rounded-lg w-1/2 ">
          <div class="border-2 border-dashed border-gray-200 rounded-lg h-96  ">
            {
              <div className=" h-full w-full flex justify-center hover:bg-gray-100    ">
                <AddButoon />
              </div>
            }
          </div>
        </div>
      </div>
      <div className="flex flex-row rounded-lg ">
        <div class=" px-1 py-2 rounded-lg w-1/2">
          <div class="border-2 border-dashed border-gray-200 rounded-lg h-96 flex justify-center items-center ">
            {
              <div className=" h-full w-full flex justify-center hover:bg-gray-100 ">
                <AddButoon />
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  ),
  block32: (
    <div className=" w-full  rounded-lg border  ">
      <div className="flex flex-row rounded-lg ">
        <div class=" px-1 py-2 rounded-lg w-full">
          <div class="border-2 border-dashed border-gray-200 rounded-lg h-96 flex justify-center items-center ">
            {
              <div className=" h-full w-full flex justify-center  hover:bg-gray-100 ">
                <AddButoon />
              </div>
            }
          </div>
        </div>
      </div>
      <div className="flex flex-row rounded-lg ">
        <div class=" px-1 py-2 rounded-lg w-1/2">
          <div class="border-2 border-dashed border-gray-200 rounded-lg  h-96   ">
            {/* build smart container switch from add button to block preview*/}
            {
              <div className=" h-full w-full flex justify-center  hover:bg-gray-100 ">
                <AddButoon />
              </div>
            }
          </div>
        </div>
        <div class=" px-1 py-2 rounded-lg w-1/2 ">
          <div class="border-2 border-dashed border-gray-200 rounded-lg h-96  ">
            {
              <div className=" h-full w-full flex justify-center hover:bg-gray-100 ">
                <AddButoon />
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  ),
  block33: (
    <div className=" w-full  rounded-lg border  ">
      <div className="flex flex-row rounded-lg ">
        <div class=" px-1 py-2 rounded-lg w-1/2">
          <div class="border-2 border-dashed border-gray-200 rounded-lg  h-96   ">
            {/* build smart container switch from add button to block preview*/}
            {
              <div className=" h-full w-full flex justify-center   hover:bg-gray-100 ">
                <AddButoon />
              </div>
            }
          </div>
        </div>
        <div class=" px-1 py-2 rounded-lg w-1/2 ">
          <div class="border-2 border-dashed border-gray-200 rounded-lg h-96  ">
            {
              <div className=" h-full w-full flex justify-center  hover:bg-gray-100">
                <AddButoon />
              </div>
            }
          </div>
        </div>
      </div>
      <div className="flex flex-row rounded-lg ">
        <div class=" px-1 py-2 rounded-lg w-full">
          <div class="border-2 border-dashed border-gray-200 rounded-lg h-96 flex justify-center items-center ">
            {
              <div className=" h-full w-full flex justify-center  hover:bg-gray-100 ">
                <AddButoon />
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
};
