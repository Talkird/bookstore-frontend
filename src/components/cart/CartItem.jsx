import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Button from "../ui/Button";
import { Trash2 } from "lucide-react";
import { formatPeso } from "../../utils/format";
import { deleteCartItem, updateCartItem } from "../../redux/slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { getUserId } from "../../utils/token";

function CartItem({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = getUserId();

  const item = useSelector((state) =>
    state.cart.items.find((cartItem) => cartItem.id === id)
  );

  if (!item) {
    return null;
  }

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(
        updateCartItem({
          userId,
          cartItemId: id,
          cartItemRequest: { bookId: item.book.id, quantity: item.quantity - 1 },
        })
      );
    }
  };

  const handleIncrease = () => {
    dispatch(
      updateCartItem({
        userId,
        cartItemId: id,
        cartItemRequest: { bookId: item.book.id, quantity: item.quantity + 1 },
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteCartItem({ userId, cartItemId: id }));
  };

  const navigateToBook = () => {
    navigate(`/catalog/product/${encodeURIComponent(item.book.title)}`);
  };

  return (
    <div className="flex items-center gap-4 rounded-md border-2 border-primary/60 bg-primary/10 p-3 shadow">
      <img
        className="w-32 rounded-md transition hover:cursor-pointer hover:opacity-90"
        src={item.book.imagePath}
        alt={item.book.title}
        onClick={navigateToBook}
      />
      <div className="flex-1">
        <h2
          className="text-xl font-medium transition hover:cursor-pointer hover:opacity-60"
          onClick={navigateToBook}
        >
          {item.book.title}
        </h2>
        <p className="text-lg/2">{formatPeso(item.book.price)}</p>
        <div className="mt-2 flex items-center gap-3">
          <Button onClick={handleDecrease} disabled={item.quantity <= 1}>
            -
          </Button>
          <span
            className="text-lg"
            style={{ minWidth: "32px", textAlign: "center" }}
          >
            {item.quantity}
          </span>
          <Button onClick={handleIncrease}>+</Button>
        </div>
      </div>

      <div className="flex flex-col items-end pr-4">
        <p className="text-lg font-semibold">{formatPeso(item.book.price * item.quantity)}</p>
        <Button className="mt-2 flex items-center gap-2" onClick={handleDelete}>
          <Trash2 />
          Quitar
        </Button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired
};

export default CartItem;
