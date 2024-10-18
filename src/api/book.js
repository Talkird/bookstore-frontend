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
    try {
        const response = await axios.get(`${base_url}/all`);
        return response.data;
    } catch (error) {

        console.error("Error getting books:", error);
        throw error;
    }
}

export const getBook = async (id) => {
    try {
        const response = await axios.get(`${base_url}/get/${id}`);
        return response.data;

    } catch (error) {
        console.error("Error getting book:", error);
        throw error;
    }
}


export const updateBook = async (id, book) => {  
  try {
      const token = getToken();
        const response = await axios.put(`${base_url}/edit/${id}`, book, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        return response.data; 

    } catch (error) {
        console.error("Error updating book:", error);
        throw error;
    }
};


export const deleteBook = async (id) => {
  try {
      const token = getToken();
        const response = await axios.delete(`${base_url}/delete/${id}`, {
            Authorization: `Bearer ${token}`,
        });
        return response.data;

    } catch (error) {
        console.error("Error deleting book:", error);
        throw error;
    }
}

export const getBooksByGenre = async (genre) => {
  try {
    const response = await axios.get(`${base_url}/genre/${genre}`);
    return response.data;
  } catch (error) {
    console.error("Error getting books by genre:", error);
    throw error;
  }
};

export const getBooksByPriceRange = async (minPrice, maxPrice) => {
  try {
    const response = await axios.get(`${base_url}/price-range`, {
      params: {
        minPrice,
        maxPrice,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting books by price range:", error);
    throw error;
  }
};

export const getBooksByTitle = async (title) => {
  try {
    const response = await axios.get(`${base_url}/title/${title}`);
    return response.data;
  } catch (error) {
    console.error("Error getting books by title:", error);
    throw error;
  }
};

export const getBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(`${base_url}/author/${author}`);
    return response.data;
  } catch (error) {
    console.error("Error getting books by author:", error);
    throw error;
  }
};

export const getAvailableBooks = async () => {
  try {
    const response = await axios.get(`${base_url}/available`);
    return response.data;
  } catch (error) {
    console.error("Error getting available books:", error);
    throw error;
  }
};

export const getBooksOrderedByPriceAsc = async () => {
  try {
    const response = await axios.get(`${base_url}/ordered-by-price-asc`);
    return response.data;
  } catch (error) {
    console.error("Error getting books ordered by price (asc):", error);
    throw error;
  }
};

export const getBooksOrderedByPriceDesc = async () => {
  try {
    const response = await axios.get(`${base_url}/ordered-by-price-desc`);
    return response.data;
  } catch (error) {
    console.error("Error getting books ordered by price (desc):", error);
    throw error;
  }
};