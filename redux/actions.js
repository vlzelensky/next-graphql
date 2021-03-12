import {
  CREATE_PURCHASE,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  CREATE_CURRENT_PURCHASE,
  ADD_PRODUCTS,
  CHANGE_NEW_PRODUCT_INPUTS,
  REMOVE_PURCHASE,
  CLEAR_NEW_USER_INPUTS,
  GET_PRODUCTS,
  ADD_PURCHASES,
  SET_USER,
} from "./types";

export const createPurchase = () => {
  return {
    type: CREATE_PURCHASE,
  };
};

export const addPurchases = (data) => {
  return {
    type: ADD_PURCHASES,
    payload: data,
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

export const getProducts = (data) => {
  return {
    type: GET_PRODUCTS,
    payload: data,
  };
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
