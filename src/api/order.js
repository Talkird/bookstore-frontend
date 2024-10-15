const base_url = "http://localhost:8080/orders";

export const getOrdersByUserId = async (userId) => {
    const response = await fetch(`${base_url}/${userId}`);
    return response.json();
}
