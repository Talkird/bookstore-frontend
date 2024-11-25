import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getToken } from "../../utils/token";
import axios from "axios";

const base_url = "http://localhost:8080/orders";


export const getOrdersByUserId = createAsyncThunk(
  "orders/getOrdersByUserId",
  async (userId, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await axios.get(`${base_url}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  orders: [],
  loading: true,
  error: null,
};


export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrdersByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrdersByUserId.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.loading = false;
      })
      .addCase(getOrdersByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default orderSlice.reducer;
