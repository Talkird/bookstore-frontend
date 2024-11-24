import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../../utils/token";

const base_url = "http://localhost:8080/discounts";

// Async thunk para aplicar un descuento
export const applyDiscount = createAsyncThunk(
  "discount/applyDiscount",
  async ({ discountCode, totalPrice }) => {
    const token = getToken();
    const response = await axios.post(
      `${base_url}/apply`,
      null, // No hay cuerpo en esta solicitud
      {
        params: { discountCode, totalPrice },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  }
);

const initialState = {
  discountAmount: 0,
  loading: false,
  error: null,
};

const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {
    resetDiscount: (state) => {
      state.discountAmount = 0;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(applyDiscount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(applyDiscount.fulfilled, (state, action) => {
        state.discountAmount = action.payload;
        state.loading = false;
      })
      .addCase(applyDiscount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetDiscount } = discountSlice.actions;
export default discountSlice.reducer;
