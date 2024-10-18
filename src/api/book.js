import axios from "axios";
import { getToken } from "./token";

const base_url = "http://localhost:8080/books/all";

export const addBook = async (book) => {
  try {
    const token = getToken();
    const response = await axios.post(`${base_url}/create`, book, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding book:", error);
    throw error;
  }
};


export const getBooks = async () => {
    const response = await fetch(`${base_url}/all`);
    return response.json();
}
export const getBook = async (id) => {
    const response = await fetch(`${base_url}/get/${id}`);
    return response.json();
}

export const updateBook = async (id, book) => {  // Added id parameter to match endpoint
    const response = await fetch(`${base_url}/edit/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    });
    return response.json();
}

export const deleteBook = async (id) => {
    const response = await fetch(`${base_url}/delete/${id}`, {
        method: "DELETE"
    });
    return response.json();
}

export const getBooksByGenre = async (genre) => {
    const response = await fetch(`${base_url}/genre/${genre}`);
    return response.json();
}

export const getBooksByPriceRange = async (minPrice, maxPrice) => {
    const response = await fetch(`${base_url}/price-range?minPrice=${minPrice}&maxPrice=${maxPrice}`);
    return response.json();
}

export const getBooksByTitle = async (title) => {
    const response = await fetch(`${base_url}/title/${title}`);
    return response.json();
}

export const getBooksByAuthor = async (author) => {
    const response = await fetch(`${base_url}/author/${author}`);
    return response.json();
}

export const getAvailableBooks = async () => {
    const response = await fetch(`${base_url}/available`);
    return response.json();
}

export const getBooksOrderedByPriceAsc = async () => {
    const response = await fetch(`${base_url}/ordered-by-price-asc`);
    return response.json();
}

export const getBooksOrderedByPriceDesc = async () => {
    const response = await fetch(`${base_url}/ordered-by-price-desc`);
    return response.json();
}
