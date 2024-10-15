import Button from "../components/ui/Button";
import image from "../assets/image.webp";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = {
    id: 1,
    title: "La Casa Neville 2: No Quieras Nada Vil",
    author: "Marcela G. Radice",
    price: 8000,
    imageUrl: image,
    description:
      "La historia continúa en esta apasionante saga de La Casa Neville. Sigue a los personajes en una trama de misterio, poder y traición. No podrás dejar de leerlo.",
    moreDetails:
      "Este es un segundo libro en una serie emocionante que ha capturado los corazones de muchos lectores.",
  };

  return (
    <div className="container mx-auto my-10 rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-6 flex justify-end">
        <Button variant="outline" size="default" onClick={() => navigate(-1)}>
          Volver a la lista
        </Button>
      </div>

      <div className="flex flex-row items-center">
        <div className="mb-6 w-full md:mb-0 md:w-1/2">
          <img
            className="h-auto rounded-lg object-cover shadow-md"
            src={product.imageUrl}
            alt={product.title}
          />
        </div>

        <div className="w-full text-center md:w-1/2 md:pl-8 md:text-left">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            {product.title}
          </h2>
          <p className="mb-2 text-lg text-gray-600">Autor: {product.author}</p>
          <p className="mb-4 text-2xl font-semibold text-primary">
            ${product.price.toLocaleString()}
          </p>
          <p className="mb-4 leading-relaxed text-gray-600">
            {product.description}
          </p>
          <p className="mb-6 text-gray-500">{product.moreDetails}</p>

          <Button variant="default" size="default">
            Añadir al carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
