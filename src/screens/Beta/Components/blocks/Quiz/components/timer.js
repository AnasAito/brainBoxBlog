import React from "react";

export default function Timer({ initialTime }) {
  const [counter, setCounter] = React.useState(initialTime);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const formatTime = time => {
    if (time) {
      const min = Math.floor(time / 60);
      const sec = Math.floor(time % 60);
      return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
    } else {
      return "00:00";
    }
  };
  return (
    <div
      className=" mt-2 flex h-24 w-24 rounded-lg  shadow-2xl border-4 border-gray-200   border-black  "
      style={{
        background: `linear-gradient(to top,#4083F8 ${100 *
          (1 - counter / initialTime)}%, #FFFFFF )`
      }}
    >
      <div className="self-center m-5  text-center text-black  font-black">
        {formatTime(counter)}
      </div>
    </div>
  );
}
