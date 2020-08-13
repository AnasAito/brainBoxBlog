import gql from "graphql-tag";

export const UNIT_GET_ONE = gql`
  query unit($where: UnitWhereInput, $withSelect: Boolean) {
    unit(where: $where, withSelect: $withSelect) {
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

export const UNIT_GET_MANY = gql`
  query units(
    $where: UnitWhereInput
    $withSelect: Boolean
    $orderBy: [UnitWhereInput]
    $take: Int
    $skip: Int
    $like: UnitWhereInput
  ) {
    units(
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
  "unit.get.one": UNIT_GET_ONE,
  "unit.get.many": UNIT_GET_MANY,
};
