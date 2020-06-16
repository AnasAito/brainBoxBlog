import gql from "graphql-tag";

export const QUESTION_GET_MANY = gql`
  query questions(
    $where: QuestionWhereInput
    $withSelect: Boolean
    $orderBy: [QuestionWhereInput]
    $take: Int
    $skip: Int
    $like: QuestionWhereInput
  ) {
    questions(
      where: $where
      withSelect: $withSelect
      orderBy: $orderBy
      take: $take
      skip: $skip
      like: $like
    ) {
      data {
        id
        label
        hasMath
        image {
          id
          cloudinaryId
        }
        order
        createdAt
      }
      count
    }
  }
`;

export const QUESTION_GET_ONE = gql`
  query question($where: QuestionWhereInput, $withSelect: Boolean) {
    question(where: $where, withSelect: $withSelect) {
      id
      label
      hasMath
      image {
        id
        cloudinaryId
      }
      order
      createdAt
    }
  }
`;
export default {
  "question.get.one": QUESTION_GET_ONE,
  "question.get.many": QUESTION_GET_MANY,
};
