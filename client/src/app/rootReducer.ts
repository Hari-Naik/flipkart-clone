import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
import loginReducer from "../features/login/loginSlice";
import wishlistReducer from "../features/wishlistSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  login: loginReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
