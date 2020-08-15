import React, { useState } from "react";
import AddButton from "../addButoon";

export default function View({
  order,

  history,
  activityId,
}) {
  const [isHalf, setIsHalf] = useState(true);
  return (
    <>
      <div className={`flex p-3  rounded-lg ${isHalf ? "w-1/2" : "w-full"} `}>
        <div class=" px-1 py-2 rounded-lg w-full">
          <div class="border-gray-200 rounded-lg   h-96 border-2 border-dashed ">
            <div className=" w-full   bg-white   ">
              <button
                className={`py-4 w-1/2 ${isHalf ? "" : "bg-blue-100"}`}
                onClick={() => setIsHalf(false)}
              >
                row
              </button>
              <button
                className={`py-4 w-1/2 ${!isHalf ? "" : "bg-blue-100"}`}
                onClick={() => setIsHalf(true)}
              >
                col
              </button>
            </div>
            <div className="  flex  h-10/12 items-center justify-center   ">
              <AddButton
                history={history}
                activityId={activityId}
                order={order}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
