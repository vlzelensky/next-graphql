import {
  CREATE_PURCHASE,
  ADD_PRODUCTS,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "./types";

const inititalState = {
  purchases: [],
  currentPurchase: {},
  quantity: 0,
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
    case INCREMENT_QUANTITY:
      return { ...state, quantity: state.quantity + 1 };
    case DECREMENT_QUANTITY:
      if (state.quantity === 0) {
        return { ...state, quantity: (state.quantity = 0) };
      } else return { ...state, quantity: state.quantity - 1 };
    default:
      return state;
  }
};
