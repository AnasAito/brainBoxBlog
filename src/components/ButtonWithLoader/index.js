import React from "react";
import ClipLoader from "react-spinners/BounceLoader";
export default function index({ loading, children, ...rest }) {
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <button
        type="button"
        {...rest}
      >
        {children}
        {loading ? (
          <div className="ml-3">
            <ClipLoader size={14} color={"#fff"} className="mb-1" />
          </div>
        ) : (
          <></>
        )}
      </button>
    </span>
  );
}
