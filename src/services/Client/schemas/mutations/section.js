import gql from "graphql-tag";

export const SECTION_CREATE = gql`
  mutation createSection($data: SectionWhereInput) {
    createSection(data: $data) {
      id
      name
      order
      timeout
    }
  }
`;

export const SECTION_UPDATE = gql`
  mutation updateSection($where: SectionWhereInput, $data: SectionWhereInput) {
    updateSection(where: $where, data: $data) {
      id
      name
      order
      timeout
    }
  }
`;

export const SECTION_DELETE = gql`
  mutation deleteSection($where: SectionWhereInput) {
    deleteSection(where: $where) {
      id
      name
      order
      timeout
    }
  }
`;

export default {
  "section.create": SECTION_CREATE,
  "section.update": SECTION_UPDATE,
  "section.delete": SECTION_DELETE,
};
