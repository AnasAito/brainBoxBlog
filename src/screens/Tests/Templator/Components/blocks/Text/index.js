import React from "react";
import ReactHtmlParser from "react-html-parser";

function Text({ content }) {
  if (!content) {
    return "";
  }
  return <div className="    ">{ReactHtmlParser(content)}</div>;
}

export default Text;
