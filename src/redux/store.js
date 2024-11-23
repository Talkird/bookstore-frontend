import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from "./slice/ratingSlice";
import bookReducer from "./slice/bookSlice";
import orderReducer from "./slice/orderSlice";
import cartReducer from "./slice/cartSlice";  

export const store = configureStore({
  reducer: {
    ratings: ratingReducer,
    books: bookReducer,
    orders: orderReducer,
    cart: cartReducer
  },
});
