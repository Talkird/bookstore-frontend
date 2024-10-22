import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import ShippingPopup from "../components/shippingPopup/ShippingPopup";
import PaymentPopup from "../components/payment/PaymentPopup";
import { useParams, useNavigate } from "react-router-dom";
import { Plus, Minus, Star, X, ShoppingCart } from "lucide-react";
import Input from "../components/ui/Input";
import { getUserId, getToken, getRole } from "../utils/token";
import { addCartItem } from "../api/cart";
import { getBooks } from "../api/book";
import { useState, useEffect } from "react";
import { formatPeso } from "../utils/format";
import ProductEditAdminPopup from "../components/administrador/ProductEditAdminPopup";


const ProductDetail = () => {
  const { title } = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleEdit = (productId, updatedData) => {
    console.log("Producto editado:", productId, updatedData);
  };

  const handleDelete = (productId) => {
    console.log("Producto eliminado:", productId);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const role = getRole();

  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false); // Estado para mostrar la confirmación

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [rating, setRating] = useState(0);
  const [isShippingPopupOpen, setIsShippingPopupOpen] = useState(false);
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);

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
      bookId: product.id,
      quantity: quantity,
    });

    // Mostrar confirmación
    setShowConfirmation(true);

    // Ocultar la confirmación después de 5 segundos
    setTimeout(() => {
      setShowConfirmation(false);
    }, 5000);
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
            {role === "USER" && (
              <>
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
              </>
            )}
            {role === "ADMIN" && (
              <Button
                onClick={togglePopup}
                className="mt-2 flex items-center gap-4 bg-red-500 px-4 py-2 text-lg text-white"
              >
                Administrar Producto
              </Button>
            )}

            {isPopupOpen && (
              <ProductEditAdminPopup
                product={{ id, title, author, price }}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onClose={togglePopup}
              />
            )}
          </div>

          {/* Mostrar mensaje de confirmación como popup */}
          {showConfirmation && (
            <div className="fixed right-4 top-4 z-50 w-80 rounded-lg border-2 border-gray-200 bg-white p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <p className="font-bold text-gray-700">
                  ¡Ya agregamos tu producto al carrito!
                </p>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowConfirmation(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-4 flex items-center">
                <img
                  className="h-20 w-20 rounded-md"
                  src={product.imagePath}
                  alt={product.title}
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">{product.title}</p>
                  <p className="text-gray-600">
                    1 x {formatPeso(product.price)}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => navigate("/cart")}
                className="mt-4 w-full rounded-md bg-primary py-2 text-white"
              >
                Ver Carrito
              </Button>
            </div>
          )}
          {role === "USER" && (
            <div className="mb-6">
              <h3 className="mb-2 text-3xl font-bold">Calificar producto</h3>
              <div className="flex items-center">{renderStars()}</div>
            </div>
          )}
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
