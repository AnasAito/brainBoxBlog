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
          {data.map((activity) => (
            <Card
              key={activity.id}
              title={`${activity.order} - ${activity.name}`}
              subTitle={`Type: ${activity.type}`}
              image={
                "https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/very_big_1/public/feature/images/what_you_need_to_know.jpg?itok=kK9rhbZ7"
              }
              onEdit={() =>
                history.push({
                  pathname: `activities/edit/${activity.id}`,
                })
              }
              onAdd={() =>
                history.push({
                  pathname: `templator/${activity.id}`,
                })
              }
              onDelete={() => handleDelete(activity.id)}
            />
          ))}
          <AddButton handleClick={handleCreate} />
        </div>
      </div>
    </div>
  );
}
