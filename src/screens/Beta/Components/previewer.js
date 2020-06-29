import React from "react";
import { previewerTemplates } from "../templates/previewer";
export default function Previewer({ option }) {
  return <>{previewerTemplates[option]}</>;
}
