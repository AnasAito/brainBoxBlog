import React from "react";
import { Droppable } from "react-beautiful-dnd";

import Dragable from "./dragable";

const Dropzone = ({ isDropDisabled, heroes, id, type, full }) => {
  return (
    <div className="">
      <div className="  text-lg  antialiased font-bold  ">
        {id.toUpperCase()}
      </div>
      <Droppable
        droppableId={id}
        direction="horizontal"
        isDropDisabled={isDropDisabled}
      >
        {(provided, snapshot) => {
          return (
            <div
              className={`h-40 grid    grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 flex justify-center     ${
                snapshot.isDraggingOver ? "bg-red-200" : ""
              }`}
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
          );
        }}
      </Droppable>
    </div>
  );
};

export default Dropzone;
