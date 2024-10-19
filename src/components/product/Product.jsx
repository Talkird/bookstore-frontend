import PropTypes from "prop-types";
import Button from "../ui/Button";
import { ShoppingCart,Settings } from "lucide-react";
import { formatPeso } from "../../utils/format";
import { useNavigate } from "react-router-dom";
import ProductAdminPopup from "../administrador/ProductAdminPopup";

function Product({ image, title, author, price }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog/product");
  };

  return (
    <div className="rounded-md border-2 border-primary/60 bg-primary/10 p-3 shadow">
      <img
        onClick={handleClick}
        className="w-64 h-auto mx-auto rounded-md transition hover:cursor-pointer hover:opacity-90"
        src={image}
        alt={title}
      />
      <div className="py-2">
        <h2 className="text-xl font-semibold transition hover:cursor-pointer hover:opacity-60">
          {title}
        </h2>
        {author && (
          <p className="text-sm text-gray-500">
            {author}
          </p>
        )}
        <p className="text-lg font-semibold">{
        formatPeso(price)}</p>
      </div>

      <div className="flex justify-left space-x-4">
        <Button className="mt-2 flex items-center gap-2 py-1 px-2 text-md ">
          <ShoppingCart className="w-5 h-5  " />
          Añadir
        </Button>
        <Button className="mt-2 flex items-right gap-2 py-1 px-2 text-md ">
          <Settings size={27} strokeWidth={1.25} />
          Editar
        </Button>

          

      </div>
    </div>
  );
}

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export default Product;

