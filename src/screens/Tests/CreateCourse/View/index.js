import React from "react";
import Card from "shared/components/Card";
import Pagination from "shared/components/Pagination";
import AddButton from "shared/components/AddButton";
import { useHistory } from "react-router-dom";

export default function ListView({ data, count, handleCreate, handleDelete }) {
  let history = useHistory();
  return (
    <div className="flex flex-col">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="grid grid-cols-4 gap-5">
          {data.map((course) => (
            <Card
              key={course.id}
              title={course.name}
              image={
                course.imgSidebar === null
                  ? "https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/very_big_1/public/feature/images/what_you_need_to_know.jpg?itok=kK9rhbZ7"
                  : `https://res.cloudinary.com/geerd/image/upload/q_auto:eco/${course.imgSidebar.cloudinaryId}.jpg`
              }
              onEdit={() =>
                history.push({
                  pathname: `edit/${course.id}`,
                })
              }
              onDelete={() => handleDelete(course.id)}
              onAdd={() =>
                history.push({
                  pathname: `levels`,
                  search: `?courseId=${course.id}`,
                })
              }
            />
          ))}
          <AddButton handleClick={handleCreate} />
        </div>
        <Pagination pageCount={count} />
      </div>
    </div>
  );
}
