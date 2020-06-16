import React from "react";

export default function Pause({ handleClick, path }) {
  return (
    <div
      onClick={() => handleClick(true)}
      className=" cursor-pointer  hover:bg-blue-500 hover:text-white border rounded-full h-10 w-10 flex items-center justify-center self-center  bg-white"
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d={path} />
      </svg>
    </div>
  );
}
