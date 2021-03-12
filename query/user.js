import { gql } from "@apollo/client";

export const GET_TOKEN = gql`
  query getToken($email: String, $password: String) {
    getToken(email: $email, password: $password)
  }
`;
