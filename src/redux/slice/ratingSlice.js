import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getRatings as fetchRatings,
  createOrUpdateRating as apiCreateOrUpdateRating,
  deleteRating,
} from "../../api/rating";

export const getRatings = createAsyncThunk(
  "ratings/getRatings",
  async (bookId) => {
    const { data } = await fetchRatings(bookId);
    return data;
  },
);

export const createOrUpdateRating = createAsyncThunk(
  "ratings/createOrUpdateRating",
  async (ratingRequest) => {
    const { data } = await apiCreateOrUpdateRating(ratingRequest);
    return data;
  },
);

const initialState = {
  items: [],
  loading: true,
  error: null,
};

export const ratingSlice = createSlice({
  initialState: initialState,
  name: "ratings",

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRatings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRatings.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(getRatings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createOrUpdateRating.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrUpdateRating.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(createOrUpdateRating.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ratingSlice.reducer;
