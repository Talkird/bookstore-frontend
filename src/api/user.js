import axios from "axios";
import { setToken } from "../utils/token";

const base_url = "http://localhost:8080/api/v1/auth";

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${base_url}/authenticate`, {
            email,
            password
        });
        const { token } = response.data;
        setToken(token);
        return response.data;

    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

export const register = async (name, email, password, role="USER") => {
    try {
        const response = await axios.post(`${base_url}/register`, {
            name,
            email,
            password,
            role
        });
        const { token } = response.data; 
        setToken(token); 
        return response.data;

    } catch (error) {
        console.error("Error registering:", error);
        throw error;
    }
}

