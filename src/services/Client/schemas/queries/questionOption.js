import gql from "graphql-tag";

export const QUESTIONOPTION_GET_MANY = gql`
  query questionOptions(
    $where: QuestionOptionWhereInput
    $withSelect: Boolean
    $orderBy: [QuestionOptionWhereInput]
    $take: Int
    $skip: Int
    $like: QuestionOptionWhereInput
  ) {
    questionOptions(
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
        order
        hasMath
        rightAnswer
      }
      count
    }
  }
`;

export const QUESTIONOPTION_GET_ONE = gql`
  query question($where: QuestionOptionWhereInput, $withSelect: Boolean) {
    question(where: $where, withSelect: $withSelect) {
      id
      label
      order
      hasMath
      rightAnswer
    }
  }
`;
export default {
  "questionOption.get.one": QUESTIONOPTION_GET_ONE,
  "questionOption.get.many": QUESTIONOPTION_GET_MANY,
};
