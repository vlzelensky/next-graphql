import { gql } from "@apollo/client";

export const GET_PURCHASES = gql`
  query {
    getPurchases {
      id
      title
      date
    }
  }
`;
