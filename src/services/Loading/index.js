import React from "react";
import ClipLoader from "react-spinners/PacmanLoader";

export default function Loading() {
  return (
    <div
      className="absolute h-full w-full flex items-center justify-center"
      style={{
        background: `linear-gradient(to top,#2980b9 30%, #1abc9c)`,
      }}
    >
      <ClipLoader size={40} color={"#ecf0f1"} />
    </div>
  );
}
