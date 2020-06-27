import React, { useEffect } from "react";
import Popper from "popper.js";

const PopoverMenu = ({ menuItems, buttonContent, menuPlacement }) => {
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();

  const openPopover = () => {
    new Popper(btnRef.current, popoverRef.current, {
      placement: menuPlacement
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
            {buttonContent}
          </button>
          <div
            className={
              (popoverShow ? "" : "hidden ") +
              " bg-white rounded-md   block z-50 "
            }
            ref={popoverRef}
          >
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
                  {menuItems.map(item => (
                    <>
                      {" "}
                      <div class="py-1">
                        <a
                          href="#"
                          class="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                          role="menuitem"
                          onClick={item.onClick}
                        >
                          {item.icon}
                          {item.title}
                        </a>
                      </div>
                      <div class="border-t border-gray-100"></div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PopoverMenu;
