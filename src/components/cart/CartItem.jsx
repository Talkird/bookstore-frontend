import PropTypes from "prop-types";
import Button from "../ui/Button";
import { Trash2 } from "lucide-react";
import { formatPeso } from "../../utils/format";
import { useState } from "react";

function CartItem({ image, title, price, initialQuantity = 1, onRemove }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center gap-4 rounded-md border-2 border-primary/60 bg-primary/10 p-3 shadow">
      <img
        className="w-32 rounded-md transition hover:cursor-pointer hover:opacity-90"
        src={image}
        alt={title}
      />
      <div className="flex-1">
        <h2 className="text-xl font-medium transition hover:cursor-pointer hover:opacity-60">
          {title}
        </h2>
        <p className="text-lg/2">{formatPeso(price)}</p>
        <div className="flex items-center gap-3 mt-2">
          <Button onClick={handleDecrease} disabled={quantity <= 1}>
            -
          </Button>
          <span className="text-lg" style={{ minWidth: "32px", textAlign: "center" }}>
            {quantity}
          </span>
          <Button onClick={handleIncrease}>+</Button>
        </div>
      </div>

      <div className="flex flex-col items-end pr-4">
        <p
          className="text-lg font-semibold"
        >
          {formatPeso(price * quantity)}
        </p>
        <Button className="mt-2 flex items-center gap-2" onClick={onRemove}>
          <Trash2 />
          Quitar
        </Button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  initialQuantity: PropTypes.number,
  onRemove: PropTypes.func,
};

export default CartItem;
