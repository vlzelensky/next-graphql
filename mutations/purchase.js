import { gql } from "@apollo/client";

export const DELETE_PURCHASE = gql`
  mutation deletePurchase($input: PurchaseInput) {
    deletePurchase(input: $input) {
      id
    }
  }
`;

export const CREATE_PURCHASE = gql`
  mutation createPurchase($input: PurchaseInput) {
    createPurchase(input: $input) {
      id
    }
  }
`;
