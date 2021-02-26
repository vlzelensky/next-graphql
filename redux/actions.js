import { CREATE_PURCHASE } from "./types";
import { INCREMENT_QUANTITY } from "./types";
import { DECREMENT_QUANTITY } from "./types";

export const createPurchase = (purchase) => {
  return {
    type: CREATE_PURCHASE,
    payload: purchase,
  };
};

export const incrementQuantity = () => {
  return {
    type: INCREMENT_QUANTITY,
  };
};

export const decrementQuantity = () => {
  return {
    type: DECREMENT_QUANTITY,
  };
};
