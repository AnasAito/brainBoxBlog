import gql from "graphql-tag";

export const QUIZ_GET_MANY = gql`
  query quizzes(
    $take: Int
    $skip: Int
    $where: QuizWhereInput
    $withSelect: Boolean
    $orderBy: [QuizWhereInput]
  ) {
    quizzes(
      where: $where
      withSelect: $withSelect
      orderBy: $orderBy
      skip: $skip
      take: $take
    ) {
      data {
        id
        title
        type
      }
      count
    }
  }
`;

export const QUIZ_GET_ONE = gql`
  query quiz(
    $where: QuizWhereInput
    $withSelect: Boolean
    $orderBy: [QuizWhereInput]
  ) {
    quiz(where: $where, withSelect: $withSelect, orderBy: $orderBy) {
      id
      title
      type
    }
  }
`;
export default {
  "quiz.get.one": QUIZ_GET_ONE,
  "quiz.get.many": QUIZ_GET_MANY
};
