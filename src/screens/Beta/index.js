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
                  <div className=" h-full flex justify-center   ">
                    <PopoverMenu
                      menuPlacement="right"
                      menuItems={[
                        {
                          title: (
                            <div>
                              <p className=" text-base text-black font-medium text-left">
                                Writing
                              </p>
                              <p className="text-xs font-normal text-left ">
                                attach a writing block
                              </p>
                            </div>
                          ),

                          icon: (
                            <svg
                              class="mr-3 h-10 w-10 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                              <path
                                fill-rule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          )
                          // onClick: onEdit
                        },
                        {
                          title: (
                            <div>
                              <p className=" text-base text-black font-medium text-left">
                                Quiz
                              </p>
                              <p className="text-xs font-normal text-left ">
                                attach a Quiz block
                              </p>
                            </div>
                          ),

                          icon: (
                            <svg
                              class="mr-3 h-10 w-10 text-gray-400  group-hover:text-gray-500 group-focus:text-gray-500"
                              viewBox="0 0 294.023 294.023"
                              fill="currentColor"
                            >
                              <path
                                d="M124.916,0.002
	c-1.649,0.045-3.169,0.9-4.064,2.285l-14.49,21.736h-49.35c-2.761,0-5,2.239-5,5v50c0,2.761,2.239,5,5,5h50c2.761,0,5-2.239,5-5
	V39.574l-10,15v19.449h-40v-40h37.682L85.631,55.117l-6.146-12.293c-1.205-2.485-4.196-3.523-6.681-2.318
	c-2.485,1.205-3.523,4.196-2.318,6.681c0.018,0.036,0.035,0.072,0.054,0.108l10,20c1.235,2.47,4.238,3.472,6.709,2.237
	c0.778-0.389,1.441-0.974,1.924-1.698l40-60c1.565-2.276,0.989-5.389-1.287-6.954C127.013,0.281,125.974-0.027,124.916,0.002
	L124.916,0.002z M147.012,44.025c-2.761,0-5,2.239-5,5v10c0,2.761,2.239,5,5,5h90c2.761,0,5-2.239,5-5v-10c0-2.761-2.239-5-5-5
	H147.012z M57.012,94.06c-2.761,0-5,2.239-5,5v50c0,2.761,2.239,5,5,5h50c2.761,0,5-2.239,5-5v-50c0-2.761-2.239-5-5-5H57.012z
	 M62.012,104.06h40v40h-40V104.06z M147.012,114.023c-2.761,0-5,2.239-5,5v10c0,2.761,2.239,5,5,5h90c2.761,0,5-2.239,5-5v-10
	c0-2.761-2.239-5-5-5H147.012z M57.012,164.023c-2.761,0-5,2.239-5,5v50c0,2.761,2.239,5,5,5h50c2.761,0,5-2.239,5-5v-50
	c0-2.761-2.239-5-5-5H57.012z M62.012,174.023h40v40h-40V174.023z M147.012,184.058c-2.761,0-5,2.239-5,5v10c0,2.761,2.239,5,5,5h90
	c2.761,0,5-2.239,5-5v-10c0-2.761-2.239-5-5-5H147.012z M57.012,234.023c-2.761,0-5,2.239-5,5v50c0,2.761,2.239,5,5,5h50
	c2.761,0,5-2.239,5-5v-50c0-2.761-2.239-5-5-5L57.012,234.023L57.012,234.023z M62.012,244.023h40v40h-40V244.023z M147.012,254.023
	c-2.761,0-5,2.239-5,5v10c0,2.761,2.239,5,5,5h90c2.761,0,5-2.239,5-5v-10c0-2.761-2.239-5-5-5H147.012z"
                              />
                            </svg>
                          )
                          //onClick: onDelete
                        },
                        {
                          title: (
                            <div>
                              <p className=" text-base text-black font-medium text-left">
                                Audio
                              </p>
                              <p className="text-xs font-normal text-left ">
                                attach an audio block
                              </p>
                            </div>
                          ),

                          icon: (
                            <svg
                              class="mr-3 h-10 w-10 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                              viewBox="0 0 480 480"
                              fill="currentColor"
                            >
                              <path
                                d="M278.944,17.577c-5.568-2.656-12.128-1.952-16.928,1.92L106.368,144.009H32c-17.632,0-32,14.368-32,32v128
                            c0,17.664,14.368,32,32,32h74.368l155.616,124.512c2.912,2.304,6.464,3.488,10.016,3.488c2.368,0,4.736-0.544,6.944-1.6
                            c5.536-2.656,9.056-8.256,9.056-14.4v-416C288,25.865,284.48,20.265,278.944,17.577z"
                              />
                              <path
                                d="M368.992,126.857c-6.304-6.208-16.416-6.112-22.624,0.128c-6.208,6.304-6.144,16.416,0.128,22.656
                            C370.688,173.513,384,205.609,384,240.009s-13.312,66.496-37.504,90.368c-6.272,6.176-6.336,16.32-0.128,22.624
                            c3.136,3.168,7.264,4.736,11.36,4.736c4.064,0,8.128-1.536,11.264-4.64C399.328,323.241,416,283.049,416,240.009
                            S399.328,156.777,368.992,126.857z"
                              />
                              <path
                                d="M414.144,81.769c-6.304-6.24-16.416-6.176-22.656,0.096c-6.208,6.272-6.144,16.416,0.096,22.624
                            C427.968,140.553,448,188.681,448,240.009s-20.032,99.424-56.416,135.488c-6.24,6.24-6.304,16.384-0.096,22.656
                            c3.168,3.136,7.264,4.704,11.36,4.704c4.064,0,8.16-1.536,11.296-4.64C456.64,356.137,480,299.945,480,240.009
                            S456.64,123.881,414.144,81.769z"
                              />
                            </svg>
                          )
                          // onClick: onEdit
                        },
                        {
                          title: (
                            <div>
                              <p className=" text-base text-black font-medium text-left">
                                Image
                              </p>
                              <p className="text-xs font-normal text-left ">
                                attach an image block
                              </p>
                            </div>
                          ),

                          icon: (
                            <svg
                              class="mr-3 h-10 w-10 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                              viewBox="0 0 477.867 477.867"
                              fill="currentColor"
                            >
                              <g>
                                <g>
                                  <path
                                    d="M426.667,68.267H51.2c-28.277,0-51.2,22.923-51.2,51.2V358.4c0,28.277,22.923,51.2,51.2,51.2h375.467
			c28.277,0,51.2-22.923,51.2-51.2V119.467C477.867,91.19,454.944,68.267,426.667,68.267z M443.733,266.001L336.333,158.601
			c-6.664-6.663-17.468-6.663-24.132,0L170.667,300.134l-56.201-56.201c-6.664-6.663-17.468-6.663-24.132,0l-56.201,56.201V119.467
			c0-9.426,7.641-17.067,17.067-17.067h375.467c9.426,0,17.067,7.641,17.067,17.067V266.001z"
                                  />
                                </g>
                              </g>
                              <g>
                                <g>
                                  <circle cx="153.6" cy="187.733" r="51.2" />
                                </g>
                              </g>
                            </svg>
                          )
                          // onClick: onEdit
                        }
                      ]}
                      buttonContent={
                        <svg
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 496 496"
                          className="h-20 w-20    self-center transition duration-500 ease-in-out text-gray-500 cursor-pointer hover:text-gray-700 "
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
                      }
                    />
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
    </div>
  );
}
