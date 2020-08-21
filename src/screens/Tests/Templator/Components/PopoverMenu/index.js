import React from "react";
import Popper from "popper.js";

const PopoverMenu = ({
  menuSections,
  buttonContent,
  menuPlacement,
  buttonStyle,
}) => {
  // const menuItems = menuItems.items
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();

  const openPopover = () => {
    new Popper(btnRef.current, popoverRef.current, {
      placement: menuPlacement,
    });
    setPopoverShow(true);
  };
  const closePopover = () => {
    setPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap items-center ">
        <div className="w-full text-center  ">
          <button
            className={` text-white  outline-none focus:outline-none mr-1 mb-1 ${buttonStyle}`}
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
              " bg-white   block z-50  shadow-xl border rounded  "
            }
            ref={popoverRef}
          >
            <div
              className={
                "bg-white text-gray-600  opacity-75 font-semibold overflow-auto h-56  w-72     uppercase "
              }
            >
              <div class="  mt-2 min-w-full   ">
                {menuSections.map((element) => (
                  <div class=" bg-white  ">
                    <p className="bg-white text-left ml-5  pt-4 normal-case text-gray-500 font-normal  ">
                      {element.sectionTitle}
                    </p>
                    <div class="border-t border-gray-100 " />
                    {element.sectionItems.map((item) => (
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
                      </>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PopoverMenu;
