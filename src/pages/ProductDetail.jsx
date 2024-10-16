import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import image from "../assets/image.webp";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  

  const product = {
    id: 1,
    title: "La Casa Neville 2: No Quieras Nada Vil",
    author: "Florencia Bonelli",
    price: 8000,
    imageUrl: image,
    description:
      "La historia continúa en esta apasionante saga de La Casa Neville. Sigue a los personajes en una trama de misterio, poder y traición. No podrás dejar de leerlo.",
    isbn: "9789500770224",
    category: "Ficción",
    availability: 30,
    weight: "400g",
    publisher: "Submarciana",
    publishDate: "06/03/2024",
    pages: "144"
  };

  return (
    <div className="container mx-auto my-10 rounded-lg bg-white p-6 shadow-lg">
      <div>
        <BackButton />
      </div>

      {/* Sección principal con la imagen y detalles del producto */}
      <div className="flex flex-col md:flex-row items-start">
        {/* Imagen del producto */}
        <div className="mb-6 w-full md:w-1/3">
          <img
            className="h-auto rounded-lg object-cover shadow-md"
            src={product.imageUrl}
            alt={product.title}
          />
        </div>

        {/* Detalles del producto */}
        <div className="w-full md:w-2/3 md:pl-8">
          <h2 className="mb-2 text-3xl font-bold text-primary">{product.title}</h2>
          <p className="text-xl text-gray-600 mb-4">{product.author}</p>
          <p className="mb-4 text-2xl font-semibold text-red-600">
            ${product.price.toLocaleString()}
          </p>

          <p className="mb-2 text-green-600">Stock: {product.availability}</p>

          <Button variant="default" size="default">
            Añadir al carrito
          </Button>

          {/* Opciones de compra */}
          <div className="mt-6">
            <p className="text-sm text-gray-500">
              *Precios válidos solo para compras online.
            </p>
          </div>
          <h3 className="mt-8 mb-4 text-xl font-bold text-gray-800">Descripción</h3>
          <p className="mb-4 text-gray-600">{product.description}</p>
          <h3 className="mb-4 text-xl font-bold text-gray-800">Especificaciones</h3>
        <table className="w-full text-left text-gray-600">
          <tbody>
            <tr>
              <td className="py-2 font-semibold">ISBN:  {product.isbn}</td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">Categoría: {product.category}</td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">Peso:  {product.weight}</td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">Editorial: {product.publisher}</td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">Fecha de publicación: {product.publishDate}</td>
            </tr>
            <tr>
              <td className="py-2 font-semibold">Páginas: {product.pages}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
