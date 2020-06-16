import React from "react";
import Card from "shared/components/Card";

import AddButton from "shared/components/AddButton";
import { useHistory } from "react-router-dom";

export default function ListView({ data, handleCreate, handleDelete }) {
  let history = useHistory();
  return (
    <div className="flex flex-col">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="grid grid-cols-4 gap-5">
          {data.map((section) => (
            <Card
              key={section.id}
              title={section.name}
              subTitle={`Order: ${section.order}`}
              onEdit={() =>
                history.push({
                  pathname: `sections/edit/${section.id}`,
                })
              }
              onDelete={() => handleDelete(section.id)}
              onAdd={() =>
                history.push({
                  pathname: `activities`,
                  search: `?section=${section.id}`,
                })
              }
            />
          ))}
          <AddButton handleClick={handleCreate} />
        </div>
      </div>
    </div>
  );
}
