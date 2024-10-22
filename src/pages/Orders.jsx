import { useState, useEffect } from "react";
import { getOrdersByUserId } from "../api/order";
import { getUserId } from "../utils/token";
import Order from "../components/order/Order";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersByUserId(getUserId())
      .then((orders) => setOrders(orders))
      .catch((error) => console.error("Error getting orders:", error));
  }, []);

  return (
    <div className="flex flex-col gap-8 bg-gray-100 p-12">
      <h1 className="mb-8 rounded-md text-center text-5xl font-bold text-gray-800">
        Mis Órdenes
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {orders.map((order) => (
          <Order
            key={order.id}
            customerName={order.customer_name}
            customerAddress={order.shipping_address}
            customerEmail={order.customer_email}
            customerPhone={order.customer_phone}
            total={order.total}
            paymentMethod={order.payment_method}
            books={order.items}
            id={order.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
