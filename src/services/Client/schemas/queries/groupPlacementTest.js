import gql from "graphql-tag";

export const GROUP_PLACEMENT_TEST_GET_ONE = gql`
  query groupPlacementTest(
    $where: GroupPlacementTestWhereInput
    $withSelect: Boolean
  ) {
    groupPlacementTest(where: $where, withSelect: $withSelect) {
      id
      enabled
      group {
        id
        name
      }
      placementTest {
        id
        title
        instructions
      }
    }
  }
`;

export const GROUP_PLACEMENT_TEST_GET_MANY = gql`
  query groupPlacementTests(
    $where: GroupPlacementTestWhereInput
    $withSelect: Boolean
    $orderBy: [GroupPlacementTestWhereInput]
  ) {
    groupPlacementTests(
      where: $where
      withSelect: $withSelect
      orderBy: $orderBy
    ) {
      count
      data {
        id
        enabled
        group {
          id
          name
        }
        placementTest {
          id
          title
          instructions
          sectionContainer {
            id
          }
        }
      }
    }
  }
`;

export default {
  "group.placement.test.get.one": GROUP_PLACEMENT_TEST_GET_ONE,
  "group.placement.test.get.many": GROUP_PLACEMENT_TEST_GET_MANY,
};
