import React from "react";

export default function Index({ active, handleClick }) {
  // const [active, setActive] = useState(false);
  return (
    <span
      onClick={handleClick}
      role="checkbox"
      tabIndex="0"
      aria-checked="false"
      className={`${
        active ? "bg-blue-600" : "bg-gray-200"
      } relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
    >
      <span
        aria-hidden="true"
        className={`${
          active ? "translate-x-5" : "translate-x-0"
        } relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
      >
        <span
          className={`${
            active
              ? "opacity-0 ease-out duration-100"
              : "opacity-100 ease-in duration-200"
          } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
        >
          <svg
            className="h-3 w-3 text-gray-400"
            fill="none"
            viewBox="0 0 12 12"
          >
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <span
          className={`${
            active
              ? "opacity-100 ease-in duration-200"
              : "opacity-0 ease-out duration-100"
          } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 511.999 511.999"
            className="h-3 w-3 text-indigo-600"
            fill="currentColor"
          >
            <g>
              <g>
                <path
                  d="M117.909,339.17c-35.868,43.203-60.518,97.728-66.82,156.22c-0.54,5,1.46,9.93,5.32,13.15
			c3.787,3.134,8.942,4.296,13.9,2.83l109.8-32.91C146.959,435.17,127.449,391.62,117.909,339.17z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M460.909,495.39c-6.223-57.765-30.376-112.238-66.8-156.22c-9.696,53.174-29.905,97.073-62.17,139.31l109.75,32.89
			c4.967,1.469,10.12,0.299,13.9-2.83C459.449,505.32,461.449,500.39,460.909,495.39z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M371,256c0-92.492-37.008-181.78-104.206-251.416C263.967,1.654,260.071,0,256,0c-4.071,0-7.967,1.654-10.794,4.584
			C178.008,74.22,141,163.508,141,256c0,82.575,16.956,144.51,63.563,205.058c10.042,13.051,21.711,26.492,36.438,41.966V327
			c0-8.284,6.716-15,15-15s15,6.716,15,15v176.03C339.466,431.23,371,368.636,371,256z M256,174.867
			c-12.284,0-23.518,6.306-30.82,17.3c-4.585,6.9-13.896,8.778-20.795,4.195c-6.9-4.584-8.778-13.894-4.195-20.795
			c12.77-19.224,33.633-30.7,55.811-30.7s43.041,11.477,55.811,30.7c4.583,6.901,2.705,16.211-4.195,20.795
			c-6.875,4.566-16.192,2.733-20.795-4.195C279.517,181.173,268.284,174.867,256,174.867z"
                />
              </g>
            </g>
          </svg>
        </span>
      </span>
    </span>
  );
}
