import gql from "graphql-tag";

export const QUESTIONOPTION_CREATE = gql`
  mutation createQuestionOption($data: QuestionOptionWhereInput) {
    createQuestionOption(data: $data) {
      id
      label
      order
      hasMath
      rightAnswer
    }
  }
`;

export const QUESTIONOPTION_UPDATE = gql`
  mutation updateQuestionOption(
    $where: QuestionOptionWhereInput
    $data: QuestionOptionWhereInput
  ) {
    updateQuestionOption(where: $where, data: $data) {
      id
      label
      order
      hasMath
      rightAnswer
    }
  }
`;

export const QUESTIONOPTION_DELETE = gql`
  mutation deleteQuestionOption($where: QuestionOptionWhereInput) {
    deleteQuestionOption(where: $where) {
      id
      label
      order
      hasMath
      rightAnswer
    }
  }
`;

export default {
  "questionOption.create": QUESTIONOPTION_CREATE,
  "questionOption.update": QUESTIONOPTION_UPDATE,
  "questionOption.delete": QUESTIONOPTION_DELETE,
};
