import gql from "graphql-tag";

export const USER_ACTIVITY_GET_ONE = gql`
  query userActivity($where: UserActivityWhereInput, $withSelect: Boolean) {
    userActivity(where: $where, withSelect: $withSelect) {
      id
      infos
      answers
      user {
        id
      }
      activity {
        id
        type
      }
    }
  }
`;

export const USER_ACTIVITY_GET_MANY = gql`
  query userActivities(
    $where: UserActivityWhereInput
    $withSelect: Boolean
    $orderBy: [UserActivityWhereInput]
  ) {
    userActivities(where: $where, withSelect: $withSelect, orderBy: $orderBy) {
      count
      data {
        answers
        id
        user {
          id
          fistName
          lastName
        }
        activity {
          id
        }
      }
    }
  }
`;

export default {
  "user.activity.get.one": USER_ACTIVITY_GET_ONE,
  "user.activity.get.many": USER_ACTIVITY_GET_MANY
};
