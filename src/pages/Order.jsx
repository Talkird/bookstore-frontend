import React, { useState, useEffect } from "react";
import { getOrdersByUserId } from "../api/order"; 
import { getUserId } from "../utils/token";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userId = getUserId();
        const fetchedOrders = await getOrdersByUserId(userId);
        setOrders(fetchedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (orders.length === 0) {
    return <p>No tienes órdenes aún.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tus Órdenes</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {orders.map((order) => (
          <div key={order.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Orden #{order.id}</h2>
            <p><strong>Fecha:</strong> {new Date(order.date).toLocaleDateString()}</p>
            <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
            <h3 className="mt-2 font-semibold">Detalles:</h3>
            <ul>
              {order.items.map((item) => (
                <li key={item.id}>
                  {item.book.title} - {item.quantity} x ${item.book.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersPage;
