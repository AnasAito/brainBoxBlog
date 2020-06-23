import React, { useState, useEffect, useRef } from "react";
function useOutsideAlerter(ref, handler) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
export default function SearchBar() {
  const [isClicked, setIsClicked] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setIsClicked(false));
  return (
    <div className="flex flex-row   " ref={wrapperRef}>
      <div
        className={`  transform    ${
          isClicked
            ? " transition ease-in-out duration-500  translate-x-0 opacity-100 "
            : "translate-x-96 opacity-0   "
        } justify-end  `}
      >
        <div class="relative w-full text-gray-400 focus-within:text-gray-600">
          <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
          </div>
          <input
            id="search_field"
            class="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
      <div
        class={` ${
          !isClicked ? " opacity-100  " : " opacity-0  hidden  "
        } cursor-pointer group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900`}
        role="menuitem"
        onClick={() => setIsClicked(!isClicked)}
      >
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 511.999 511.999"
          class="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
          //viewBox="0 0 20 20"
          fill="currentColor"
        >
          <g>
            <g>
              <path
                d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
                S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
                c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
                c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"
              />
            </g>
          </g>
        </svg>
        <p className=" font-medium   "> Search</p>
      </div>
    </div>
  );
}
