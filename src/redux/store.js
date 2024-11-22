import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from "./slice/ratingSlice";
import bookReducer from "./slice/bookSlice";
import userReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    ratings: ratingReducer,
    books: bookReducer,
    user: userReducer,
  },
});
