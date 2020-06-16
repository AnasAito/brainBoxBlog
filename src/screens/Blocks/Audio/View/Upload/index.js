import React, { useRef, useState } from "react";
// import Item from "./item";
import Button from "components/ButtonWithLoader";
import AudioPlayer from "shared/components/AudioPlayer";

export default function View({ handleSave, loading }) {
  // console.log(bar);
  const [file, setFile] = useState(null);
  const fileInput = useRef(null);
  console.log(file);
  return (
    <div className="max-w-lg flex  justify-center px-6 pt-5 pb-6 border-4 border-gray-300 border-dashed rounded-md">
      {file ? (
        <div className="flex flex-col w-full">
          <AudioPlayer src={URL.createObjectURL(file)} id="preview" />

          <div className="self-center border-t border-gray-100 pt-3">
            <Button
              onClick={() => handleSave(file)}
              loading={loading}
              className="inline-flex mr-1 items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-indigo active:bg-blue-700 transition ease-in-out duration-150"
            >
              Save
            </Button>
            <button
              onClick={() => setFile(null)}
              className="inline-flex mr-1 items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-red-700 transition ease-in-out duration-150"
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center w-full">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="mt-1 text-sm text-gray-600">
            <button
              type="button"
              onClick={() => fileInput.current.click()}
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
            >
              Choose Audio File
            </button>
            <input
              type="file"
              accept="audio/*"
              onChange={(e) => setFile(e.target.files[0])}
              hidden
              ref={fileInput}
            />
          </p>
          <p className="mt-1 text-xs text-gray-500">MP3, M4A, up to 10MB</p>
        </div>
      )}
    </div>
  );
}
