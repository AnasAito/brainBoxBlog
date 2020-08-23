import React from "react";
import Card from "shared/components/BlockCard";
import Pagination from "shared/components/Pagination";
import AddButton from "shared/components/AddButton";
import { useHistory } from "react-router-dom";

export default function ListView({ data, count, handleCreate, handleDelete }) {
  let history = useHistory();
  return (
    <div className="flex flex-col">
      <div className="-my-2 py-2  sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="grid grid-cols-3 gap-5">
          {data.map((test) => (
            <Card
              key={test.id}
              payload={test}
              type="text"
              onEdit={() =>
                history.push({
                  pathname: `scrambled/${test.id}`,
                })
              }
              onDelete={() => handleDelete(test.id)}
              onAdd={() =>
                history.push({
                  pathname: `questions`,
                  search: `?quiz=${test.id}&page=0&pageSize=7`,
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
