import gql from "graphql-tag";

export const TEXT_GET_ONE = gql`
  query text($where: TextWhereInput, $withSelect: Boolean) {
    text(where: $where, withSelect: $withSelect) {
      id
      title
      content
      createdAt
    }
  }
`;

export const TEXT_GET_MANY = gql`
  query texts(
    $take: Int
    $skip: Int
    $where: TextWhereInput
    $withSelect: Boolean
    $orderBy: [TextWhereInput]
  ) {
    texts(
      where: $where
      withSelect: $withSelect
      orderBy: $orderBy
      take: $take
      skip: $skip
    ) {
      data {
        id
        title
        content
        createdAt
      }
      count
    }
  }
`;

export default {
  "text.get.one": TEXT_GET_ONE,
  "text.get.many": TEXT_GET_MANY,
};
