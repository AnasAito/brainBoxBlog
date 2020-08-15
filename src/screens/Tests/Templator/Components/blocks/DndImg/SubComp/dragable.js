import React from "react";
import { Draggable } from "react-beautiful-dnd";
const Dragable = ({ name, index, data, type = "img" }) => (
  <Draggable key={name} draggableId={name} index={index}>
    {provided => {
      return (
        <div
          className="shadow-2xl rounded-lg bg-white flex items-center  "
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {type === "img" && (
            <div className="">
              <img
                src={`https://res.cloudinary.com/geerd/image/upload/q_auto:eco/${name}`}
                alt="Drag And Drop Card"
              />
            </div>
          )}
          {type === "txt" && (
            <div className=" m-3   ">
              <h5>{data}</h5>
            </div>
          )}
        </div>
      );
    }}
  </Draggable>
);

export default Dragable;
