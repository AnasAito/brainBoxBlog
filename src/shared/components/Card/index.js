import React, { useState } from "react";
import Publish from "shared/components/ButtonIO";
import PopoverButton from "../PopoverButton/index";
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
          <PopoverButton published onDelete={onDelete} onEdit={onEdit} />
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
