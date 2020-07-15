import gql from "graphql-tag";

export const USER_PLACEMENT_TEST_UPDATE = gql`
  mutation updateUserPlacementTest(
    $where: UserPlacementTestWhereInput
    $data: UserPlacementTestWhereInput
  ) {
    updateUserPlacementTest(where: $where, data: $data) {
      id
      completed
      progression
      score
      comments
      user {
        id
        firstName
        lastName
        email
      }
      placementTest {
        id
      }
    }
  }
`;

export default {
  "user.placement.test.update": USER_PLACEMENT_TEST_UPDATE,
};
