import gql from "graphql-tag";

export const USER_PLACEMENT_TEST_GET_ONE = gql`
  query userPlacementTest(
    $where: UserPlacementTestWhereInput
    $withSelect: Boolean
  ) {
    userPlacementTest(where: $where, withSelect: $withSelect) {
      id
      completed
      progression
      user {
        id
      }
      placementTest {
        id
      }
    }
  }
`;

export const USER_PLACEMENT_TEST_GET_MANY = gql`
  query userPlacementTests(
    $where: UserPlacementTestWhereInput
    $withSelect: Boolean
    $orderBy: [UserPlacementTestWhereInput]
  ) {
    userPlacementTests(where: $where, withSelect: $withSelect, orderBy: $orderBy) {
      data {
        id
        completed
        progression
        user {
          id
        }
        placementTest {
          id
        }
      }
    }
  }
`;

export default {
  "user.placement.test.get.one": USER_PLACEMENT_TEST_GET_ONE,
  "user.placement.test.get.many": USER_PLACEMENT_TEST_GET_MANY,
};
