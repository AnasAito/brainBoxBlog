import { useState, useEffect, useRef } from "react";

function useAudioControls(src) {
  const [playing, setPlaying] = useState(false);
  const [path, setPath] = useState("M4 4l12 6-12 6z");

  const audioPlayer = useRef(null);

  useEffect(() => {
    audioPlayer.current.src = src;
    const audio = audioPlayer.current;
    const setAudioTime = () => {
      if(audio.ended){
        stopAudio()
      }
    };
    audio.addEventListener("timeupdate", setAudioTime);
    return () => {
      console.log("unmouting audio");
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  }, [src]);


  const playAudio = () => {
    setPlaying(true);
    setPath("M5 4h3v12H5V4zm7 0h3v12h-3V4z");

    var promise = audioPlayer.current.play();
    if (promise !== undefined) {
      promise
        .catch((error) => {
          console.log(error.message);
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
  return { audioPlayer, playing, path, playAudio, stopAudio };
}

export default useAudioControls;
