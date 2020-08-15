import React from "react";
import { carouselTemplates } from "../templates/carousel";
export default function Carousel({ setOption, option }) {
  return (
    <>
      <svg className="w-8 h-8 m-2 transform rotate-180" viewBox="0 0 256 256">
        <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 		" />
      </svg>

      <div className=" self-center  grid grid-cols-1  gap-5 overflow-scroll  p-3 ">
        {carouselTemplates.map(block => (
          <div
            className=" cursor-pointer  transition ease-in-out   duration-500 transform hover:scale-105  "
            onClick={() => setOption(block.title)}
          >
            {block.content(option)}
          </div>
        ))}
      </div>
      <svg className="w-8 h-8 m-2" viewBox="0 0 256 256">
        <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 		" />
      </svg>
    </>
  );
}
