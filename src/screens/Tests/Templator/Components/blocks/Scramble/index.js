import React, { useState, useEffect } from "react";
import SentenceBlock from "./sentenceBloc";
import BlockWrapper from "components/blockWrapper";
export default function Scramble({
  scrSentences = ["me test comp this", "hello human how are you "],
  answers = ["test me this comp", "hello human how are you "]
}) {
  const [state, setState] = useState(scrSentences.map(sentence => ""));
  const [cor, setCor] = useState(false);
  const shipClick = (word, index) => {
    let sentences = [...state];

    sentences[index] = sentences[index].concat(`${word} `);
    console.log(sentences);
    setState(sentences);
  };
  const redoClick = index => {
    let sentences = [...state];

    sentences[index] = "";
    console.log(sentences);
    setState(sentences);
  };

  return (
    <BlockWrapper
      onfinish={() => setCor(true)}
      reset={() => {
        setState(scrSentences.map(sentence => ""));
        setCor(false);
      }}
      blockName="Scrambled words"
    >
      <div className="m-4">
        {scrSentences.map((element, index) => {
          return (
            <SentenceBlock
              key={index}
              Sindex={index}
              scrSentence={element.trim().split(" ")}
              sentence={
                state[index] === "" ? [] : state[index].trim().split(" ")
              }
              answer={answers[index].trim().split(" ")}
              shipClick={shipClick}
              redoClick={redoClick}
              cor={cor}
            />
          );
        })}
      </div>
    </BlockWrapper>
  );
}
