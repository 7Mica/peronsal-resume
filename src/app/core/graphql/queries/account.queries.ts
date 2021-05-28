import { gql } from 'apollo-angular';

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const IS_SIGNEDIN = gql`
  mutation isSignedIn {
    isSignedIn
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation updateUserPassword(
    $oldPassword: String!
    $newPassword: String!
    $repeatPassword: String!
  ) {
    updateUserPassword(
      oldPassword: $oldPassword
      newPassword: $newPassword
      repeatPassword: $repeatPassword
    )
  }
`;

export const ACCOUNT_INFORMATION = gql`
  query getAccountDetails {
    getAccountDetails {
      email
    }
  }
`;
