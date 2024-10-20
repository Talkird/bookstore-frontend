import { useState, useEffect } from "react";
import CartItem from "../components/cart/CartItem";
import { formatPeso } from "../utils/format";
import BackButton from "../components/ui/BackButton";
import PurchasePopup from "../components/purchase/PurchasePopup";
import { getCart } from "../api/cart";
import { getUserId } from "../utils/token";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const userId = getUserId();
    getCart(userId)
      .then((fetchedCartItems) => {
        setCartItems(fetchedCartItems);
      })
      .catch((error) => console.error("Error getting cart:", error));
  }, []);

  useEffect(() => {
    updateTotal();
  }, [cartItems]);

  const updateTotal = () => {
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.book.price * item.quantity,
      0
    );
    setTotal(newTotal);
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleCheckout = () => {
    console.log("Checkout completed");
    setCartItems([]);
    setTotal(0);
  };

  return (
    <div className="p-4">
      <div className="flex items-start justify-between">
        <BackButton className="mb-4" />
        <div className="mr-4 flex flex-col items-center rounded-md p-4 outline outline-primary/40">
          <PurchasePopup cartItems={cartItems} onCheckout={handleCheckout} />
          <p className="mt-4 text-lg font-semibold">
            Total: {formatPeso(total)}
          </p>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cartItems.map((item) => (
          <CartItem
            id={item.id}
            bookId={item.book.id}
            key={item.id}
            image={item.book.imagePath}
            title={item.book.title}
            price={item.book.price}
            initialQuantity={item.quantity}
            onRemove={handleRemoveItem}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
