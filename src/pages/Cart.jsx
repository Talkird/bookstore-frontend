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
  }, []); // Depend only on userId to avoid infinite loop

  useEffect(() => {
    updateTotal();
  }, [cartItems]);

  const updateTotal = () => {
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.book.price * item.quantity,
      0,
    );
    setTotal(newTotal);
  };

  const handleCheckout = () => {
    console.log("Checkout completed");
    setCartItems([]); // Clear the cart on checkout
    setTotal(0); // Reset the total
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
            image={item.image}
            title={item.book.title}
            price={item.book.price}
            initialQuantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
