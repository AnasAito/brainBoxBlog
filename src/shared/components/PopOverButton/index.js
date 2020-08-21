import React from "react";
import Popper from "popper.js";

const PopoverButton = ({ children }) => {
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();

  const openPopover = () => {
    new Popper(btnRef.current, popoverRef.current, {
      placement: "right",
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
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
export default PopoverButton;
