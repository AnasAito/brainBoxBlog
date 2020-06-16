import React from "react";
import Publish from "shared/components/ButtonIO";
const Card = ({ title, subTitle, onEdit, onDelete, onAdd }) => (
  <div>
    <div className="bg-white rounded-lg shadow-lg">
      <img
        className="bg-blue-50  w-full rounded-t-lg"
        alt="card"
        src="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"
      />
      <div className="px-2 py-4">
        <div className="flex flex-row justify-between  ">
          <p className=" text-lg leading-9 font-semibold text-gray-900 truncate">
            {title}
          </p>
          <div className="flex items-center">
            <Publish />
          </div>
        </div>
        <div className="flex flex-row justify-between ">
          <p className="text-base leading-5 font-medium text-gray-500 truncate">
            {subTitle}
          </p>
        </div>
        <div className="flex flex-row justify-end ">
          <div
            className="inline-block h-8 w-8 rounded-full ml-2  flex justify-center items-center"
            alt=""
            onClick={onEdit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="h-6 w-6 cursor-pointer text-indigo-600 hover:text-indigo-500"
              fill="currentColor"
            >
              <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
            </svg>
          </div>
          <div
            className="inline-block h-8 w-8 rounded-full ml-2  flex justify-center items-center"
            alt=""
            onClick={onAdd}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="h-6 w-6 cursor-pointer text-green-600 hover:text-green-500"
              fill="currentColor"
            >
              <path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
            </svg>
          </div>
          <div
            className="inline-block h-8 w-8 rounded-full ml-2  flex justify-center items-center"
            alt=""
            onClick={onDelete}
          >
            <svg
              id="Capa_1"
              className="h-6 w-6 cursor-pointer text-red-600 hover:text-red-500"
              viewBox="0 0 515.556 515.556"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z" />
              <path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Card;
