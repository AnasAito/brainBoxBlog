import gql from "graphql-tag";

export const USER_CHART_GET_ONE = gql`
  query userChart(
    $where: UserWhereInput
    $lt: UserWhereInput
    $gt: UserWhereInput
    $step: String!
    $chartType: String!
  ) {
    userChart(
      where: $where
      lt: $lt
      gt: $gt
      step: $step
      chartType: $chartType
    ) {
      name
      type
      data
    }
  }
`;

export default {
  "user.chart.get.one": USER_CHART_GET_ONE
};
// level => units
// unit => lessons
// lesson => higlighted lesson
