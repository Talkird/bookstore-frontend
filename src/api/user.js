import axios from "axios";
import { setToken, setUserId, setEmail, setRole } from "../utils/token";

const base_url = "http://localhost:8080/api/v1/auth";

export const login = async (userEmail, password) => {
    try {
        const response = await axios.post(`${base_url}/authenticate`, {
            email: userEmail,
            password
        });

        const { access_token, user_id, email, role } = response.data;

        setToken(access_token);
        setUserId(user_id);
        setEmail(email);
        setRole(role);
        
        return { access_token, user_id, email, role}; 

    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

export const register = async (name, userEmail, password, userRole = "USER") => {
    try {
        const response = await axios.post(`${base_url}/register`, {
            name,
            email: userEmail,
            password,
            role: userRole
        });
        console.log(response.data);
        
        const { access_token, user_id, email, role } = response.data; 

        setToken(access_token);        
        setUserId(user_id); 
        setEmail(email);
        setRole(role);
        
        return { access_token, user_id, email, role };
    } catch (error) {
        console.error("Error registering:", error);
        throw error; 
    }
};