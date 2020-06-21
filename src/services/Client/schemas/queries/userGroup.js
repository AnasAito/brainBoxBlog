import gql from "graphql-tag";

export const USER_GROUP_GET_ONE = gql`
  query userGroup(
    $where: UserGroupWhereInput
    $withSelect: Boolean
  ) {
    userGroup(where: $where, withSelect: $withSelect) {
      id
      user {
        id
      }
      group {
        id
      }
    }
  }
`;

export const USER_GROUP_GET_MANY = gql`
  query userGroups(
    $where: UserGroupWhereInput
    $withSelect: Boolean
    $orderBy: [UserGroupWhereInput]
  ) {
    userGroups(
      where: $where
      withSelect: $withSelect
      orderBy: $orderBy
    ) {
      count
      data {
        id
        user {
          id
        }
        group {
          id
          name
        }
      }
    }
  }
`;

export default {
  "user.group.get.one": USER_GROUP_GET_ONE,
  "user.group.get.many": USER_GROUP_GET_MANY
};
