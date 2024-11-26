import { useState, useEffect } from "react";
import { getOrdersByUserId } from "../redux/slice/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../utils/token";
import Order from "../components/order/Order";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/ui/BackButton";
import Button from "../components/ui/Button";

function Orders() {
  const navigate = useNavigate();
  const {orders} = useSelector((state)=>state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersByUserId(getUserId()))
  }, [dispatch]);
  
  if (!orders || orders.length === 0) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-gray-100 p-12">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">Mis Órdenes</h1>
        <p className="text-lg text-gray-600">Aún no has realizado ninguna orden.</p>
        <Button
          className="mt-6"
          onClick={() => navigate("/")} 
        >
          Volver a la Tienda
        </Button>
      </div>
    );
  }

  return (
    <div className="flex h-auto flex-col gap-8 bg-gray-100 p-12">
      <div className="ml-20 flex justify-start border-gray-200">
        <BackButton />
      </div>
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
            preDiscountPrice={order.pre_discount_price}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
