import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../ui/Button";
import { ShoppingCart, X } from "lucide-react";
import { formatPeso } from "../../utils/format";
import { useNavigate } from "react-router-dom";

import { getUserId, getToken } from "../../utils/token";
import { addCartItem } from "../../api/cart";

function Product({ id, image, title, author, price }) {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false); // Estado para mostrar la confirmación

  const handleClick = () => {
    navigate(`/catalog/product/${encodeURIComponent(title)}`);
  };

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
      quantity: 1,
    });

    // Mostrar confirmación
    setShowConfirmation(true);

    // Ocultar la confirmación después de 5 segundos
    setTimeout(() => {
      setShowConfirmation(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col rounded-md border-2 border-primary/60 bg-primary/10 p-3 shadow">
      <img
        onClick={handleClick}
        className="mx-auto h-auto w-64 rounded-md transition hover:cursor-pointer hover:opacity-90"
        src={image}
        alt={title}
      />
      <div className="flex flex-1 flex-col justify-between py-2">
        <div>
          <h2 className="text-xl font-semibold transition hover:cursor-pointer hover:opacity-60">
            {title}
          </h2>
          {author && <p className="text-sm text-gray-500">{author}</p>}
          <p className="text-lg font-semibold">{formatPeso(price)}</p>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleAddToCart}
            className="mt-2 flex items-center gap-4 px-4 py-2 text-lg"
          >
            <ShoppingCart className="h-6 w-6" />
            Añadir
          </Button>
        </div>
      </div>
    {/* Mostrar mensaje de confirmación como popup */}
    {showConfirmation && (
        <div className="fixed top-4 right-4 w-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg p-4 z-50">
          <div className="flex justify-between items-center">
            <p className="font-bold text-gray-700">¡Ya agregamos tu producto al carrito!</p>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setShowConfirmation(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex items-center mt-4">
            <img className="h-20 w-20 rounded-md" src={image} alt={title} />
            <div className="ml-4">
              <p className="font-semibold text-gray-800">{title}</p>
              <p className="text-gray-600">1 x {formatPeso(price)}</p>
            </div>
          </div>
          <Button
            onClick={() => navigate("/cart")}
            className="mt-4 w-full bg-primary text-white py-2 rounded-md"
          >
            Ver Carrito
          </Button>
        </div>
      )}
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export default Product;
