import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import ShopReducer from "./shop/shopReducer";
import UserReducer from "./user/userReducer";
import CartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directoryReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: directoryReducer,
  shop: ShopReducer,
});

export default persistReducer(persistConfig, rootReducer);
