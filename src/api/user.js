import axios from "axios";
import { setToken } from "../utils/token";

const base_url = "http://localhost:8080/api/v1/auth";

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${base_url}/authenticate`, {
            email,
            password
        });
        const { access_token } = response.data;
        setToken(access_token); 
        return { access_token }; 
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}

export const register = async (name, email, password, role = "ADMIN") => {
    try {
        const response = await axios.post(`${base_url}/register`, {
            name,
            email,
            password,
            role
        });
        const { access_token } = response.data; 
        setToken(access_token); 
        return { access_token };
    } catch (error) {
        console.error("Error registering:", error);
        throw error; 
    }
};


