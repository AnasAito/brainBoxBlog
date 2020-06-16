import gql from "graphql-tag";

export const USER_LOGIN = gql`
  mutation adminLogin($email: String!, $password: String!) {
    adminLogin(email: $email, password: $password) {
      token
      user {
        id
        firstName
        lastName
        email
        enabled
        picture
        confirmed
      }
    }
  }
`;

export default {
  "user.login": USER_LOGIN
};
