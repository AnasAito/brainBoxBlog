import React, { useState, useEffect } from "react";
import get from "lodash/get";
import shuffle from "lodash/shuffle";
import SentenceBlock from "./view";
import BlockWrapper from "components/blockWrapper";
export default function Scramble({ scrSentences, answers, onAnswer }) {
  const [cor, setCor] = useState(false);
  const [shuffledSentences, setShuffledSentences] = useState([]);
  const [correctSentences, setCorrectSentences] = useState([]);

  const chipClick = (word, index) => {
    const newSentence = get(answers, `${[index]}`, "").concat(`${word} `);
    onAnswer({ index, sentence: newSentence });
  };
  const redoClick = index => {
    onAnswer({ index, sentence: "" });
  };

  const resetClick = () => {
    onAnswer({ index: -1, sentence: "" });
  };

  useEffect(() => {
    setShuffledSentences(scrSentences.map(s => shuffle(s.trim().split(" "))));
    setCorrectSentences(scrSentences.map(s => s.trim().split(" ")));
  }, [scrSentences]);

  return (
    <BlockWrapper
      onfinish={() => setCor(true)}
      reset={() => {
        resetClick();
        setCor(false);
      }}
      blockName="Scrambled words"
    >
      <div className="m-4">
        {shuffledSentences.map((element, index) => {
          return (
            <SentenceBlock
              key={index}
              Sindex={index}
              scrSentence={element}
              sentence={
                answers[index] === "" || !answers[index]
                  ? []
                  : answers[index].trim().split(" ")
              }
              correctSentence={correctSentences[index]}
              chipClick={chipClick}
              redoClick={redoClick}
              cor={cor}
            />
          );
        })}
      </div>
    </BlockWrapper>
  );
}
