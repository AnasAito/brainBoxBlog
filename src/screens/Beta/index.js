import React, { useState } from "react";
import "./circle.css";
import SearchBar from "shared/components/SearchBar/index";
import PopoverMenu from "shared/components/PopoverMenu";
const Block3_1 = () => (
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
  const [show, setShow] = useState(false);
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
        <div className="flex w-2/12 flex-col items-center justify-center">
          <svg
            className="w-8 h-8 m-2 transform rotate-180"
            viewBox="0 0 256 256"
          >
            <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 		" />
          </svg>

          <div className=" self-center  grid grid-cols-1  gap-5 overflow-scroll  px-3  ">
            <Block3_1 />
            <Block3_2 />
            <Block3_1 />
            <Block3_2 />
          </div>
          <svg className="w-8 h-8 m-2" viewBox="0 0 256 256">
            <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 		" />
          </svg>
        </div>
        <div className="flex w-10/12 ">
          <div className=" w-full  rounded-lg border ">
            <div className="flex flex-row rounded-lg ">
              <div class="bg-white px-1 py-2 rounded-lg w-1/2">
                <div class="border-2 border-dashed border-gray-200 rounded-lg  h-96 flex flex-col  justify-between  ">
                  <div className=" h-full flex justify-center  items-center ">
                    <PopoverMenu />
                  </div>
                </div>
              </div>
              <div class="bg-white px-1 py-2 rounded-lg w-1/2 ">
                <div class="border-2 border-dashed border-gray-200 rounded-lg h-96 flex justify-center items-center ">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 496 496"
                    className=" h-20 w-20 text-gray-500 cursor-pointer hover:text-gray-700"
                    fill="currentColor"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M248,0C111.033,0,0,111.033,0,248c0.154,136.903,111.097,247.846,248,248c136.967,0,248-111.033,248-248S384.967,0,248,0
				z M248,480C119.87,480,16,376.13,16,248C16.146,119.93,119.93,16.146,248,16c128.13,0,232,103.87,232,232S376.13,480,248,480z"
                          />
                          <path
                            d="M400,240H256V96c0-4.418-3.582-8-8-8s-8,3.582-8,8v144H96c-4.418,0-8,3.582-8,8s3.582,8,8,8h144v144c0,4.418,3.582,8,8,8
				s8-3.582,8-8V256h144c4.418,0,8-3.582,8-8S404.418,240,400,240z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-row rounded-lg ">
              <div class="bg-white px-1 py-2 rounded-lg w-1/2">
                <div class="border-2 border-dashed border-gray-200 rounded-lg h-96 flex justify-center items-center ">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 496 496"
                    className=" h-20 w-20 text-gray-500 cursor-pointer hover:text-gray-700"
                    fill="currentColor"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M248,0C111.033,0,0,111.033,0,248c0.154,136.903,111.097,247.846,248,248c136.967,0,248-111.033,248-248S384.967,0,248,0
				z M248,480C119.87,480,16,376.13,16,248C16.146,119.93,119.93,16.146,248,16c128.13,0,232,103.87,232,232S376.13,480,248,480z"
                          />
                          <path
                            d="M400,240H256V96c0-4.418-3.582-8-8-8s-8,3.582-8,8v144H96c-4.418,0-8,3.582-8,8s3.582,8,8,8h144v144c0,4.418,3.582,8,8,8
				s8-3.582,8-8V256h144c4.418,0,8-3.582,8-8S404.418,240,400,240z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="circle-container ">
        <a class="center  bg-blue-100  ">
          <p>0</p>
        </a>
        <a class="deg0">
          <p>0</p>
        </a>
        <a class="deg45">
          <p>0</p>
        </a>
        <a class="deg135">
          <p>0</p>
        </a>
        <a class="deg180">
          <p>0</p>
        </a>
        <a class="deg225">
          <p>0</p>
        </a>
        <a class="deg315">
          <p>0</p>
        </a>
      </div>
    </div>
  );
}
