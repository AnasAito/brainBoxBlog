import React, { useState } from "react";

import SearchBar from "shared/components/SearchBar/index";

import Carousel from "./Components/carousel";
import Previewer from "./Components/previewer";

export default function Dashboard() {
  const [option, setOption] = useState("block31");
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
