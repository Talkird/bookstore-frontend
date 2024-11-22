import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBooks as fetchBooks,
  getBook as fetchBook,
  addBook as createBook,
  updateBook as apiUpdateBook,
  deleteBook as apiDeleteBook,
} from "../../api/book";

export const getBooks = createAsyncThunk("books/getBooks", async () => {
  const { data } = await fetchBooks();
  return data;
});

export const getBook = createAsyncThunk("books/getBook", async (id) => {
  const { data } = await fetchBook(id);
  return data;
});

export const addBook = createAsyncThunk("books/addBook", async (book) => {
  const { data } = await createBook(book);
  return data;
});

export const updateBook = createAsyncThunk("books/updateBook", async (book) => {
  const { data } = await apiUpdateBook(book);
  return data;
});

export const deleteBook = createAsyncThunk("books/deleteBook", async (id) => {
  const { data } = await apiDeleteBook(id);
  return data;
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
        const index = state.items.findIndex(
          (book) => book.id === action.payload.id,
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
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
        state.items = state.items.filter(
          (book) => book.id !== action.payload.id,
        );
        state.loading = false;
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
