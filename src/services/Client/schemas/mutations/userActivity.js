import gql from "graphql-tag";

export const USER_ACTIVITY_UPDATE = gql`
  mutation updateUserActivity(
    $where: UserActivityWhereInput
    $data: UserActivityWhereInput
  ) {
    updateUserActivity(where: $where, data: $data)
  }
`;

export default {
  "user.activity.update": USER_ACTIVITY_UPDATE
};
