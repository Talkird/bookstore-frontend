import PropTypes from "prop-types";
import Button from "../ui/Button";
import { ShoppingCart } from "lucide-react";
import { formatPeso } from "../../utils/format";
import { useNavigate } from "react-router-dom";

function Product({ image, title, price }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog/product");
  };

  return (
    <div className="rounded-md border-2 border-primary/60 bg-primary/10 p-3 shadow">
      <img
        onClick={handleClick}
        className="w-64 rounded-md transition hover:cursor-pointer hover:opacity-90"
        src={image}
        alt={title}
      />
      <div className="py-2">
        <h2 className="text-xl font-medium transition hover:cursor-pointer hover:opacity-60">
          {title}
        </h2>
        <p className="text-lg/2">{formatPeso(price)}</p>
      </div>

      <div className="flex justify-end">
        <Button className="mt-2 flex items-center gap-3">
          <ShoppingCart />
          Añadir
        </Button>
      </div>
    </div>
  );
}

Product.propTypes = {
  image: PropTypes.image,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default Product;
