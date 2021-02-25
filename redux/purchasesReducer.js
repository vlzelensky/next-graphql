import { CREATE_PURCHASE } from "./types";
import { ADD_PRODUCTS } from "./types";

const inititalState = {
  purchases: [],
  currentPurchase: {},
};

export const purchasesReducer = (state = inititalState, action) => {
  switch (action.type) {
    case CREATE_PURCHASE:
      return { ...state, purchases: [...state.purchases, action.payload] };
    case ADD_PRODUCTS:
      return {
        ...state,
        currentPurchase: [...state.currentPurchase, action.payload],
      };
    default:
      return state;
  }
};
