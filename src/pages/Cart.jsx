import CartItem from "../components/cart/CartItem";
import image from "../assets/image.webp";

function Cart() {
  const cartItems = [
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
  ];

  const handleRemove = (id) => {
    console.log(`Item with id ${id} removed from cart`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          initialQuantity={item.quantity}
          onRemove={() => handleRemove(item.id)}
        />
      ))}
    </div>
  );
}

export default Cart;
