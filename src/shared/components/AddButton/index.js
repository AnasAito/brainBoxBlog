import React from "react";

export default function AddButton({ handleClick }) {
  return (
    <div className="rounded-sm hover:bg-gray-300  border-gray-300 border  min-h-full  flex justify-center items-center">
      <svg
        onClick={handleClick}
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 496 496"
        className="h-10 w-10 text-gray-500 cursor-pointer hover:text-gray-700"
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
  );
}
