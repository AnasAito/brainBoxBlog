import gql from "graphql-tag";

export const UNIT_CREATE = gql`
  mutation createUnit($data: UnitWhereInput) {
    createUnit(data: $data) {
      id
    }
  }
`;

export const UNIT_UPDATE = gql`
  mutation updateUnit($where: UnitWhereInput, $data: UnitWhereInput) {
    updateUnit(where: $where, data: $data) {
      id
    }
  }
`;

export const UNIT_DELETE = gql`
  mutation deleteUnit($where: UnitWhereInput) {
    deleteUnit(where: $where) {
      id
    }
  }
`;

export default {
  "unit.create": UNIT_CREATE,
  "unit.update": UNIT_UPDATE,
  "unit.delete": UNIT_DELETE,
};
