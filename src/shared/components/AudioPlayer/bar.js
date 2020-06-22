import React from "react";

export default function Bar(props) {
  const { duration, curTime, onTimeUpdate } = props;

  const curPercentage = (curTime / duration) * 100;

  function formatTime(time) {
    if (time) {
      const min = Math.floor(time / 60);
      const sec = Math.floor(time % 60);
      return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
    } else {
      return "00:00";
    }
  }

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector(".bar__progress");
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e) {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  return (
    <div className=" flex flex-row    ">
      <span className="mr-4">{formatTime(curTime)}</span>
      <div
        className="bar__progress mt-2   flex-1 h-2 rounded-lg flex items-center "
        style={{
          background: `linear-gradient(to right,#4383f0 ${curPercentage}%, #c3cee3 0)`
        }}
        onMouseDown={e => handleTimeDrag(e)}
      >
        <span
          className="relative   cursor-pointer h-4 w-4 border-white  rounded-lg  bg-blue-500 "
          style={{ left: `${curPercentage - 1}%` }}
        />
      </div>
      <span className="ml-4">{formatTime(duration)}</span>
    </div>
  );
}
