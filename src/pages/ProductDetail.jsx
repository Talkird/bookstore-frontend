import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import ShippingPopup from "../components/shippingPopup/ShippingPopup";
import PaymentPopup from "../components/payment/PaymentPopup";
import { useParams } from "react-router-dom";
import { Plus, Minus, Star } from "lucide-react";
import Input from "../components/ui/Input";
import { getUserId, getToken } from "../utils/token";
import { addCartItem } from "../api/cart";
import { getBooks } from "../api/book";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const { title } = useParams();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [rating, setRating] = useState(0);
  const [isShippingPopupOpen, setIsShippingPopupOpen] = useState(false);
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);

  useEffect(() => {
    handleQuantityChange();
  }, [quantity]);

  useEffect(() => {
    getBooks()
      .then((books) => {
        setBooks(books);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error getting books:", error);
        setError("Error fetching product data");
        setLoading(false);
      });
  }, []);

  const product = books.find(
    (book) => book.title === decodeURIComponent(title),
  );

  const handleAddToCart = () => {
    console.log("User tried adding to cart.");

    const token = getToken();
    const userId = getUserId();

    if (!token || !userId) {
      console.error("User is not authenticated.");
      return;
    }

    addCartItem(userId, {
      bookId: id,
      quantity: quantity,
    });
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(e.target.value, product?.stock || 1));
    setQuantity(value);
  };

  const increaseQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const openShippingPopup = () => {
    setIsShippingPopupOpen(true);
  };

  const closeShippingPopup = () => {
    setIsShippingPopupOpen(false);
  };

  const openPaymentPopup = () => {
    setIsPaymentPopupOpen(true);
  };

  const closePaymentPopup = () => {
    setIsPaymentPopupOpen(false);
  };

  const finalPrice = product
    ? product.price - product.price * (discount / 100)
    : 0;

  const handleRating = (star) => {
    setRating(star);
    console.log(
      `Rating enviado: ${star} estrellas para el producto ${product?.title}`,
    );
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={40}
          onClick={() => handleRating(i)}
          className={`cursor-pointer ${i <= rating ? "text-yellow-500" : "text-gray-400"}`}
        />,
      );
    }
    return stars;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-2x1 container mx-auto my-10 rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-10">
        <BackButton />
      </div>

      <div className="flex flex-col gap-10 md:flex-row">
        {/* Imagen del producto */}
        <div className="md:w-2/3">
          <img
            style={{ width: "90%", height: "auto" }}
            className="rounded-lg object-cover shadow-md"
            src={product.imagePath}
            alt={product.title}
          />
        </div>

        {/* Detalles del producto */}
        <div className="mr-10 md:w-2/3">
          <h2
            className="mb-4 mt-4 text-5xl font-bold text-primary"
            style={{ fontSize: "4rem" }}
          >
            {product.title}
          </h2>
          <h3
            className="text-5x mb-10 text-lg text-gray-500"
            style={{ fontSize: "2rem" }}
          >
            {product.author}
          </h3>
          <div className="mb-6 flex items-center">
            <p className="mr-2 text-2xl font-semibold">
              {product.rating.toFixed(1)}
            </p>
            <Star className="text-yellow-500" size={25} />
          </div>

          <p className="mb-4 text-4xl font-semibold text-green-600">
            ${finalPrice.toLocaleString()}
          </p>
          <p className="mb-6 text-2xl text-primary">Stock: {product.stock}</p>

          <div className="mb-6 flex items-center">
            <Button className="quantity-button" onClick={decreaseQuantity}>
              <Minus size={16} />
            </Button>
            <Input
              min="1"
              max={product.stock}
              value={quantity}
              onChange={handleQuantityChange}
              style={{ width: "190px" }}
              className="mx-4 px-4 py-2 text-center"
            />
            <Button onClick={increaseQuantity}>
              <Plus size={16} />
            </Button>
            <Button
              onClick={handleAddToCart}
              className="w-50 h-18 ml-4 text-center text-lg"
            >
              Agregar al carrito
            </Button>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-3xl font-bold">Calificar producto</h3>
            <div className="flex items-center">{renderStars()}</div>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={openShippingPopup}
              variant="outline"
              className="px-6 py-3 text-lg"
            >
              Ver opciones de envío
            </Button>
            <Button
              onClick={openPaymentPopup}
              variant="outline"
              className="px-6 py-3 text-lg"
            >
              Ver medios de pago
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="mb-3 text-2xl font-bold">Descripción</h3>
        <p
          className="text-5x mb-10 text-justify text-lg text-gray-500"
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.5",
            marginRight: "20rem",
          }}
        >
          {product.description}
        </p>

        <h3 className="mb-3 text-2xl font-bold">Especificaciones</h3>
        <table
          className="w-full text-lg text-gray-500"
          style={{ fontSize: "1.5rem" }}
        >
          <tbody>
            <tr>
              <td className="py-2">ISBN: {product.isbn}</td>
            </tr>
            <tr>
              <td className="py-2">Categoría: {product.genre}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <PaymentPopup isOpen={isPaymentPopupOpen} onClose={closePaymentPopup} />
      <ShippingPopup
        isOpen={isShippingPopupOpen}
        onClose={closeShippingPopup}
      />
    </div>
  );
};

export default ProductDetail;
