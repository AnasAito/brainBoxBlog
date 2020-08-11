import gql from "graphql-tag";

export const LEVEL_GET_ONE = gql`
  query level($where: LevelWhereInput, $withSelect: Boolean) {
    level(where: $where, withSelect: $withSelect) {
      id
      name
      order
    }
  }
`;

export const LEVEL_GET_MANY = gql`
  query levels(
    $where: LevelWhereInput
    $withSelect: Boolean
    $orderBy: [LevelWhereInput]
  ) {
    levels(where: $where, withSelect: $withSelect, orderBy: $orderBy) {
      count
      data {
        id
        name
        order
      }
    }
  }
`;

export default {
  "level.get.one": LEVEL_GET_ONE,
  "level.get.many": LEVEL_GET_MANY,
};
