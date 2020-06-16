import gql from "graphql-tag";

export const TEXT_CREATE = gql`
  mutation createText($data: TextWhereInput) {
    createText(data: $data) {
      id
      title
      content
      createdAt
    }
  }
`;

export const TEXT_UPDATE = gql`
  mutation updateText($where: TextWhereInput, $data: TextWhereInput) {
    updateText(where: $where, data: $data) {
      id
      title
      content
      createdAt
    }
  }
`;

export const TEXT_DELETE = gql`
  mutation deleteText($where: TextWhereInput) {
    deleteText(where: $where) {
      id
      title
      content
      createdAt
    }
  }
`;

export default {
  "text.create": TEXT_CREATE,
  "text.update": TEXT_UPDATE,
  "text.delete": TEXT_DELETE
};
