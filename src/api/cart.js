const base_url = "http://localhost:8080/carts";

export const getCart = async (userId) => {
    const response = await fetch(`${base_url}/${userId}`);
    return response.json();
}

export const clearCart = async (userId) => {
    const response = await fetch(`${base_url}/${userId}`, {
        method: "DELETE"
    });
    return response.json();
}

export const addCartItem = async (userId, cartItemRequest) => {
    const response = await fetch(`${base_url}/${userId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cartItemRequest)
    });
    return response.json();
}

export const updateCartItem = async (userId, cartItemId, cartItemRequest) => {
    const response = await fetch(`${base_url}/${userId}/${cartItemId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cartItemRequest)
    });
    return response.json();
}

export const deleteCartItem = async (userId, cartItemId) => {
    const response = await fetch(`${base_url}/${userId}/item/${cartItemId}`, {
        method: "DELETE"
    });
    return response.json();
}

export const checkoutCart = async (userId, orderRequest) => {
    const response = await fetch(`${base_url}/checkout/${userId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(orderRequest)
    });
    return response.json();
}
