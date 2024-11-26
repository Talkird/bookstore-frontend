import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

const base_url = "http://localhost:8080/api/v1/auth";

export const login = createAsyncThunk('user/login', async ({ userEmail, password }, { rejectWithValue }) => {
  try {
    // Send a POST request to the authentication endpoint
    const response = await axios.post(`${base_url}/authenticate`, { email: userEmail, password });
    
    // Destructure the response data to extract authentication details
    const { access_token, user_id, email, role } = response.data;
    
    // Display a success message
    toast.success("Inicio de sesión exitoso");
    
    // Return the extracted attributes
    return { access_token, user_id, email, role };
  } catch (error) {
    // Display an error message
    toast.error("Error al iniciar sesión");
    
    // Return the error response data
    return rejectWithValue(error.response.data);
  }
});

export const register = createAsyncThunk('user/register', async ({ name, userEmail, password, userRole = "USER" }, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${base_url}/register`, { name, email:userEmail, password, role:userRole });
    const { access_token, user_id, email, role } = response.data;
    toast.success("Registro exitoso");
    return { access_token, user_id, email, role };
  } catch (error) {
    toast.error("Error al registrarse");
    return rejectWithValue(error.response.data);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    userId: null,
    email: null,
    role: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.userId = null;
      state.email = null;
      state.role = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.access_token;
        state.userId = action.payload.user_id;
        state.email = action.payload.email;
        state.role = action.payload.role;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.access_token;
        state.userId = action.payload.user_id;
        state.email = action.payload.email;
        state.role = action.payload.role;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;