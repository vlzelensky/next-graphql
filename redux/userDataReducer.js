import {
  CHANGE_EMAIL_VALUE,
  CHANGE_PASSWORD_VALUE,
  CHANGE_NEW_USER_INPUTS,
  CLEAR_NEW_USER_INPUTS,
} from "./types";

const initialState = {
  emailValue: "",
  passwordValue: "",
  newUser: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
};

export const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EMAIL_VALUE:
      return { ...state, emailValue: action.payload };
    case CHANGE_PASSWORD_VALUE:
      return { ...state, passwordValue: action.payload };
    case CHANGE_NEW_USER_INPUTS:
      return {
        ...state,
        newUser: { ...state.newUser, [action.inputName]: action.payload },
      };
    case CLEAR_NEW_USER_INPUTS:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        },
      };
    default:
      return state;
  }
};
