import { combineReducers } from "redux";
import { purchasesReducer } from "./purchasesReducer";
import { userDataReducer } from "./userDataReducer";

const rootReducer = combineReducers({
  purchases: purchasesReducer,
  userData: userDataReducer,
});

export default rootReducer;
