import React from "react";
import { previewerTemplates } from "../templates/previewer";
export default function Previewer({ option, blocks, maper }) {
  return <>{previewerTemplates[option](blocks, maper)}</>;
}
