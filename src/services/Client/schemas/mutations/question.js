import gql from "graphql-tag";

export const QUESTION_CREATE = gql`
  mutation createQuestion($data: QuestionWhereInput) {
    createQuestion(data: $data) {
      id
      createdAt
      label
      order
      hasMath
      image {
        id
        path
      }
    }
  }
`;

export const QUESTION_UPDATE = gql`
  mutation updateQuestion(
    $where: QuestionWhereInput
    $data: QuestionWhereInput
  ) {
    updateQuestion(where: $where, data: $data) {
      id
      createdAt
      label
      order
      hasMath
      image {
        id
        path
      }
    }
  }
`;

export const QUESTION_DELETE = gql`
  mutation deleteQuestion($where: QuestionWhereInput) {
    deleteQuestion(where: $where) {
      id
      createdAt
      label
      order
      hasMath
      image {
        id
        path
      }
    }
  }
`;

export default {
  "question.create": QUESTION_CREATE,
  "question.update": QUESTION_UPDATE,
  "question.delete": QUESTION_DELETE,
};
