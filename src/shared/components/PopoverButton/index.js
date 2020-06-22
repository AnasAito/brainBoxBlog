import React, { useEffect } from "react";
import Popper from "popper.js";
function useOutsideAlerter(ref) {}
const PopoverButton = ({ published, onEdit, onDelete }) => {
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();

  const openPopover = () => {
    new Popper(btnRef.current, popoverRef.current, {
      placement: "right"
    });
    setPopoverShow(true);
  };
  const closePopover = () => {
    setPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap ">
        <div className="w-full text-center">
          <button
            className={
              "bg-white text-white  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            }
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => {
              popoverShow ? closePopover() : openPopover();
            }}
            ref={btnRef}
          >
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
          </button>
          <div
            className={
              (popoverShow ? "" : "hidden ") +
              " bg-white rounded-md   block z-50 "
            }
            ref={popoverRef}
          >
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
                      <a
                        href="#"
                        class="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                      >
                        <svg
                          class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                          <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                        </svg>
                        Duplicate
                      </a>
                    </div>
                    <div class="border-t border-gray-100"></div>
                    <div class="py-1">
                      <a
                        href="#"
                        class="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                      >
                        <svg
                          class={`mr-3 h-5 w-5 ${
                            !published ? "text-purple-600" : "text-gray-600"
                          } `}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        {!published ? "Publish" : "Unpublish"}
                      </a>
                    </div>

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
          </div>
        </div>
      </div>
    </>
  );
};
export default PopoverButton;
