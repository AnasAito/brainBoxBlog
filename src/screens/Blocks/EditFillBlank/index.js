import React, { useState, useEffect, useRef } from "react";
import get from "lodash/get";

import { useQuery, useMutation } from "services/Client";
import { useParams, useHistory } from "react-router-dom";
import withNotification from "services/Notification";
import SentenceBlock from "./sentenceBlock";
function All({ notification }) {
  const { id } = useParams();
  const history = useHistory();
  // from legacy code
  const [title, setTitle] = useState("");
  const [sentences, setSentences] = useState([]);
  const [answerIndex, setAnswerIndex] = useState([]);
  const { data: FillBlankData } = useQuery({
    event: "fillBlank.get.one",
    variables: { where: { id } },
  });
  useEffect(() => {
    setTitle(get(FillBlankData, "fillBlank.title", ""));
  }, [FillBlankData]);

  const { mutate } = useMutation({
    event: "fillBlank.update",

    update: ({ data }) => {
      // const newData = concatData(updateData, data.createDndElement);
      // return {
      // event: "dnd.element.get.many",
      //variables: {
      // where: { dnd: { id } },
      // withSelect: true,
      //},
      //data: newData,
      //};
      console.log(data);
    },
  });
  useEffect(() => {
    // create sentence list
    const answer = get(FillBlankData, "fillBlank.answers", []);
    const sentence = get(FillBlankData, "fillBlank.sentence", "");
    if (sentence) {
      let c = 0;
      let all = [];
      const newlist = sentence
        .split("/n")
        .filter((sentence) => !(sentence === ""))
        .map((sentence) => {
          let fors = [];
          const a = sentence
            .split(" ")
            .filter((sentence) => !(sentence === ""))
            .map((word, index) => {
              if (word === "<") {
                c = c + 1;
                fors.push(index);
                //console.log(index);
                return answer[c - 1];
              } else {
                return word;
              }
            })
            .join(" ");
          all.push(fors);
          return a;
        });

      setAnswerIndex(all);
      setSentences(newlist);
    }
  }, [FillBlankData]);
  const handleClick = (sentenceIndex, wordIndex, state) => {
    if (state) {
      let a = answerIndex[sentenceIndex];

      let b = [...answerIndex];
      b[sentenceIndex] = a.filter((value) => !(value == wordIndex));
      setAnswerIndex(b);
    } else {
      let a = answerIndex[sentenceIndex];
      a.push(wordIndex);

      let b = [...answerIndex];
      b[sentenceIndex] = a;
      setAnswerIndex(b);
    }
  };
  const transformer = async () => {
    let ans = [];
    console.log(sentences);
    let a = sentences.map((sentence, index) => {
      const allIndex = answerIndex[index];

      const newone = sentence
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")

        .map((word, index) => {
          if (allIndex.includes(index)) {
            ans.push(word);
            return "<";
          } else {
            return word;
          }
        });
      return newone.join(" ");
    });
    // sentence ready for mutation
    console.log("/n " + a.join(" /n "));
    console.log(ans);

    await mutate({
      variables: {
        where: { id: id },
        data: {
          sentence: "/n " + a.join(" /n "),
          answers: ans,
          title: title,
        },
      },
    });
    notification.success("Block updated successfuly !");
  };

  // end legacy code

  return (
    <div>
      <h3 className="text-lg leading-6 font-medium mb-2 text-gray-900">
        Edit fill in blanks block
      </h3>
      {/* added  */}
      <div className=" bg-white flex w pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
        <div className="flex-1 flex  ">
          <div className="w-5/12 ">
            <div className="max-w-lg  flex-col rounded-md shadow-sm sm:max-w-xs">
              <div class="mt-1 flex rounded-md shadow-sm">
                <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  Title
                </span>
                <input
                  id={title}
                  autoComplete="off"
                  className="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  onChange={(event) => setTitle(event.target.value)}
                  value={title}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 sm:space-y-0 sm:space-x-3 sm:flex-row ">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:border-gray-700 focus:shadow-outline-indigo active:bg-gray-700 transition ease-in-out duration-150"
              onClick={() => {
                setSentences([...sentences, ..." "]);
                let a = answerIndex;
                a.push([]);
                setAnswerIndex(a);
              }}
            >
              Add sentence
            </button>
          </span>
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              onClick={transformer}
            >
              Save change
            </button>
          </span>
        </div>
      </div>
      {/* added  */}

      <div className="flex   flex-col-reverse  m-10">
        {sentences.map((sentence, index) => (
          <div className="" key={index}>
            <SentenceBlock
              id={index}
              sentence={sentence}
              answerIndex={answerIndex[index]}
              handleClick={handleClick}
              setSentences={setSentences}
              sentences={sentences}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default withNotification(All);
