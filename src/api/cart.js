import axios from 'axios';
import { getToken } from '../utils/token';

const base_url = "http://localhost:8080";


export const getCart = async (userId) => {
  try {
    const token = getToken();
    const response = await axios.get(`${base_url}/carts/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    
    return response.data;
  } catch (error) {
    console.error("Error getting cart:", error);
    throw error;
  }
};

export const clearCart = async (userId) => {
  try {
    const token = getToken();
    const response = await axios.delete(`${base_url}/carts/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
  } catch (error) {
    console.error("Error clearing cart:", error);
    throw error;
  }
};

export const addCartItem = async (userId, cartItemRequest) => {
  try {
    const token = getToken();
    const response = await axios.post(`${base_url}/carts/${userId}`, cartItemRequest, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    console.log(response.data);
    return response.data;

  } catch (error) {
    console.error("Error adding cart item:", error);
    throw error;
  }
};

export const updateCartItem = async (userId, cartItemId, cartItemRequest) => {
  try {
    const token = getToken();
    const response = await axios.put(`${base_url}/carts/${userId}/${cartItemId}`, cartItemRequest, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error updating cart item:", error);
    throw error;
  }
};

export const deleteCartItem = async (userId, cartItemId) => {
  try {
    const token = getToken();
    const response = await axios.delete(`${base_url}/carts/${userId}/item/${cartItemId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting cart item:", error);
    throw error;
  }
};

export const checkoutCart = async (userId, orderRequest) => {
  try {
    const token = getToken();
    const response = await axios.post(`${base_url}/carts/checkout/${userId}`, orderRequest, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    return response.data;

  } catch (error) {
    console.error("Error checking out cart:", error);
    throw error;
  }
};
