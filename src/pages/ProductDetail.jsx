import React, { useState } from "react";
import Button from "../components/ui/Button";
import BackButton from "../components/backButton/backButton";
import ShippingPopup from "../components/shippingPopup/ShippingPopup";
import image from "../assets/image.webp";
import { useParams, useNavigate } from "react-router-dom";
import { Plus, Minus } from "lucide-react"; // Asegúrate de tener estos íconos importados

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1); // Estado para manejar la cantidad seleccionada
  const [isShippingPopupOpen, setIsShippingPopupOpen] = useState(false); // Estado para el pop-up

  const product = {
    id: 2,
    title: "Espíritu Animal",
    author: "Magali Tajes",
    price: 29299,
    imageUrl: "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/193f2d34-d463-476d-862c-319ddf255ea6/9789500770545.jpg",
    description:
      "La vida es un viaje que tiene muchos viajes adentro. Algunos nos conectan con nuestro corazón, otros nos cambian el rumbo. También están los que nos parten al medio. No hay viajes equivocados. Todos esconden un destino. En Espíritu Animal, volamos hacia adentro. ¡Prepárate para la aventura! Las turbulencias en este camino son inevitables, pero no pierdas la calma. El universo nos cuida, y las estrellas están de nuestro lado. Déjate guiar por lo invisible. Permite que el tiempo se detenga. Quizás, habitando lo desconocido, puedas al fin conocerte. ¡Despegamos!",
    isbn: "9789873683870",
    category: "No ficción",
    availability: 20,
    weight: "500g",
    publisher: "Sudamericana",
    publishDate: "01/11/2022",
    pages: "344"
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(e.target.value, product.availability)); // Limita la cantidad a 1 y la disponibilidad
    setQuantity(value);
  };

  const increaseQuantity = () => {
    if (quantity < product.availability) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const addToCart = () => {
    // Lógica para añadir el producto al carrito con la cantidad seleccionada
    console.log(`Añadido ${quantity} unidades de ${product.title} al carrito.`);
  };

  const openShippingPopup = () => {
    setIsShippingPopupOpen(true);
  };

  const closeShippingPopup = () => {
    setIsShippingPopupOpen(false);
  };

  return (
    <div className="container mx-auto my-10 rounded-lg bg-white p-6 shadow-lg">
      <div>
        <BackButton />
      </div>

      {/* Sección principal con la imagen y detalles del producto */}
      <div className="flex flex-col md:flex-row items-start">
        {/* Imagen del producto */}
        <div className="mb-6 w-full md:w-1/3 h-full">
          <img
            className="h-full rounded-lg object-cover shadow-md"
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

          {/* Selección de cantidad y botón de añadir al carrito */}
          <div className="flex items-center mb-4">
            <button className="quantity-button" onClick={decreaseQuantity}>
              <Minus size={16} />
            </button>
            <input
              type="number"
              min="1"
              max={product.availability}
              value={quantity}
              onChange={handleQuantityChange}
              className="w-20 h-10 text-center border border-secondary mx-2"
            />
            <button className="quantity-button" onClick={increaseQuantity}>
              <Plus size={16} />
            </button>
            <Button onClick={addToCart} className="ml-4">
              Agregar al carrito
            </Button>
          </div>

          {/* Botón para abrir el popup de envío */}
          <Button onClick={openShippingPopup} className="mt-4">
            Ver opciones de envío
          </Button>

          <div className="mt-6">
            <p className="text-sm text-gray-500">
              *Precios válidos solo para compras online.
            </p>
          </div>
          <h3 className="mt-8 mb-4 text-xl font-bold text-gray-800">Descripción</h3>
          <p className="mb-4 text-gray-600 text-justify">{product.description}</p>
          <h3 className="mb-4 text-xl font-bold text-gray-800">Especificaciones</h3>
          <table className="w-full text-left text-gray-600">
            <tbody>
              <tr>
                <td className="py-2 font-semibold">ISBN: {product.isbn}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Categoría: {product.category}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Peso: {product.weight}</td>
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

      {/* Pop-up de opciones de envío */}
      <ShippingPopup isOpen={isShippingPopupOpen} onClose={closeShippingPopup} />
    </div>
  );
};

export default ProductDetail;
