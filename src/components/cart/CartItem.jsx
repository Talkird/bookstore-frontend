import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../ui/Button";
import { Trash2 } from "lucide-react";
import { formatPeso } from "../../utils/format";
import { getUserId } from "../../utils/token";
import { deleteCartItem, updateCartItem } from "../../api/cart";
import { useNavigate } from "react-router-dom";

function CartItem({ id, bookId, image, title, price, initialQuantity = 1, onRemove, onQuantityChange }) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const navigate = useNavigate();

  useEffect(() => {
    handleQuantityChange();
  }, [quantity]);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(id, quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    onQuantityChange(id, quantity + 1);
  };

  const handleQuantityChange = () => {
    const userId = getUserId();
    updateCartItem(userId, id, { id, bookId, quantity });
  };

  const handleDelete = async () => {
    const userId = getUserId();
    try {
      await deleteCartItem(userId, id);
      onRemove(id);
    } catch (error) {
      console.error("Failed to delete the cart item", error);
    }
  };

  const navigateToBook = () => {
    navigate(`/product/${encodeURIComponent(title)}`);
  };

  return (
    <div className="flex items-center gap-4 rounded-md border-2 border-primary/60 bg-primary/10 p-3 shadow">
      <img
        className="w-32 rounded-md transition hover:cursor-pointer hover:opacity-90"
        src={image}
        alt={title}
        onClick={navigateToBook}
      />
      <div className="flex-1">
        <h2
          className="text-xl font-medium transition hover:cursor-pointer hover:opacity-60"
          onClick={navigateToBook}
        >
          {title}
        </h2>
        <p className="text-lg/2">{formatPeso(price)}</p>
        <div className="mt-2 flex items-center gap-3">
          <Button onClick={handleDecrease} disabled={quantity <= 1}>
            -
          </Button>
          <span
            className="text-lg"
            style={{ minWidth: "32px", textAlign: "center" }}
          >
            {quantity}
          </span>
          <Button onClick={handleIncrease}>+</Button>
        </div>
      </div>

      <div className="flex flex-col items-end pr-4">
        <p className="text-lg font-semibold">{formatPeso(price * quantity)}</p>
        <Button className="mt-2 flex items-center gap-2" onClick={handleDelete}>
          <Trash2 />
          Quitar
        </Button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  initialQuantity: PropTypes.number,
  onRemove: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default CartItem;
