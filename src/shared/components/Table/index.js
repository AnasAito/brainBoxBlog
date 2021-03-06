import React, { useEffect, useState } from "react";
import { useTable, usePagination } from "react-table";
import { useHistory, useLocation } from "react-router-dom";

import withStore from "services/Store";

function Table({ columns, data, pageCount: controlledPageCount, setters }) {
  const [inputNames, setInputNames] = useState([]);
  // Use the state and functions returned from useTable to build your UI
  function useQueryParams() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQueryParams();
  const pageIndex1 = parseInt(query.get("page")) || 0;

  const node = React.useRef();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    gotoPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      manualPagination: true, // Tell the usePagination
      initialState: { pageIndex: pageIndex1 }, // Pass our hoisted table state
      pageCount: Math.ceil(controlledPageCount),
    },
    usePagination
  );
  let history = useHistory();

  // Render the UI for your table
  useEffect(() => {
    history.push({
      search: `?page=${pageIndex}&pageSize=${pageSize}`,
    });
  }, [pageIndex, history, pageSize]);

  React.useEffect(() => {
    // add when mounted
    const handleClick = (e) => {
      if (!node.current.contains(e.target)) {
        setInputNames([]);
        Object.values(setters).map((f) => f("%%"));
        return;
      }
    };
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  return (
    <div ref={node}>
      <table className="min-w-full" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  {...column.getHeaderProps()}
                  onClick={() => {
                    setInputNames((inputNames) => [
                      ...inputNames,
                      column.getHeaderProps().key,
                    ]);
                    gotoPage(0);
                  }}
                >
                  {inputNames.includes(column.getHeaderProps().key) ? (
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <input
                        id={column.getHeaderProps().key}
                        class="form-input block w-full sm:text-sm sm:leading-5"
                        placeholder={column.render("Header")}
                        onChange={(e) => {
                          setters[column.getHeaderProps().key](
                            `%${e.target.value}%`
                          );
                          //console.log(column.getHeaderProps().key);
                          // if (e.target.value === "") {
                          //   // setInputName(false);
                          //   let temp = inputNames.filter(
                          //     (inputName) =>
                          //       !(inputName === column.getHeaderProps().key)
                          //   );
                          //   setInputNames(temp);
                          // }
                        }}
                      />
                    </div>
                  ) : (
                    <p> {column.render("Header")}</p>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white" {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      className="px-6 py-4 whitespace-no-wrap text-sm border-b border-gray-200"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="hidden sm:block">
          <p className="text-sm leading-5 text-gray-700">
            Showing
            <span className="font-medium"> {pageIndex * pageSize + 1} </span>
            to
            <span className="font-medium">
              {" "}
              {pageSize * pageIndex + pageSize}{" "}
            </span>
            of
            <span className="font-medium">
              {" "}
              {controlledPageCount * pageSize}{" "}
            </span>
            results
          </p>
        </div>

        <div>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(parseInt(e.target.value))}
            aria-label="Selected tab"
            className="form-select block w-full"
          >
            <option value={5}>5 rows</option>
            <option value={10}>10 rows</option>
            <option value={20}>20 rows</option>
            <option value={50}>50 rows</option>
          </select>
        </div>

        <div className="flex justify-between sm:justify-end">
          <button
            onClick={() => previousPage()}
            className={`relative inline-flex ${
              !canPreviousPage && "cursor-not-allowed"
            } items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white ${
              canPreviousPage && "hover:text-gray-500"
            } focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}
          >
            Previous
          </button>
          <button
            onClick={() => nextPage()}
            className={`ml-3 relative inline-flex ${
              !canNextPage && "cursor-not-allowed"
            } disabled:cursor-not-allowed items-center px-4 py-2 disabled:cursor-pointer border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white ${
              canNextPage && "hover:text-gray-500"
            } focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default withStore(Table);
