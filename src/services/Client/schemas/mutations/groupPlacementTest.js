import gql from "graphql-tag";

export const GROUP_PLACEMENT_TEST_CREATE = gql`
  mutation createGroupPlacementTest($data: GroupPlacementTestWhereInput) {
    createGroupPlacementTest(data: $data) {
      id
      enabled
      group {
        id
        name
      }
      placementTest {
        id
        title
      }
    }
  }
`;

export const GROUP_PLACEMENT_TEST_UPDATE = gql`
  mutation updateGroupPlacementTest(
    $where: GroupPlacementTestWhereInput
    $data: GroupPlacementTestWhereInput
  ) {
    updateGroupPlacementTest(where: $where, data: $data) {
      id
      enabled
      group {
        id
        name
      }
      placementTest {
        id
        title
      }
    }
  }
`;

export const GROUP_PLACEMENT_TEST_DELETE = gql`
  mutation deleteGroupPlacementTest($where: GroupPlacementTestWhereInput) {
    deleteGroupPlacementTest(where: $where, data: $data) {
      id
      group {
        id
        name
      }
      placementTest {
        id
        title
      }
    }
  }
`;

export default {
  "group.placement.test.create": GROUP_PLACEMENT_TEST_CREATE,
  "group.placement.test.update": GROUP_PLACEMENT_TEST_UPDATE,
  "group.placement.test.delete": GROUP_PLACEMENT_TEST_DELETE
};
