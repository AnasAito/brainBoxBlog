import gql from "graphql-tag";

export const LEVEL_GET_ONE = gql`
  query level($where: LevelWhereInput, $withSelect: Boolean) {
    level(where: $where, withSelect: $withSelect) {
      id
      name
      order
      overview
      imgOverview {
        cloudinaryId
      }
    }
  }
`;

export const LEVEL_GET_MANY = gql`
  query levels(
    $where: LevelWhereInput
    $withSelect: Boolean
    $orderBy: [LevelWhereInput]
    $take: Int
    $skip: Int
    $like: LevelWhereInput
  ) {
    levels(
      where: $where
      withSelect: $withSelect
      orderBy: $orderBy
      like: $like
      skip: $skip
      take: $take
    ) {
      count
      data {
        id
        name
        order
        overview
        imgOverview {
          cloudinaryId
        }
      }
    }
  }
`;

export default {
  "level.get.one": LEVEL_GET_ONE,
  "level.get.many": LEVEL_GET_MANY,
};
