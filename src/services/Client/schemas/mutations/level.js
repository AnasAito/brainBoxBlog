import gql from "graphql-tag";

export const LEVEL_CREATE = gql`
  mutation createLevel($data: LevelWhereInput) {
    createLevel(data: $data) {
      id
    }
  }
`;

export const LEVEL_UPDATE = gql`
  mutation updateLevel($where: LevelWhereInput, $data: LevelWhereInput) {
    updateLevel(where: $where, data: $data) {
      id
    }
  }
`;

export const LEVEL_DELETE = gql`
  mutation deleteLevel($where: LevelWhereInput) {
    deleteLevel(where: $where) {
      id
    }
  }
`;

export default {
  "level.create": LEVEL_CREATE,
  "level.update": LEVEL_UPDATE,
  "level.delete": LEVEL_DELETE,
};
