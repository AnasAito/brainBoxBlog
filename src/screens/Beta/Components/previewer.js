import React from "react";
import { previewerTemplates } from "../templates/previewer";

export default function Previewer({ option, blocks, maper, activityId }) {
  //console.log(blocks);
  //console.log(maper);
  return <>{previewerTemplates[option](blocks, maper, activityId)}</>;
}
