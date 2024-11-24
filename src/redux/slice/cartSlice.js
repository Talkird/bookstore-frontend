import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../../utils/token";

const base_url = "http://localhost:8080";

export const getCart = createAsyncThunk("cart/getCart", async (userId) => {
  const token = getToken();
  const response = await axios.get(`${base_url}/carts/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

export const clearCart = createAsyncThunk("cart/clearCart", async (userId) => {
    const token = getToken();
    const response = await axios.delete(`${base_url}/carts/${userId}`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
    }
);

export const addCartItem = createAsyncThunk("cart/addCartItem", async ({ userId, cartItemRequest }) => {
    const token = getToken();
    const response = await axios.post(`${base_url}/carts/${userId}`, cartItemRequest, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    
    if (response.status === 201) {
      toast.success("Libro añadido al carrito");
    } else {
      toast.error("Error añadiendo libro al carrito");
    }

    return response.data;
    }
);

export const updateCartItem = createAsyncThunk("cart/updateCartItem", async ({ userId, cartItemId, cartItemRequest }) => {
    const token = getToken();
    const response = await axios.put(`${base_url}/carts/${userId}/${cartItemId}`, cartItemRequest, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    return response.data;
});

export const deleteCartItem = createAsyncThunk("cart/deleteCartItem", async ({ userId, cartItemId }) => {
    const token = getToken();
    const response = await axios.delete(`${base_url}/carts/${userId}/item/${cartItemId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if (response.status === 200) {
        toast.success("Item eliminado del carrito");
      } else {
        toast.error("Error eliminando item del carrito");
      }
    return cartItemId;
});

export const checkoutCart = createAsyncThunk("cart/checkoutCart", async ({ userId, orderRequest }) => {
    const token = getToken();
    const response = await axios.post(`${base_url}/carts/checkout/${userId}`, orderRequest, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    if (response.status === 201) {
      toast.success("Compra realizada con éxito");
    } else {
      toast.error("Error realizando compra");
    }

    return response.data;
});

const initialState = {
  items: [],
  loading: true,
  error: null,
};

const cartSlice = createSlice({
    initialState: initialState,
    name: "cart",
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getCart.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        })
        .addCase(getCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(clearCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(clearCart.fulfilled, (state) => {
            state.items = [];
            state.loading = false;
        })
        .addCase(clearCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(addCartItem.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(addCartItem.fulfilled, (state, action) => {
            state.items.push(action.payload);
            state.loading = false;
        })
        .addCase(addCartItem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(updateCartItem.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateCartItem.fulfilled, (state, action) => {
            state.items = state.items.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
            state.loading = false;
        })
        .addCase(updateCartItem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(deleteCartItem.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteCartItem.fulfilled, (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
            state.loading = false;
        })
        .addCase(deleteCartItem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(checkoutCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(checkoutCart.fulfilled, (state) => {
            state.items = [];
            state.loading = false;
        })
        .addCase(checkoutCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default cartSlice.reducer;


