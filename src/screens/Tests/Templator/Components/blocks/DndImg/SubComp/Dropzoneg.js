import React from "react";
import { Droppable } from "react-beautiful-dnd";

import Dragable from "./dragable";

const Dropzoneg = ({ heroes, id, type, cor, resp }) => {
  const isDropDisabled = heroes.length !== 0;
  const color = cor
    ? !resp
      ? "border-red-600 "
      : "border-green-500"
    : "border-gray-200";
  return (
    <>
      <Droppable droppableId={id} isDropDisabled={isDropDisabled}>
        {(provided, snapshot) => {
          return (
            <div className="flex flex-col">
              <div className="text-lg  h-15  font-bold  ">
                {id.toUpperCase()}
              </div>
              <div
                className={` flex justify-center  rounded-lg border-dashed border-4 ${
                  heroes.length == 0 ? "h-40" : ""
                } ${color}  ${snapshot.isDraggingOver ? "bg-red-200" : ""} `}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {heroes.map(({ name, data }, index) => (
                  <Dragable
                    key={name}
                    name={name}
                    index={index}
                    type={type}
                    data={data}
                  />
                ))}
                {provided.placeholder}
              </div>
            </div>
          );
        }}
      </Droppable>
    </>
  );
};

export default Dropzoneg;
