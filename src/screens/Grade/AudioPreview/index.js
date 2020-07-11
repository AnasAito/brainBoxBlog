import React from "react";
import useAudioControls from "./useAudioControls";
export default function AudioPreview({ src }) {
  const { audioPlayer, playing, path, playAudio, stopAudio } = useAudioControls(
    src
  );
  return (
    <div className="flex flex-col justify-center">
      <div
        className={`rounded-full bg-white h-10 w-10 flex self-center items-center justify-center ${
          src && "hover:bg-blue-100 cursor-pointer"
        } border ${src ? "border-blue-500" : "border-gray-500"} `}
        onClick={
          src
            ? playing
              ? stopAudio
              : playAudio
            : () => {
                return;
              }
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 ${src ? "text-blue-600" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d={path} />
        </svg>
        <audio id="audio_preview" ref={audioPlayer}>
          Your browser does not support the <code>audio</code> element.
        </audio>{" "}
      </div>
      <span className="mt-2 px-2.5 py-0.5 rounded-full text-xs text-center font-medium leading-4 bg-gray-100 text-gray-800">
        Preview
      </span>
    </div>
  );
}
