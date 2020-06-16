import gql from "graphql-tag";

export const SECTION_GET_ONE = gql`
  query section($where: SectionWhereInput, $withSelect: Boolean) {
    section(where: $where, withSelect: $withSelect) {
      id
      name
      order
      timeout
    }
  }
`;

export const SECTION_GET_MANY = gql`
  query sections(
    $where: SectionWhereInput
    $withSelect: Boolean
    $orderBy: [SectionWhereInput]
  ) {
    sections(where: $where, withSelect: $withSelect, orderBy: $orderBy) {
      count
      data {
        id
        name
        order
        timeout
      }
    }
  }
`;

export default {
  "section.get.one": SECTION_GET_ONE,
  "section.get.many": SECTION_GET_MANY
};
