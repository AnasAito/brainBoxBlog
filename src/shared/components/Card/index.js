import React, { useState } from "react";
import Publish from "shared/components/ButtonIO";
import PopoverButton from "../PopOverButton/index";
const Card = ({ title, subTitle, onEdit, onDelete, onAdd, image }) => {
  const published = "true";
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
            className="bg-blue-50  object-cover h-48 w-full rounded-t-sm "
            alt="card"
            src={image}
          ></img>
        </div>
        <div className="px-2 py-4 ">
          <div className="flex flex-row justify-between  ">
            <p className=" text-lg leading-9 font-semibold text-gray-900 truncate">
              {title}
            </p>
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
          <PopoverButton>
            <div>
              <div
                className={
                  "bg-white text-gray-600 opacity-75 font-semibold    uppercase "
                }
              >
                <div class="  mt-2 w-56  shadow-lg">
                  <div
                    class=" bg-white shadow-xs"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div class="py-1">
                      <a
                        href="#"
                        class="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                        onClick={onEdit}
                      >
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
                        Edit
                      </a>
                    </div>
                    <div class="border-t border-gray-100"></div>

                    <div class="border-t border-gray-100"></div>
                    <div class="py-1">
                      <a
                        href="#"
                        class="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                        onClick={onDelete}
                      >
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
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PopoverButton>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Card;
