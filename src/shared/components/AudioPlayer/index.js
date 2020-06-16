import React, { useRef, useEffect, useState } from "react";
import useAudioPlayer from "./useAudioPlayer";
import Bar from "./bar";
import ControlButton from "./button";

export default function Audio({ src, id }) {
  const { curTime, duration, setClickedTime } = useAudioPlayer(id);

  const [playing, setPlaying] = useState(false);
  const [path, setPath] = useState("M4 4l12 6-12 6z");

  const audioPlayer = useRef(null);

  useEffect(() => {
    audioPlayer.current.src = src;
  }, [src]);

  const playAudio = () => {
    setPlaying(true);
    setPath("M5 4h3v12H5V4zm7 0h3v12h-3V4z");

    var promise = audioPlayer.current.play();
    if (promise !== undefined) {
      promise
        .catch((error) => {
          console.log("error");
          // Auto-play was prevented
          // Show a UI element to let the user manually start playback
        })
        .then(() => {
          // Auto-play started
        });
    }
  };

  const stopAudio = () => {
    setPlaying(false);
    setPath("M4 4l12 6-12 6z");
    audioPlayer.current.pause();
  };

  return (
    <div className="player flex  flex-wrap  content-center flex-col p-2 border-b border-gray-100">
      <audio id={id} ref={audioPlayer}>
        Your browser does not support the <code>audio</code> element.
      </audio>

      <div className=" flex self-center w-full  justify-center items-center">
        <ControlButton
          handleClick={playing ? stopAudio : playAudio}
          path={path}
        />
      </div>
      <div className="  w-full mt-2">
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={(time) => setClickedTime(time)}
        />
      </div>
    </div>
  );
}
