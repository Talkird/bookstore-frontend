import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../ui/Button";
import { ShoppingCart, X } from "lucide-react";
import { formatPeso } from "../../utils/format";
import { useNavigate } from "react-router-dom";
import { getUserId, getToken, getRole } from "../../utils/token";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/slice/cartSlice";
import ProductEditAdminPopup from "../administrador/ProductEditAdminPopup";

function Product({
  id,
  image,
  title,
  author,
  price,
  isbn,
  stock,
  genre,
  year,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

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

  const handleClick = () => {
    navigate(`/catalog/product/${encodeURIComponent(title)}`);
  };

  const handleAddToCart = async () => {
    console.log("User tried adding to cart.");

    const token = getToken();
    const userId = getUserId();

    if (!token || !userId) {
      console.error("User is not authenticated.");
      return;
    }

    try {
      const item = {
        userId,
        bookId: id,
        quantity: 1,
      };
      await dispatch(addCartItem({ userId, cartItemRequest: item }));

      setShowConfirmation(true);

      setTimeout(() => {
        setShowConfirmation(false);
      }, 5000);
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
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
        <h2
          onClick={handleClick} 
          className="text-xl font-semibold transition hover:cursor-pointer hover:opacity-60"
        >
          {title}
        </h2>
          {author && <p className="text-sm text-gray-500">{author}</p>}
          <p className="text-lg font-semibold">{formatPeso(price)}</p>
        </div>

        <div className="flex justify-center">
          {role === "USER" && stock !== 0 && (
            <Button
              onClick={handleAddToCart}
              className="mt-2 flex items-center gap-4 px-4 py-2 text-lg"
            >
              <ShoppingCart className="h-6 w-6" />
              Añadir
            </Button>
          )}

          {role === "USER" && stock === 0 &&  (
            <p
              className="mt-2 flex font-semibold items-center gap-4 px-4 py-2 text-xl text-red-500 bg-red-300 rounded-md bg-opacity-25"
            >
              Agotado
            </p>
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
              product={{
                id,
                title,
                author,
                price,
                year,
                isbn,
                stock,
                genre,
                image,
              }}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onClose={togglePopup}
            />
          )}
        </div>
      </div>
      {/* Show confirmation as popup */}
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
            <img className="h-20 w-20 rounded-md" src={image} alt={title} />
            <div className="ml-4">
              <p className="font-semibold text-gray-800">{title}</p>
              <p className="text-gray-600">1 x {formatPeso(price)}</p>
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
