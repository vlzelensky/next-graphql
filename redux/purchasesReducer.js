import {
  CREATE_PURCHASE,
  CREATE_CURRENT_PURCHASE,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  ADD_PRODUCTS,
  REMOVE_PURCHASE,
  CHANGE_NEW_PRODUCT_INPUTS,
  GET_PRODUCTS,
} from "./types";

const inititalState = {
  purchases: [],
  products: [],
  currentPurchase: {},
  newProduct: {
    description: "",
    weight: "",
    price: "",
  },
};

export const purchasesReducer = (state = inititalState, action) => {
  switch (action.type) {
    case CREATE_PURCHASE:
      return {
        ...state,
        purchases: [...state.purchases, state.currentPurchase],
        products: state.products.map((el) => {
          return { ...el, quantity: 0 };
        }),
      };
    case CREATE_CURRENT_PURCHASE:
      return {
        ...state,
        currentPurchase: action.payload,
      };
    case ADD_PRODUCTS:
      const filteredList = state.products.filter((el) => el.quantity > 0);
      return {
        ...state,
        currentPurchase: { ...state.currentPurchase, goods: filteredList },
      };
    case REMOVE_PURCHASE:
      const notRemoved = state.purchases.filter(
        (el) => el.id !== action.payload
      );
      return {
        ...state,
        purchases: notRemoved,
      };
    case INCREMENT_QUANTITY:
      const a = state.products.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      return { ...state, products: a };
    case DECREMENT_QUANTITY:
      const b = state.products.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      });
      return { ...state, products: b };
    case CHANGE_NEW_PRODUCT_INPUTS:
      return {
        ...state,
        newProduct: { ...state.newProduct, [action.inputName]: action.payload },
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.getProducts,
      };
    default:
      return state;
  }
};
