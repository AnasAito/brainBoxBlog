import React from "react";
import FillBlank from "./fillBlank";
import Quiz from "./quiz";
import Dnd from "./dnd";
import Navigator from "./navigator";
const parser = {
  fillBlank: <FillBlank />,
  quiz: <Quiz />,
  dnd: <Dnd />,
  navigator: <Navigator />,
};
export default function Index({ type }) {
  return parser[type];
}
