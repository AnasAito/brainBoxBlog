import React, { useState, useEffect, useRef } from "react";
import get from "lodash/get";
export default function Popover({ text, hint, sugs, rapName }) {
  const node = useRef();
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      sethidden(false);
      return;
    }
    // outside click

    sethidden(true);
  };

  const [hidden, sethidden] = useState(false);
  useEffect(() => {
    // add when mounted
    sethidden(true);
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className=" inline-block    ">
      <span
        ref={node}
        className={` ${
          hidden ? "" : "bg-red-100"
        } cursor-pointer focus:outline-none  rounded-lg hover:bg-red-100 px-1 font-medium text-red-400`}
      >
        {text}
      </span>

      <>
        {!hidden ? (
          <div className={`origin-top-right   z-0 rounded-md  shadow-lg `}>
            <div className="rounded-md shadow-md  bg-white absolute w-60 block  ">
              <div className=" bg-blue-400 text-white opacity-75  p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg">
                {rapName ? rapName : ""}
              </div>
              <div className="p-3">
                <p className="mb-2"> {hint ? hint : ""}</p>
                {sugs.map(sug => (
                  <span class="mr-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-500 text-white">
                    {sug}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    </div>
  );
}
