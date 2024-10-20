import axios from "axios";
import { setToken, setUserId } from "../utils/token";

const base_url = "http://localhost:8080/api/v1/auth";

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${base_url}/authenticate`, {
            email,
            password
        });

        const { access_token, user_id } = response.data;

        setToken(access_token);
        setUserId(user_id);
        
        return { access_token, user_id }; 

    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};


export const register = async (name, email, password, role = "ADMIN") => {
    try {
        const response = await axios.post(`${base_url}/register`, {
            name,
            email,
            password,
            role
        });
        console.log(response.data);
        
        const { access_token, user_id } = response.data; 

        setToken(access_token);        
        setUserId(user_id); 
        
        return { access_token, user_id };
    } catch (error) {
        console.error("Error registering:", error);
        throw error; 
    }
};
