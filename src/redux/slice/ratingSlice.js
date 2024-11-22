import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getToken } from "../../utils/token";
import axios from "axios";

const base_url = "http://localhost:8080/ratings";

export const getRatings = createAsyncThunk(
  "ratings/getRatings",
  async (bookId) => {
    const token = getToken();
    const response = await axios.get(`${base_url}/book/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  },
);

export const createOrUpdateRating = createAsyncThunk(
  "ratings/createOrUpdateRating",
  async ({userId, bookId, ratingRequest}) => {
    const token = getToken();
    const response = await axios.post(
      `${base_url}/user/${userId}/book/${bookId}`,
      ratingRequest,
      { 
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    return response.data;
  },
);

const initialState = {
  rating: 0,
  loading: true,
  error: null,
};

export const ratingSlice = createSlice({
  initialState: initialState,
  name: "ratings",

  reducers: {
    setRating: (state, action) => {
      state.rating = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRatings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRatings.fulfilled, (state, action) => {
        state.rating = action.payload;
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
        state.rating = action.payload;
        state.loading = false;
      })
      .addCase(createOrUpdateRating.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ratingSlice.reducer;
