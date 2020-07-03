import React from "react";
import AddButton from "../addButoon";
import Quiz from "../blocks/Quiz";
export default function View({ attach, setAttach }) {
  return (
    <div
      class={` border-gray-200 rounded-lg  ${
        attach ? "" : "h-96 border-2 border-dashed"
      } `}
    >
      <div className=" h-full w-full flex justify-center  hover:bg-gray-100 ">
        {!attach ? <AddButton setAttach={setAttach} /> : <Quiz />}
      </div>
    </div>
  );
}
