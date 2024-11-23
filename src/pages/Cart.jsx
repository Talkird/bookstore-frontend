import { useEffect, useState } from "react";
import CartItem from "../components/cart/CartItem";
import { formatPeso } from "../utils/format";
import BackButton from "../components/ui/BackButton";
import PurchasePopup from "../components/purchase/PurchasePopup";
import { getCart, clearCart } from "../redux/slice/cartSlice";
import { getUserId } from "../utils/token";
import Button from "../components/ui/Button";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const { items: cartItems, loading, error } = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const updateTotal = () => {
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.book.price * item.quantity,
      0
    );
    setTotal(newTotal);
  };

  const handleCheckout = () => {
    console.log("Checkout completed");
    setTotal(0);
  };

  const handleClearCart = async () => {
    const userId = getUserId();
    const confirmClear = window.confirm("¿Estás seguro de que deseas vaciar el carrito?");
    if (!confirmClear) {
      return;
    }
    dispatch(clearCart(userId));
  };

  useEffect(() => {
    const userId = getUserId();
    dispatch(getCart(userId));
  }, [dispatch]);

  useEffect(() => {
    updateTotal();
  }, [cartItems]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500"></div>
        <p className="ml-4 text-xl text-blue-700">
          Cargando, por favor espera...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <h2 className="mb-2 text-2xl font-semibold text-red-600">
          ¡Ups! Algo salió mal.
        </h2>
        <p className="text-lg text-gray-700">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex items-start justify-between">
        <BackButton className="mb-4" />
        <div className="mr-4 flex flex-col items-center rounded-md p-4 outline outline-primary/40">
          <PurchasePopup cartItems={cartItems} onCheckout={handleCheckout} />
          <p className="mt-4 text-lg font-semibold">
            Total: {formatPeso(total)}
          </p>
          <Button onClick={handleClearCart} className="mt-2">
            Vaciar Carrito
          </Button>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cartItems.map((item) => (
          <CartItem id={item.id} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
