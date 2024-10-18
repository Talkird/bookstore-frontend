import { useState } from "react";
import CartItem from "../components/cart/CartItem";
import image from "../assets/image.webp";
import Button from "../components/ui/Button";
import { formatPeso } from "../utils/format";
import BackButton from "../components/ui/BackButton";

function Cart() {
  const [isPurchasePopupOpen, setIsPurchasePopupOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: image,
      title: "La Casa Neville",
      price: 20000,
      quantity: 1,
    },
    {
      id: 2,
      image: image,
      title: "El Castillo Encantado",
      price: 15000,
      quantity: 2,
    },
    {
      id: 3,
      image: image,
      title: "El Bosque Mágico",
      price: 10000,
      quantity: 3,
    },
    {
      id: 4,
      image: image,
      title: "La Montaña Mística",
      price: 25000,
      quantity: 1,
    },
    {
      id: 5,
      image: image,
      title: "La Isla Perdida",
      price: 18000,
      quantity: 2,
    },
    {
      id: 6,
      image: image,
      title: "El Mar de los Sueños",
      price: 22000,
      quantity: 1,
    },
  ]);

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    console.log(`Item with id ${id} removed from cart`);
  };

  const handleCheckout = () => {
    setIsPurchasePopupOpen(true);
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-start">
        <BackButton className="mb-4"/>
        <div className="flex flex-col mr-4 p-4 outline outline-primary/40 rounded-md items-center">
          <Button className="mb-4" onClick={handleCheckout}>
            Comprar
          </Button>
          <p className="text-lg font-semibold">Total: {formatPeso(total)}</p>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            initialQuantity={item.quantity}
            onRemove={() => handleRemove(item.id)}
            onQuantityChange={(newQuantity) =>
              updateQuantity(item.id, newQuantity)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
