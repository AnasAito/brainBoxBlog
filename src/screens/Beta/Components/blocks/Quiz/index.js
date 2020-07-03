import React, { useState } from "react";
//import { useQuery } from "services/Client";
//import Loading from "components/Loading";
import View from "./view";
import data from "./data";
//import Timer from "./components/timer";
function Quiz({ onAnswer, answers = {} }) {
  const [index, setIndex] = useState(0);
  const [cor, setcor] = useState(false);

  /*const {
    data: { blocksLoading }
  } = useQuery({ event: "blocksLoading" });
  */

  {
    /* if (blocksLoading) {
    return "loading";
  }*/
  }
  const questions = data.questions;
  console.log(data);
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
    <>
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
      {/*  <div className="mt-5 flex justify-center">
        <Timer initialTime={30} />
  </div>*/}
    </>
  );
}
export default Quiz;
