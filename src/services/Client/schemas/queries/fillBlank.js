import gql from "graphql-tag";

export const FILLBLANK_GET_MANY = gql`
  query fillBlanks(
    $where: FillBlankWhereInput
    $withSelect: Boolean
    $orderBy: [FillBlankWhereInput]
  ) {
    fillBlanks(where: $where, withSelect: $withSelect, orderBy: $orderBy) {
      data {
        id
        title
        sentence
        answers
      }
      count
    }
  }
`;

export const FILLBLANK_GET_ONE = gql`
  query fillBlank(
    $where: FillBlankWhereInput
    $withSelect: Boolean
    $orderBy: [FillBlankWhereInput]
  ) {
    fillBlank(where: $where, withSelect: $withSelect, orderBy: $orderBy) {
      id
      title
      sentence
      answers
    }
  }
`;
export default {
  "fillBlank.get.one": FILLBLANK_GET_ONE,
  "fillBlank.get.many": FILLBLANK_GET_MANY,
};
