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
