import gql from "graphql-tag";

export const PLACEMENT_TEST_CREATE = gql`
  mutation createPlacementTest($data: PlacementTestWhereInput) {
    createPlacementTest(data: $data) {
      id
      title
      overview
      instructions
      sectionContainer {
        id
      }
    }
  }
`;

export const PLACEMENT_TEST_UPDATE = gql`
  mutation updatePlacementTest(
    $where: PlacementTestWhereInput
    $data: PlacementTestWhereInput
  ) {
    updatePlacementTest(where: $where, data: $data) {
      id
      title
      overview
      instructions
      sectionContainer {
        id
      }
    }
  }
`;

export const PLACEMENT_TEST_DELETE = gql`
  mutation deletePlacementTest($where: PlacementTestWhereInput) {
    deletePlacementTest(where: $where) {
      id
      title
      overview
      instructions
      sectionContainer {
        id
      }
    }
  }
`;

export const PLACEMENT_TEST_GRADE = gql`
  mutation gradePlacementTest(
    $where: PlacementTestWhereInput
    $user: UserWhereInput
    $activity: ActivityWhereInput
    $score: Int
  ) {
    gradePlacementTest(
      where: $where
      user: $user
      activity: $activity
      score: $score
    )
  }
`;

export const PLACEMENT_TEST_REPORT = gql`
  mutation placementTestReport($where: UserPlacementTestWhereInput) {
    placementTestReport(where: $where)
  }
`;

export default {
  "test.create": PLACEMENT_TEST_CREATE,
  "test.update": PLACEMENT_TEST_UPDATE,
  "test.delete": PLACEMENT_TEST_DELETE,
  "test.grade": PLACEMENT_TEST_GRADE,
  "test.report": PLACEMENT_TEST_REPORT,
};
