import React from "react";
// @material-ui/core components
// core components
import ProgressiveImage from "react-progressive-image";

//src={`https://res.cloudinary.com/geerd/image/upload/q_auto:eco/${src}.jpg`}

//width="100%"

//alt="src"
function ImageBlock({ src }) {
  if (!src) return "";

  const placeholder = (
    <div className="shadow-2xl p-1">
      <img
        className="opacity-25"
        src={`https://res.cloudinary.com/geerd/image/upload/w_64/${src}.jpg`}
        alt="an image"
        width="100%"
      />
    </div>
  );

  return (
    <ProgressiveImage
      src={`https://res.cloudinary.com/geerd/image/upload/q_auto/${src}.jpg`}
      placeholder=""
    >
      {(src, loading) =>
        loading ? (
          placeholder
        ) : (
          <div className="shadow-2xl p-1">
            <img src={src} width="100%" alt="an image" />
          </div>
        )
      }
    </ProgressiveImage>
  );
}

export default ImageBlock;
