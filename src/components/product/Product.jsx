import PropTypes from "prop-types";
import Button from "../ui/Button";
import { ShoppingCart } from "lucide-react";
import { formatPeso } from "../../utils/format";

function Product({ image, title, price }) {
  return (
    <div className="rounded-md border-2 border-primary/60 bg-primary/10 p-3 shadow">
      <img className="hover:opacity-90 hover:cursor-pointer transition w-64 rounded-md" src={image} alt={title} />
      <div className="py-2">
        <h2 className="hover:opacity-60 hover:cursor-pointer transition text-xl font-medium">{title}</h2>
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
