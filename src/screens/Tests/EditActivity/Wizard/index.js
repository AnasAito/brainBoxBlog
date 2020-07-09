import React from "react";
import { withRouter } from "react-router-dom";

import { get, findIndex } from "lodash";

import WizardCard from "./components/card";
import DeleteCard from "./components/cardDelete";

const temp = {
  template1: {
    name: "Quiz Only",
    nb: 1,
    path: [{ quiz: "Quiz" }],
  },
  simpleFillBlanks: {
    name: "Fill In Blanks Only",
    nb: 1,
    path: [{ fillBlank: "Fill The Blanks" }],
  },
  simpleScrambledSentences: {
    name: "Scrambled Sentences Only",
    nb: 1,
    path: [{ scrambledSentence: "Scrambled Sentences" }],
  },
  template6: {
    name: "Writing",
    nb: 2,
    path: [{ text: "Text Instructions" }, { image: "Image" }],
  },
  template2: {
    name: "Text + Image + Quiz",
    nb: 2,
    path: [{ text: "Text" }, { image: "Image" }, { quiz: "Quiz" }],
  },
  template3: {
    name: "Text + Upload",
    nb: 2,
    path: [{ text: "Text" }, { image: "Image" }],
  },

  template4: {
    name: "Audio + Image + Quiz",
    nb: 3,
    path: [{ audio: "Audio Sequence" }, { image: "Image" }, { quiz: "quiz" }],
  },
  template5: {
    name: "Text + Record",
    nb: 1,
    path: [{ text: "Text" }],
  },

  simpleSpeech: {
    name: "Fluency",
    nb: 1,
    path: [{ fluencyTool: "Fluency" }],
  },
  simpleDnd: {
    name: "Drag And Drop",
    nb: 1,
    path: [{ dnd: "Drag And Drop" }],
  },
  readingFillBlank: {
    name: "Text + Image + Fill In Blanks",
    nb: 3,
    path: [
      { text: "Article" },
      { image: "Image" },
      { fillBlank: "Fill The Blanks" },
    ],
  },
};

function BlockWizard({ match, history, template, blocks }) {
  // const [addBlock, setAddBlock] = React.useState(false);

  return (
    <div className="grid grid-cols-3 gap-5">
      {get(temp[template], "path", []).map((v, i) => {
        const pth = Object.keys(v)[0];
        if (blocks.map((v) => v.type).includes(pth)) {
          const idx = findIndex(blocks, function (o) {
            return o.type === pth;
          });
          const title = blocks[idx].name;
          const id = blocks[idx].id;

          return (
            <div key={i}>
              <DeleteCard key={i} id={id} title={title} />
              {/* titi */}
            </div>
          );
        } else {
          const name = Object.values(v)[0];
          const customPath = Object.keys(v)[0];
          console.log(customPath);
          return (
            <div key={i}>
              <WizardCard
                handleClick={() =>
                  history.push({
                    pathname: `/admin/blocks/${customPath}`,
                    search: `&attach=${match.params.id}&page=0&pageSize=7`,
                  })
                }
                key={i}
                value={name}
              />
            </div>
          );
        }
      })}
    </div>
  );
}

export default withRouter(BlockWizard);
