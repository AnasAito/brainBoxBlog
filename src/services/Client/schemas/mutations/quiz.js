import gql from "graphql-tag";

export const QUIZ_CREATE = gql`
  mutation createQuiz($data: QuizWhereInput) {
    createQuiz(data: $data) {
      id
      title
      type
    }
  }
`;

export const QUIZ_UPDATE = gql`
  mutation updateQuiz($where: QuizWhereInput, $data: QuizWhereInput) {
    updateQuiz(where: $where, data: $data) {
      id
      title
      type
    }
  }
`;

export const QUIZ_DELETE = gql`
  mutation deleteQuiz($where: QuizWhereInput) {
    deleteQuiz(where: $where) {
      id
      title
      type
    }
  }
`;

export const QUIZ_GRADE = gql`
  mutation gradeQuiz($where: QuizWhereInput) {
    gradeQuiz(where: $where)
  }
`;

export default {
  "quiz.create": QUIZ_CREATE,
  "quiz.update": QUIZ_UPDATE,
  "quiz.delete": QUIZ_DELETE,
  "quiz.grade": QUIZ_GRADE,
};
