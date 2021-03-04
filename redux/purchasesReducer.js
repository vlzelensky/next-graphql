import {
  CREATE_PURCHASE,
  CREATE_CURRENT_PURCHASE,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  ADD_PRODUCTS,
  REMOVE_PURCHASE,
  CHANGE_EMAIL_VALUE,
  CHANGE_PASSWORD_VALUE,
  CHANGE_NEW_USER_INPUTS,
} from "./types";

const inititalState = {
  purchases: [],
  products: [
    {
      id: 1,
      description: "Драже M&Ms с молочным шоколадом",
      weight: "45 г",
      price: "49,49 ₽",
      quantity: 0,
    },
    {
      id: 2,
      description: "Шоколад Ritter Sport темный с начинкой Марципан",
      weight: "100 г",
      price: "136,89 ₽",
      quantity: 0,
    },
    {
      id: 3,
      description: "Шоколадные конфеты Merci Ассорти",
      weight: "250 г",
      price: "409,99 ₽",
      quantity: 0,
    },
    {
      id: 4,
      description: "Пряники Яшкино шоколадные",
      weight: "350 г",
      price: "86,39 ₽",
      quantity: 0,
    },
    {
      id: 5,
      description:
        "Шоколад Bucheron с горькой клюквой, миндалем и фисташками 72%",
      weight: "100 г",
      price: "208,49 ₽",
      quantity: 0,
    },
  ],
  currentPurchase: {},
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
    default:
      return state;
  }
};
