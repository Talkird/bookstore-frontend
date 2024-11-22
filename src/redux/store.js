import { configureStore } from '@reduxjs/toolkit'
import { ratingReducer } from './slice/ratingSlice'

export const store = configureStore({
  reducer: {
    ratings: ratingReducer,
  },
})
