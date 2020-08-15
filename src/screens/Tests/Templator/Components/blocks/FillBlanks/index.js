import React, { useState } from "react";
import Loading from "components/Loading";
import Suggest from "components/Suggest";
import BlockWrapepr from "components/blockWrapper";
export default function FillBlanks({
  data,
  onAnswer,
  answers: initialAnswers
}) {
  const [corr, setcorr] = useState(false);

  if (!data) {
    return <Loading type="fillBlank" />;
  }
  const { sentence, answers } = data;
  let c = 0;
  //return <Loading type="fillBlank" />;

  return (
    <BlockWrapepr
      reset={() => {
        onAnswer({});
        setcorr(false);
        c = 0;
      }}
      onfinish={() => setcorr(true)}
      blockName=""
    >
      <div className="text-lg antialiased font-bold mb-3 ">
        Fill in the gaps with the following :
      </div>

      <div className="flex flex-row flex-wrap ">
        {answers
          .filter((v, i, a) => a.indexOf(v) === i)
          .map((suggestion, index) => {
            let used =
              Object.values(initialAnswers).includes(suggestion) === true;

            //console.log(used)
            return (
              <div
                className={` rounded-full py-2 px-4 m-2 ${
                  used ? "bg-blue-500 text-white" : "bg-blue-200 "
                }`}
                key={index}
              >
                {suggestion}
              </div>
            );
          })}
      </div>
      <div className="border-t-2 mt-3 w-1/2 ml-1/4  mr-1/4  " />
      <div className=" flex flex-row flex-wrap  p-3 ">
        {!corr ? (
          <>
            {sentence.split(" ").map((word, index) => {
              if (word === "/n") {
                return <div className="ml-full" key={index} />;
              }
              if (word !== "<") {
                return (
                  <>
                    {" "}
                    <span className="text-lg ">{word} &thinsp;</span>{" "}
                  </>
                );
              } else {
                // c = c + 1;
                const result = answers.filter(
                  sug => sug === initialAnswers[index]
                );
                let show =
                  result.length === 0 ? (
                    <Suggest
                      wordsList={answers.filter(
                        (v, i, a) => a.indexOf(v) === i
                      )}
                      id={index}
                      setResponse={onAnswer}
                      response={initialAnswers}
                    />
                  ) : (
                    <span
                      onClick={() => {
                        const a = initialAnswers;
                        delete a[index];
                        onAnswer(a);
                      }}
                      className="text-lg text-blue-500 cursor-pointer "
                    >
                      {initialAnswers[index]} &thinsp;
                    </span>
                  );
                return show;
              }
            })}
          </>
        ) : (
          <>
            {sentence.split(" ").map((word, index) => {
              if (word === "/n") {
                return <div className=" ml-full" key={index} />;
              }
              if (word !== "<") {
                return (
                  <>
                    <span className="text-lg" key={index}>
                      {word} &thinsp;
                    </span>{" "}
                  </>
                );
              } else {
                const istrue = answers[c] === initialAnswers[index];
                const answer = answers[c];
                const myAnswer = initialAnswers[index];
                console.log(istrue);
                c = c + 1;
                return (
                  <>
                    {
                      <div className="flex flex-row">
                        <span
                          className={`text-lg pr-1 ${
                            !istrue
                              ? "text-red-600 line-through"
                              : "text-green-500"
                          } `}
                        >
                          {myAnswer}
                        </span>
                        {!istrue ? (
                          <span className="text-lg font-bold ">
                            {answer} &thinsp;
                          </span>
                        ) : (
                          <></>
                        )}
                      </div>
                    }
                  </>
                );
              }
            })}
          </>
        )}
      </div>
    </BlockWrapepr>
  );
}
