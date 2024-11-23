import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getToken } from "../../utils/token";
import axios from "axios";

const base_url = "http://localhost:8080/discounts";

export const applyDiscount = createAsyncThunk(
    "discount/applyDiscount",
    async (discountCode, totalPrice) => {
    try {
        const token = getToken();
        const response = await axios.post(
            `${base_url}/apply`,
            null,  
            {
                params: {
                    discountCode,
                    totalPrice
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        toast.success("Descuento aplicado");
        return response.data;
    } catch (error) {
        toast.error("Error al aplicar descuento");
        console.error("Error applying discount:", error);
        throw error;
    }
});

const initialState = {
    discount:0,
    loading: true,
    error: null,
  };

  const discountSlice = createSlice({
    name: "discount",
    initialState,
    reducers: {
      resetDiscount: (state) => {
        state.discount = 0;
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
          state.loading = false;
          state.discount = action.payload.discount || 0; // Asume que el API devuelve un campo "discount"
        })
        .addCase(applyDiscount.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || "Error al aplicar descuento";
        });
    },
  });
  
  export const { resetDiscount } = discountSlice.actions;
  
  export default discountSlice.reducer;
