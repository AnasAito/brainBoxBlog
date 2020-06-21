import gql from "graphql-tag";

export const USER_GROUP_CREATE = gql`
  mutation createUserGroup($data: UserGroupWhereInput) {
    createUserGroup(data: $data) {
      id
      group {
        id
        name
      }
      user {
        id
        email
      }
    }
  }
`;

export const USER_GROUP_UPDATE = gql`
  mutation updateUserGroup(
    $where: UserGroupWhereInput
    $data: UserGroupWhereInput
  ) {
    updateUserGroup(where: $where, data: $data) {
      id
      group {
        id
        name
      }
      user {
        id
        email
      }
    }
  }
`;

export const USER_GROUP_DELETE = gql`
  mutation deleteUserGroup($where: UserGroupWhereInput) {
    deleteUserGroup(where: $where, data: $data) {
      id
      group {
        id
        name
      }
      user {
        id
        email
      }
    }
  }
`;

export default {
  "user.group.create": USER_GROUP_CREATE,
  "user.group.update": USER_GROUP_UPDATE,
  "user.group.delete": USER_GROUP_DELETE
};
