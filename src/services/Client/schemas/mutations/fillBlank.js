import gql from "graphql-tag";

export const FILLBLANK_CREATE = gql`
  mutation createFillBlank($data: FillBlankWhereInput) {
    createFillBlank(data: $data) {
      id
      title
      sentence
      answers
    }
  }
`;

export const FILLBLANK_DELETE = gql`
  mutation deleteFillBlank($where: FillBlankWhereInput) {
    deleteFillBlank(where: $where) {
      id
      title
      sentence
      answers
    }
  }
`;

export const FILLBLANK_UPDATE = gql`
  mutation updateFillBlank(
    $where: FillBlankWhereInput
    $data: FillBlankWhereInput
  ) {
    updateFillBlank(where: $where, data: $data) {
      id
      title
      sentence
      answers
    }
  }
`;

export default {
  "fillBlank.create": FILLBLANK_CREATE,
  "fillBlank.delete": FILLBLANK_DELETE,
  "fillBlank.update": FILLBLANK_UPDATE,
};
