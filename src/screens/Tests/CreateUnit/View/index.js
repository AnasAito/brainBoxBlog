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
          {data.map((unit) => (
            <Card
              key={unit.id}
              title={unit.name}
              subTitle={`Order: ${unit.order}`}
              onEdit={() =>
                history.push({
                  pathname: `units/edit/${unit.id}`,
                })
              }
              onDelete={() => handleDelete(unit.id)}
              onAdd={() =>
                history.push({
                  pathname: `lessons`,
                  search: `?unitId=${unit.id}`,
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
