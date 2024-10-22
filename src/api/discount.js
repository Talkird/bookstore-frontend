import axios from "axios";
import { getToken } from "../utils/token";
import toast from "react-hot-toast";

const base_url = "http://localhost:8080/discounts";


export const applyDiscount = async (discountCode, totalPrice) => {
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
};


export const createDiscount = async (discount) => {
    try {
        const token = getToken();
        const response = await axios.post(`${base_url}/create`, discount, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating discount:", error);
        throw error;
    }
};


export const getActiveDiscounts = async () => {
    try {
        const token = getToken();
        const response = await axios.get(`${base_url}/active`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error getting active discounts:", error);
        throw error;
    }
};


export const updateDiscount = async (id, discount) => {
    try {
        const token = getToken();
        const response = await axios.put(`${base_url}/${id}`, discount, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error updating discount:", error);
        throw error;
    }
};


export const deleteDiscount = async (id) => {
    try {
        const token = getToken();
        await axios.delete(`${base_url}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error deleting discount:", error);
        throw error;
    }
};
