import React, { useState } from "react";
import Publish from "shared/components/ButtonIO";
import PopoverMenu from "../PopoverMenu/index";
const Card = ({ title, subTitle, onEdit, onDelete, onAdd }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      className="relative cursor-pointer "
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="bg-white  rounded-sm  shadow-md" onClick={onAdd}>
        <div className="w-full rounded-t-sm   inline-block  ">
          <img
            className="bg-blue-50   rounded-t-sm "
            alt="card"
            src="https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/very_big_1/public/feature/images/what_you_need_to_know.jpg?itok=kK9rhbZ7"
          ></img>
        </div>
        <div className="px-2 py-4 ">
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
          <div className="flex flex-row justify-end "></div>
        </div>
      </div>
      {isShown ? (
        <div
          className=" block ease-in-out   absolute z-1   top-0 right-0 m-2 "
          role="dialog"
          aria-modal="true"
        >
          <PopoverMenu
            menuPlacement="right"
            menuItems={[
              {
                title: "Edit",

                icon: (
                  <svg
                    class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
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
                ),
                onClick: onEdit
              },
              {
                title: "Delete",

                icon: (
                  <svg
                    class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                ),
                onClick: onDelete
              }
            ]}
            buttonContent={
              <svg
                id="Capa_1"
                className="h-4 w-4 m-1 cursor-pointer text-gray-300"
                viewBox="0 0 515.556 515.556"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <g>
                    <circle cx="68.267" cy="238.933" r="68.267" />
                  </g>
                </g>
                <g>
                  <g>
                    <circle cx="238.933" cy="238.933" r="68.267" />
                  </g>
                </g>
                <g>
                  <g>
                    <circle cx="409.6" cy="238.933" r="68.267" />
                  </g>
                </g>
              </svg>
            }
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Card;
{
  /* <button className="absolute ease-in-out   top-0 right-0 m-2 rounded border  bg-white ">
  
</button>*/
}
