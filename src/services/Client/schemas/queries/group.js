import gql from "graphql-tag";

export const GROUP_GET_MANY = gql`
  query groups(
    $where: GroupWhereInput
    $withSelect: Boolean
    $orderBy: [GroupWhereInput]
    $take: Int
    $skip: Int
    $like: GroupWhereInput
  ) {
    groups(
      where: $where
      withSelect: $withSelect
      orderBy: $orderBy
      take: $take
      skip: $skip
      like: $like
    ) {
      count
      data {
        id
        name
      }
    }
  }
`;

export default {
  "group.get.many": GROUP_GET_MANY
};
