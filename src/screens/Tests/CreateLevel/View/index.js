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
          {data.map((level) => (
            <Card
              key={level.id}
              title={level.name}
              subTitle={`Order: ${level.order}`}
              image={
                level.imgOverview === null
                  ? "https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/very_big_1/public/feature/images/what_you_need_to_know.jpg?itok=kK9rhbZ7"
                  : `https://res.cloudinary.com/geerd/image/upload/q_auto:eco/${level.imgOverview.cloudinaryId}.jpg`
              }
              onEdit={() =>
                history.push({
                  pathname: `levels/edit/${level.id}`,
                })
              }
              onDelete={() => handleDelete(level.id)}
              onAdd={() =>
                history.push({
                  pathname: `units`,
                  search: `?levelId=${level.id}`,
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
