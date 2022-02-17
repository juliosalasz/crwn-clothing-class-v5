import { combineReducers } from "redux";
import UserReducer from "./user/userReducer";
import CartReducer from "./cart/cartReducer";

export default combineReducers({
  user: UserReducer,
  cart: CartReducer,
});
