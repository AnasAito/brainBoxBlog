import gql from "graphql-tag";

export const USER_GET_MANY = gql`
  query users(
    $take: Int
    $skip: Int
    $withSelect: Boolean
    $where: UserWhereInput
    $like: UserWhereInput
    $orderBy: [UserWhereInput]
  ) {
    users(
      take: $take
      skip: $skip
      withSelect: $withSelect
      where: $where
      like: $like
      orderBy: $orderBy
    ) {
      data {
        id
        email
        firstName
        lastName
        lastLogin
        picture
        group {
          id
          name
        }
      }
      count
    }
  }
`;

export const USER_GET_ONE = gql`
  query user($withSelect: Boolean, $where: UserWhereInput) {
    user(withSelect: $withSelect, where: $where) {
      id
      email
      firstName
      lastName
      lastLogin
      picture
      group {
        id
        name
      }
    }
  }
`;

export const USER_GET_COUNT = gql`
  query users($where: UserWhereInput) {
    users(where: $where) {
      count
    }
  }
`;

export const USER_REPORT = gql`
  query userReport(
    $where: UserPlacementTestWhereInput
    $report: ReportWhereInput
  ) {
    userReport(where: $where, report: $report)
  }
`;

export default {
  "user.get.many": USER_GET_MANY,
  "user.get.one": USER_GET_ONE,
  "user.get.count": USER_GET_COUNT,
  "user.report": USER_REPORT,
};
