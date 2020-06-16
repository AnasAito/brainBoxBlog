import React from "react";
import "progressive-image.js/dist/progressive-image.css"
import "progressive-image.js/dist/progressive-image.js"

// core components
function ImageBlock({ src }) {
  if (!src) {
    return "";
  }
  return (
    <div className="shadow-2xl w-full h-auto">
      <a
        href={`https://res.cloudinary.com/geerd/image/upload/q_auto:eco/${src}.jpg`}
        className="progressive replace"
      >
        <img
          src={`https://res.cloudinary.com/geerd/image/upload/w_64/${src}.jpg`}
          className="preview"
          alt="block"
        />
      </a>
    </div>
  );
}

export default ImageBlock;
