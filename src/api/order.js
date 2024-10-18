import axios from "axios";
import { getToken } from "../utils/token";

const base_url = "http://localhost:8080/orders";

export const getOrdersByUserId = async (userId) => {
    try {
        const token = getToken();
        const response = await axios.get(`${base_url}/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;

    } catch (error) {
        console.error("Error getting orders:", error);
        throw error;
    }
}
