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
    $take: Int
    $skip: Int
    $like: UserPlacementTestWhereInput
    $orderBy: [UserPlacementTestWhereInput]
  ) {
    userPlacementTests(
      where: $where
      withSelect: $withSelect
      take: $take
      skip: $skip
      like: $like
      orderBy: $orderBy
    ) {
      count
      data {
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
  }
`;

export const USER_PLACEMENT_TEST_COUNT = gql`
  query userPlacementTests(
    $where: UserPlacementTestWhereInput
    $gt: UserPlacementTestWhereInput
    $orderBy: [UserPlacementTestWhereInput]
  ) {
    userPlacementTests(where: $where, gt: $gt, orderBy: $orderBy) {
      count
    }
  }
`;

export default {
  "user.placement.test.get.one": USER_PLACEMENT_TEST_GET_ONE,
  "user.placement.test.get.many": USER_PLACEMENT_TEST_GET_MANY,
  "user.placement.test.count": USER_PLACEMENT_TEST_COUNT,
};
