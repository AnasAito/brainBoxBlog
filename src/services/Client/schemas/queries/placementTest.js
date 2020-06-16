import gql from "graphql-tag";

export const PLACEMENT_TEST_GET_ONE = gql`
  query placementTest($where: PlacementTestWhereInput, $withSelect: Boolean) {
    placementTest(where: $where, withSelect: $withSelect) {
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

export const PLACEMENT_TEST_GET_MANY = gql`
  query placementTests(
    $take: Int
    $skip: Int
    $like: PlacementTestWhereInput
    $where: PlacementTestWhereInput
    $withSelect: Boolean
    $orderBy: [PlacementTestWhereInput]
  ) {
    placementTests(
      where: $where
      withSelect: $withSelect
      orderBy: $orderBy
      like: $like
      skip: $skip
      take: $take
    ) {
      count
      data {
        id
        title
        overview
        instructions
        sectionContainer {
          id
        }
      }
    }
  }
`;

export const PLACEMENT_TEST_REPORT = gql`
  query placementTestReport(
    $where: UserPlacementTestWhereInput
    $orderBy: [UserPlacementTestWhereInput]
    $report: ReportWhereInput
  ) {
    placementTestReport(where: $where, orderBy: $orderBy, report: $report)
  }
`;

export default {
  "test.get.one": PLACEMENT_TEST_GET_ONE,
  "test.get.many": PLACEMENT_TEST_GET_MANY,
  "test.report": PLACEMENT_TEST_REPORT
};
