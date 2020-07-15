import React from "react";
import Card from "./Card";
import Upload from "./Upload";
import Pagination from "shared/components/Pagination";
// import AddButton from "shared/components/AddButton";
// import { useHistory } from "react-router-dom";

export default function ListView({
  data,
  count,
  handleCreate,
  handleDelete,
  loading,
}) {
  // let history = useHistory();
  return (
    <div className="flex flex-col">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="grid grid-cols-4 gap-5">
          {data.map((test) => (
            <Card
              key={test.id}
              payload={test}
              onDelete={() => handleDelete(test.id)}
            />
          ))}
          <Upload handleSave={handleCreate} loading={loading} />
        </div>
        <Pagination pageCount={count} />
      </div>
    </div>
  );
}
