import gql from "graphql-tag";

export const USER_PDF_REPORT = gql`
  mutation userPdfReport($where: UserPlacementTestWhereInput) {
    userPdfReport(where: $where)
  }
`;

export const TIME_REPORT = gql`
  mutation timeReport($where: UserPlacementTestWhereInput) {
    timeReport(where: $where)
  }
`;

export const FILES_REPORT = gql`
  mutation filesReport($where: UserPlacementTestWhereInput) {
    filesReport(where: $where)
  }
`;

export default {
  "user.report.pdf": USER_PDF_REPORT,
  "time.report": TIME_REPORT,
  "files.report": FILES_REPORT,
};
