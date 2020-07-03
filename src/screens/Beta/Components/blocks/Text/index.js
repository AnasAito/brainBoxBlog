import React from "react";
import ReactHtmlParser from "react-html-parser";

function Text({ content }) {
  if (!content) {
    return "";
  }
  return (
    <div className="lg:max-h-10/12 m-auto p-5 rounded-lg shadow-lg">
      <div>{ReactHtmlParser(content)}</div>
    </div>
  );
}

export default Text;
