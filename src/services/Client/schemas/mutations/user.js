import gql from "graphql-tag";

export const USER_UPDATE = gql`
  mutation updateUser($where: UserWhereInput, $data: UserWhereInput) {
    updateUser(where: $where, data: $data) {
      id
      email
      firstName
      lastName
      picture
      lastLogin
      confirmed
    }
  }
`;

export const USER_CHANGE_PASSWORD = gql`
  mutation changePassword($where: UserWhereInput, $data: UserWhereInput) {
    changePassword(where: $where, data: $data) {
      id
    }
  }
`;

export const USER_RESET_PASSWORD = gql`
  mutation resetPassword($where: UserWhereInput) {
    resetPassword(where: $where) {
      id
    }
  }
`;

export const USER_CREATE_MANY = gql`
  mutation createUsers($data: [UserWhereInput], $groups: [GroupWhereInput]) {
    createUsers(data: $data, groups: $groups)
  }
`;

export const USERS_FROM_FILE = gql`
  mutation usersFromFile($file: Upload!) {
    usersFromFile(file: $file) {
      email
      firstName
      lastName
    }
  }
`;

export default {
  "user.update": USER_UPDATE,
  "user.change.password": USER_CHANGE_PASSWORD,
  "user.password.reset": USER_RESET_PASSWORD,
  "user.create.many": USER_CREATE_MANY,
  "users.from.file": USERS_FROM_FILE,
};
