import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
export default function index({ loading, children, ...rest }) {
  return (
    <span class="inline-flex rounded-md shadow-sm">
      <button
        type="button"
        {...rest}
      >
        {children}
        {loading ? (
          <div class="mt-1 ml-3  ">
            <ClipLoader size={20} color={"#fff"} />
          </div>
        ) : (
          <></>
        )}
      </button>
    </span>
  );
}
