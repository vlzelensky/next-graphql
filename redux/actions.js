import { CREATE_PURCHASE } from "./types";
import { DELETE_PURCHASE } from "./types";

function createPurchase(purchase) {
  return {
    type: CREATE_PURCHASE,
    payload: purchase,
  };
}

// function addProducts(products) {
//   return {
//     type: ADD_PRODUCTS,
//     payload: products,
//   };
// }

export default createPurchase;
