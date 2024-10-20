import PropTypes from "prop-types";
import Button from "../ui/Button";
import { ShoppingCart } from "lucide-react";
import { formatPeso } from "../../utils/format";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUserId, getToken, getRole } from "../../utils/token";
import { addCartItem } from "../../api/cart";
import ProductEditAdminPopup from "../administrador/ProductEditAdminPopup";

function Product({ id, image, title, author, price }) {
  const navigate = useNavigate();
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
          {role === "USER" && (
            <Button
              onClick={handleAddToCart}
              className="mt-2 flex items-center gap-4 px-4 py-2 text-lg"
            >
              <ShoppingCart className="h-6 w-6" />
              Añadir
            </Button>
          )}

  
          {role === "ADMIN" && (
            <Button
              onClick={togglePopup}
              className="mt-2 flex items-center gap-4 px-4 py-2 text-lg bg-red-500 text-white"
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
      </div>
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
