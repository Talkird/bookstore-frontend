import axios from "axios";
import { getToken } from "../utils/token";
import toast from "react-hot-toast";

const base_url = "http://localhost:8080/ratings";

export const getRating = async (bookId) => {
    try {
        const token = getToken();
        const response = await axios.get(`${base_url}/${bookId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        console.log("Rating:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error getting rating:", error);
        throw error;
    }
}

export const getRatings = async (bookId) => {
    try {
        const token = getToken();
        const response = await axios.get(`${base_url}/book/${bookId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error getting ratings:", error);
        throw error;
    }
};

export const getRatingsByUser = async (userId) => {
    try {
        const token = getToken();
        const response = await axios.get(`${base_url}/user/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error getting user ratings:", error);
        throw error;
    }
};

export const getRatingByUserAndBook = async (userId, bookId) => {
    try {
        const token = getToken();
        const response = await axios.get(`${base_url}/user/${userId}/book/${bookId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error getting user-book rating:", error);
        throw error;
    }
};

export const createOrUpdateRating = async (userId, bookId, ratingRequest) => {
    try {
        const token = getToken();
        const response = await axios.post(
            `${base_url}/user/${userId}/book/${bookId}`,
            ratingRequest,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        toast.success("Gracias por tu calificación!");
        return response.data;
    } catch (error) {
        console.error("Error creating/updating rating:", error);
        throw error;
    }
};

export const deleteRating = async (ratingId) => {
    try {
        const token = getToken();
        await axios.delete(`${base_url}/${ratingId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error deleting rating:", error);
        throw error;
    }
};
