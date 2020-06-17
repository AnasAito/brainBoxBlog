import React, { useRef } from "react";
import Item from "./item";
export default function Upload({ handleFile, file, accept, description }) {
  const fileInput = useRef(null);
  return (
    <div className="text-center w-full">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 48 48"
      >
        <path
          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p className="mt-1 text-sm text-gray-600">
        <button
          type="button"
          onClick={() => fileInput.current.click()}
          className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
        >
          Choose a file
        </button>
        <input
          accept={accept}
          type="file"
          onChange={(e) => handleFile(e.target.files[0])}
          hidden
          ref={fileInput}
        />
      </p>
      <p className="mt-1 text-xs text-gray-500">{description}</p>
      <div>{file && <Item name={file.name} />}</div>
      {/* {files.length > 0 && (
          <span className="inline-flex rounded-md shadow-sm mt-2">
            <Button loading={loading} handleClick={handleUpload} />
          </span>
        )} */}
    </div>
  );
}
