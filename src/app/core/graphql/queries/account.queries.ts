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

export const ACCOUNT_INFORMATION = gql`
  query getAccountDetails {
    getAccountDetails {
      email
    }
  }
`;
