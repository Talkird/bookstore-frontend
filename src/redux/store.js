import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from "./slice/ratingSlice";
import bookReducer from "./slice/bookSlice";

export const store = configureStore({
  reducer: {
    ratings: ratingReducer,
    books: bookReducer,
  },
});
