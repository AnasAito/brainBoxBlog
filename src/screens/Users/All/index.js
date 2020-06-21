import React from "react";
import get from "lodash/get";
import Table from "shared/components/Table";
import { useHistory } from "react-router-dom";

import { useQueryPaginated } from "services/Client";
export default function All() {
  let history = useHistory();

  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },

      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Actions",
        Cell: (props) => {
          return (
            <button
              onClick={() => history.push(`/admin/users/all/${props.row.original.id}`)}
              className="text-indigo-600 hover:text-indigo-900"
            >
              Edit
            </button>
          );
        },
      },
    ],
    [history]
  );

  const { data, loading, pageSize } = useQueryPaginated({
    event: "user.get.many",
    variables: {
      withSelect: true,
      where: { type: "student" },
      orderBy: { createdAt: "desc" },
    },
  });
  const userData = get(data, "users.data", []);
  const count = get(data, "users.count", []) / pageSize;

  return (
    <div className="flex flex-col">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <Table
            columns={columns}
            data={userData}
            loading={loading}
            pageCount={count}
          />
        </div>
      </div>
    </div>
  );
}
