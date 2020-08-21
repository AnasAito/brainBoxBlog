import React, { useState } from "react";
//import { useQuery } from "services/Client";
//import Loading from "components/Loading";
import View from "./view";

//import Timer from "./components/timer";
function Quiz({ quiz, onAnswer, answers = {} }) {
  const [index, setIndex] = useState(0);
  const [cor, setcor] = useState(false);

  const questions = quiz.questions;
  //console.log(data);
  const question = questions[index];
  const length = questions.length;
  const reset = () => {
    setIndex(0);
    setcor(false);
  };
  const onfinish = () => {
    setcor(true);
  };
  return (
    <View
      question={question}
      setIndex={setIndex}
      index={index}
      length={length}
      setObj={onAnswer}
      obj={answers}
      cor={cor}
      onfinish={onfinish}
      reset={reset}
    />
  );
}
export default Quiz;
