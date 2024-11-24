import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../../utils/token";

const base_url = "http://localhost:8080/books";

export const getBooks = createAsyncThunk("books/getBooks", async () => {
  const response = await axios.get(`${base_url}/all`);
  return response.data;
});

export const getBook = createAsyncThunk("books/getBook", async (id) => {
  const response = await axios.get(`${base_url}/get/${id}`);
  return response.data;
});

export const addBook = createAsyncThunk("books/addBook", async (book) => {
  const token = getToken();
  const response = await axios.post(`${base_url}/create`, book, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
});

export const updateBook = createAsyncThunk(
  "books/updateBook",
  async ({ id, book }) => {
    const token = getToken();
    const response = await axios.put(`${base_url}/edit/${id}`, book, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  },
);

export const deleteBook = createAsyncThunk("books/deleteBook", async (id) => {
  const token = getToken();
  const response = await axios.delete(`${base_url}/delete/${id}`, {
    Authorization: `Bearer ${token}`,
  });
  return {id: id};
});

const initialState = {
  items: [],
  loading: true,
  error: null,
};

const bookSlice = createSlice({
  initialState: initialState,
  name: "books",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [action.payload];
      })
      .addCase(getBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.items = state.items.map((book) =>
          book.id === action.payload.id ? action.payload : book,
        );
        state.loading = false;
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.items = state.items
          .map((book) =>
            book.id === action.payload.id ? { ...book, deleted: true } : book,
          )
          .filter((book) => !book.deleted);
        state.loading = false;
      })

      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
