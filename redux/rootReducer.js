import { combineReducers } from "redux";
import { purchasesReducer } from "./purchasesReducer";

const rootReducer = combineReducers({
  purchases: purchasesReducer,
});

export default rootReducer;
