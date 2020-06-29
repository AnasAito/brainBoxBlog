import React, { useState } from "react";

import SearchBar from "shared/components/SearchBar/index";
import AddButoon from "./Components/addButoon";
import Carousel from "./Components/carousel";
import Previewer from "./Components/previewer";
const Block31S = () => (
  <div className=" w-36  rounded-lg border flex flex-col shadow-xl ">
    <div className="flex flex-row rounded-lg ">
      <div class="bg-white px-1 py-2 rounded-lg w-1/2">
        <div class="border-2 border-dashed border-gray-200 rounded-lg  h-16"></div>
      </div>
      <div class="bg-white px-1 py-2 rounded-lg w-1/2 ">
        <div class="border-2 border-dashed border-gray-200 rounded-lg  h-16"></div>
      </div>
    </div>
    <div className="flex flex-row rounded-lg ">
      <div class="bg-white px-1 py-2 rounded-lg w-1/2">
        <div class="border-2 border-dashed border-gray-200 rounded-lg  h-16"></div>
      </div>
    </div>
  </div>
);
const Block31B = () => (
  <div className=" w-full  rounded-lg border  ">
    <div className="flex flex-row rounded-lg ">
      <div class="bg-white px-1 py-2 rounded-lg w-1/2">
        <div class="border-2 border-dashed border-gray-200 rounded-lg  h-96   ">
          {/* build smart container switch from add button to block preview*/}
          {
            <div className=" h-full w-full flex justify-center  bg-red-100  ">
              <AddButoon />
            </div>
          }
        </div>
      </div>
      <div class="bg-white px-1 py-2 rounded-lg w-1/2 ">
        <div class="border-2 border-dashed border-gray-200 rounded-lg h-96  ">
          {
            <div className=" h-full w-full flex justify-center  bg-red-100  ">
              <AddButoon />
            </div>
          }
        </div>
      </div>
    </div>
    <div className="flex flex-row rounded-lg ">
      <div class="bg-white px-1 py-2 rounded-lg w-1/2">
        <div class="border-2 border-dashed border-gray-200 rounded-lg h-96 flex justify-center items-center ">
          {
            <div className=" h-full w-full flex justify-center  bg-red-100  ">
              <AddButoon />
            </div>
          }
        </div>
      </div>
    </div>
  </div>
);
const Block3_2 = () => (
  <div className=" w-36  rounded-lg border flex flex-col shadow-xl ">
    <div class="bg-white px-1 py-2 rounded-lg ">
      <div class="border-2 border-dashed border-gray-200 rounded-lg  h-16"></div>
    </div>
    <div className="flex flex-row rounded-lg ">
      <div class="bg-white px-1 py-2 rounded-lg w-1/2">
        <div class="border-2 border-dashed border-gray-200 rounded-lg  h-16"></div>
      </div>
      <div class="bg-white px-1 py-2 rounded-lg w-1/2 ">
        <div class="border-2 border-dashed border-gray-200 rounded-lg  h-16"></div>
      </div>
    </div>
  </div>
);
export default function Dashboard() {
  const [option, setOption] = useState("");
  return (
    <div className="m-10">
      <div className="hidden sm:block pt-10">
        <div className="flex flex-row justify-between">
          <h2 className="text-3xl font-black">Tests</h2>

          <SearchBar />
        </div>

        <div class="border-t border-gray-100"></div>
      </div>
      <div className="pt-10  flex flex-row ">
        <div className="flex w-2/12 flex-col items-center justify-center  ">
          <Carousel setOption={setOption} option={option} />
        </div>
        <div className="flex w-10/12 ">
          <Previewer option={option} />
        </div>
      </div>
    </div>
  );
}
