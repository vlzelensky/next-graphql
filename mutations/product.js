import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct($input: ProductInput) {
    createProduct(input: $input) {
      id
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($input: ProductInput) {
    deleteProduct(input: $input) {
      id
    }
  }
`;
