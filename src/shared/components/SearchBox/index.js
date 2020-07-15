import React, { useState, useEffect, useRef } from "react";
import { useQuery } from "services/Client";
import { useHistory, useLocation } from "react-router-dom";

import withStore from "services/Store";

function useOutsideAlerter(ref, handler) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}
function SearchBar({ store }) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  useOutsideAlerter(inputRef, () => setIsFocused(false));

  const {
    data: { searchLike },
  } = useQuery({ event: "searchLike" });
  function useQueryParams() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQueryParams();
  const page = query.get("page");
  const pageSize = query.get("pageSize");
  let history = useHistory();

  useEffect(() => {
    if (isFocused) {
      history.push({
        search: "?page=0&pageSize=7",
      });
    }
  }, [isFocused, history]);

  console.log(page, pageSize);

  if (page && pageSize) {
    return (
      <div className="flex flex-row">
        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
          </div>
          <input
            onFocus={() => setIsFocused(true)}
            ref={inputRef}
            id="search_field"
            className="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
            placeholder="Search"
            value={searchLike}
            onChange={(e) => store.set("searchLike", e.target.value)}
            type="search"
          />
        </div>
      </div>
    );
  } else {
    return "";
  }
}

export default withStore(SearchBar);
