import gql from "graphql-tag";

export const GROUP_CREATE = gql`
  mutation createGroup($data: GroupWhereInput) {
    createGroup(data: $data) {
      id
      name
    }
  }
`;

export const GROUP_UPDATE = gql`
  mutation updateGroup($where: GroupWhereInput, $data: GroupWhereInput) {
    updateGroup(where: $where, data: $data) {
      id
      name
    }
  }
`;

export const GROUP_DELETE = gql`
  mutation deleteGroup($where: GroupWhereInput) {
    deleteGroup(where: $where) {
      id
      name
    }
  }
`;

export default {
  "group.create": GROUP_CREATE,
  "group.update": GROUP_UPDATE,
  "group.delete": GROUP_DELETE,
};
