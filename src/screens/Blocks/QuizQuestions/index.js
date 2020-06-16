import React, { useEffect, useReducer } from "react";
import { useQuery, useMutation } from "services/Client";
import get from "lodash/get";
import { useParams } from "react-router-dom";
import removeData from "shared/helpers/removeData";
import concatData from "shared/helpers/concatData";
import useKeyPress from "./helpers/useKeyPress";
import View from "./view";

function reducer(state, action) {
  switch (action.type) {
    case "navigate":
      return {
        ...state,
        index: state.index + action.payload.direction,
      };
    case "reset-navigate":
      return {
        ...state,
        index: 0,
      };
    case "loading":
      return {
        ...state,
        loading: !state.loading,
      };
    case "go-to-page":
      return {
        ...state,
        index: action.payload.index,
      };
    default:
      return state;
  }
}

function Quiz() {
  const [state, dispatch] = useReducer(reducer, {
    index: 0,
    loading: false,
  });
  const { id } = useParams();
  const leftPress = useKeyPress("ArrowLeft");
  const rightPress = useKeyPress("ArrowRight");
  useEffect(() => {
    if (leftPress) {
      dispatch({ type: "navigate", payload: { direction: -1 } });
    }
  }, [leftPress]);

  useEffect(() => {
    if (rightPress) {
      dispatch({ type: "navigate", payload: { direction: 1 } });
    }
  }, [rightPress]);

  const { data: quizData } = useQuery({
    event: "quiz.get.one",
    variables: {
      where: { id },
    },
  });

  const title = get(quizData, "quiz.title");
  console.log(title);

  const { data } = useQuery({
    event: "question.get.many",
    variables: {
      where: { quiz: { id } },
      withSelect: true,
      orderBy: { order: "asc" },
    },
  });

  const questions = get(data, "questions.data", []);

  // const enterPress = useKeyPress("Enter");

  const question = get(questions, `${[state.index]}`, {});
  const length = questions.length;

  const { data: questionOptionData } = useQuery({
    event: "questionOption.get.many",
    variables: {
      where: { question: { id: get(question, "id") } },
      withSelect: true,
      orderBy: { order: "asc" },
    },
    skip: !get(question, "id"),
  });

  const options = get(questionOptionData, "questionOptions.data", []);
  const { mutate: updateQuiz } = useMutation({ event: "quiz.update" });

  const { mutate: createQuestion } = useMutation({
    event: "question.create",
    update: ({ data: newQuestionOptionData }) => {
      const newData1 = concatData(data, newQuestionOptionData.createQuestion);
      return {
        event: "question.get.many",
        variables: {
          where: { quiz: { id } },
          withSelect: true,
          orderBy: { order: "asc" },
        },
        data: newData1,
      };
    },
  });
  const { mutate: createQuestionOption } = useMutation({
    event: "questionOption.create",
    update: ({ data: newQuestionOptionData }) => {
      const newData1 = concatData(
        questionOptionData,
        newQuestionOptionData.createQuestionOption
      );
      return {
        event: "questionOption.get.many",
        variables: {
          where: { question: { id: question.id } },
          withSelect: true,
          orderBy: { order: "asc" },
        },
        data: newData1,
      };
    },
  });
  const { mutate: updateQuestion } = useMutation({ event: "question.update" });
  const { mutate: updateQuestionOption } = useMutation({
    event: "questionOption.update",
  });
  const { mutate: deleteQuestion } = useMutation({ event: "question.delete" });
  const { mutate: deleteQuestionOption } = useMutation({
    event: "questionOption.delete",
    update: ({ data: newData }) => {
      const newData1 = removeData(
        questionOptionData,
        newData.deleteQuestionOption
      );
      return {
        event: "questionOption.get.many",
        variables: {
          where: { question: { id: question.id } },
          withSelect: true,
          orderBy: { order: "asc" },
        },
        data: newData1,
      };
    },
  });

  const handleUpdateQuiz = (mutate) => async (data) => {
    const result = await mutate({
      variables: { where: { id }, data },
    });
    console.log(result);
  };

  const handleUpdateQuestion = (mutate) => async (id, data) => {
    const result = await mutate({
      variables: { where: { id }, data },
    });
    console.log(result);
  };

  const handleUpdateQuestionOption = (mutate) => async (id, data) => {
    const result = await mutate({
      variables: { where: { id }, data },
    });
    console.log(result);
  };

  const handleCreateQuestion = (mutate) => async () => {
    const result = await mutate({
      variables: {
        data: {
          label: "",
          order: (questions.length + 1).toString(),
          quiz: { id },
        },
      },
    });
    if (get(result, "data.createQuestion.id")) {
      dispatch({ type: "go-to-page", payload: { index: length } });
    }
  };

  const handleCreateQuestionOption = (mutate) => async () => {
    const result = await mutate({
      variables: {
        data: {
          label: "",
          order: (options.length + 1).toString(),
          question: { id: question.id },
        },
      },
    });
    console.log(result);
  };

  const handleDeleteQuestion = (mutate) => async (id) => {
    const result = await mutate({
      variables: { where: { id } },
    });
    console.log(result);
  };

  const handleDeleteQuestionOption = (mutate) => async (id) => {
    const result = await mutate({
      variables: { where: { id } },
    });
    console.log(result);
  };

  const { mutate: createImage } = useMutation({ event: "image.create" });

  const handleAddImage = (mutate) => async (file) => {
    dispatch({ type: "loading" });
    console.log(file.name);
    const result = await mutate({
      variables: {
        file,
        data: { name: file.name },
      },
    });
    const imageId = get(result, "data.createImage.id");
    if (imageId) {
      handleUpdateQuestion(updateQuestion)(question.id, {
        image: { id: imageId },
      });
    }
    // setFiles([]);
    dispatch({ type: "loading" });
  };
  console.log(question);
  return (
    <>
      <View
        data={{ question, title, options, length, ...state }}
        handler={dispatch}
        mutations={{
          handleUpdateQuestion: handleUpdateQuestion(updateQuestion),
          handleUpdateQuestionOption: handleUpdateQuestionOption(
            updateQuestionOption
          ),
          handleCreateQuestion: handleCreateQuestion(createQuestion),
          handleCreateQuestionOption: handleCreateQuestionOption(
            createQuestionOption
          ),
          handleDeleteQuestion: handleDeleteQuestion(deleteQuestion),
          handleDeleteQuestionOption: handleDeleteQuestionOption(
            deleteQuestionOption
          ),
          handleAddImage: handleAddImage(createImage),
          handleUpdateQuiz: handleUpdateQuiz(updateQuiz),
        }}
      />
    </>
  );
}
export default Quiz;
