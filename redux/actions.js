import {
  CREATE_PURCHASE,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  CREATE_CURRENT_PURCHASE,
  ADD_PRODUCTS,
  REMOVE_PURCHASE,
  CLEAR_NEW_USER_INPUTS,
} from "./types";

export const createPurchase = () => {
  return {
    type: CREATE_PURCHASE,
  };
};

export const addProducts = () => {
  return {
    type: ADD_PRODUCTS,
  };
};

export const createCurrentPurchase = (purchase) => {
  return {
    type: CREATE_CURRENT_PURCHASE,
    payload: purchase,
  };
};

export const incrementQuantity = (id) => {
  return {
    type: INCREMENT_QUANTITY,
    payload: id,
  };
};

export const decrementQuantity = (id) => {
  return {
    type: DECREMENT_QUANTITY,
    payload: id,
  };
};

export const removePurchase = (id) => {
  return {
    type: REMOVE_PURCHASE,
    payload: id,
  };
};

export const changeInputValue = (type, event, inputName) => {
  return {
    type,
    payload: event,
    inputName,
  };
};

export const clearNewUserInputs = () => {
  return {
    type: CLEAR_NEW_USER_INPUTS,
  };
};
