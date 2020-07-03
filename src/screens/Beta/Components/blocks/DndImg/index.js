import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { shuffle } from "./SubComp/tools";
import get from "lodash/get";
import Dropzone from "./SubComp/Dropzone";
import Dropzoneg from "./SubComp/Dropzoneg";
import Loading from "components/Loading";
import { transformer } from "./helpers/transformer";
import Header from "./header";
import BlockWrapper from "components/blockWrapper";
const DndImg = ({
  type,
  data: DndData
  //onAnswer,
  // answers
}) => {
  const [state, setState] = useState({ loading: true });
  const [cor, setCor] = useState(false);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const dndElements = get(DndData, "dndElements", []);

    const wordList = dndElements
      .filter(element => element.side === 0)
      .map(word => word.label);
    const imageList = dndElements
      .filter(element => element.side === 1)
      .filter(element => !(Object.values(answers).indexOf(element.id) > -1))
      .map(element => {
        return {
          name: element.image.cloudinaryId,
          data: element.image.path
        };
      });
    const ImagesGallery = {
      gallery: shuffle(imageList)
    };
    setState({
      ...{ wordlist: wordList },
      ...transformer(answers, wordList, dndElements),
      ...ImagesGallery,
      ...{ resp: {} },
      ...{ cor: false },
      loading: false
    });
  }, [DndData, answers]);

  const onDragEnd = ({ source, destination }) => {
    // console.log(source);
    //console.log(destination);
    if (!destination) {
      return;
    }
    const srcListClone = [...state[source.droppableId]];

    const destListClone =
      source.droppableId === destination.droppableId
        ? srcListClone
        : [...state[destination.droppableId]];
    // use Array.splice method to remove the Dragged element from its current index in the source list and then add it to the destination list at an index which will reflect the position where it was Dropped .

    // remove element from source list
    const [movedElement] = srcListClone.splice(source.index, 1);
    //console.log(srcListClone);

    // add the dragabale element to destination list
    destListClone.splice(destination.index, 0, movedElement);
    if (
      !(source.droppableId === "gallery") &&
      !(destination.droppableId === "gallery")
    ) {
      const wordId = DndData.dndElements
        .filter(element => element.side === 0)
        .filter(element => element.label === source.droppableId)[0].id;

      console.log(wordId);
      let newans = {};
      for (const [question, answer] of Object.entries(answers)) {
        if (!(question === wordId)) {
          newans = { ...newans, ...{ [question]: answer } };
        }
      }
      console.log("deleted");
      console.log(newans);
      const wordId_ = DndData.dndElements
        .filter(element => element.side == 0)
        .filter(element => element.label === destination.droppableId)[0].id;

      // console.log(wordId_);

      // name and path of image => dndelement id
      // console.log(destListClone);
      const imageId = DndData.dndElements
        .filter(element => element.side == 1)
        .filter(
          element => element.image.cloudinaryId === destListClone[0].name
        )[0].id;

      // console.log(imageId);

      setAnswers({ ...newans, ...{ [wordId_]: imageId } });
    }
    if (source.droppableId === "gallery") {
      // word => dndelements id
      console.log(DndData.dndElements);
      let wordId = DndData.dndElements
        .filter(element => element.side === 0)
        .filter(element => element.label === destination.droppableId);

      console.log(wordId);
      wordId = get(wordId, "[0].id", "");
      const imageId = DndData.dndElements
        .filter(element => element.side === 1)
        .filter(
          element => element.image.cloudinaryId === destListClone[0].name
        )[0].id;
      setAnswers({ ...answers, ...{ [wordId]: imageId } });
    }
    if (destination.droppableId === "gallery") {
      console.log("back to gallery");
      let wordId = DndData.dndElements
        .filter(element => element.side === 0)
        .filter(element => element.label === source.droppableId);
      wordId = get(wordId, "[0].id", "");

      let newans = {};
      for (const [question, answer] of Object.entries(answers)) {
        if (!(question === wordId)) {
          newans = { ...newans, ...{ [question]: answer } };
        }
      }
      setAnswers(newans);
    }
    //console.log(destListClone);

    setState({
      ...state,
      ...{
        [source.droppableId]: srcListClone,
        ...(source.droppableId === destination.droppableId
          ? {}
          : {
              [destination.droppableId]: destListClone
            })
      }
    });
  };

  // we have a change in the state so the render function keep calling back

  const { gallery, wordlist } = state;
  const testAnswers = get(DndData, "answers", "");
  if (!DndData || state.loading) {
    return <Loading type="dnd" />;
  }
  return (
    !state.loading && (
      <BlockWrapper
        reset={() => {
          console.log("reset");
        }}
        onfinish={() => setCor(true)}
        blockName="Drag and drop"
      >
        <DragDropContext onDragEnd={onDragEnd}>
          <div className=" flex flex-col ">
            <div className=" grid grid-flow-row grid-cols-2  md:grid-cols-3 gap-5  lg:grid-cols-4">
              {wordlist.map((word, index) => {
                const rightImageId =
                  testAnswers === ""
                    ? ""
                    : Object.entries(testAnswers)[index][1];
                const wordId =
                  testAnswers === ""
                    ? ""
                    : Object.entries(testAnswers)[index][0];
                const userImageId = answers[wordId];
                const resp = userImageId === rightImageId;
                return (
                  <Dropzoneg
                    cor={cor}
                    key={index}
                    id={word}
                    resp={resp}
                    heroes={state[word]}
                    type={type}
                  />
                );
              })}
            </div>
            <div className="mt-3 ">
              <Dropzone
                id="gallery"
                heroes={gallery}
                isDropDisabled={false}
                type={type}
              />
            </div>
          </div>
        </DragDropContext>
      </BlockWrapper>
    )
  );
};

export default DndImg;
