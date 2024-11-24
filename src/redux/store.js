import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from "./slice/ratingSlice";
import bookReducer from "./slice/bookSlice";
import userReducer from "./slice/userSlice";
import orderReducer from "./slice/orderSlice";
import cartReducer from "./slice/cartSlice";  
import discountReducer from "./slice/discountSlice"

export const store = configureStore({
  reducer: {
    ratings: ratingReducer,
    books: bookReducer,
    user: userReducer,
    orders: orderReducer,
    cart: cartReducer,
    discount: discountReducer,
  },
});
