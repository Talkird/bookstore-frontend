import React, { useState } from "react";
import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import ShippingPopup from "../components/shippingPopup/ShippingPopup";
import PaymentPopup from "../components/payment/PaymentPopup";
import { useParams } from "react-router-dom";
import { Plus, Minus, Star } from "lucide-react";
import Input from "../components/ui/Input";

import { getUserId, getToken } from "../utils/token";
import { addCartItem } from "../api/cart";

const ProductDetail = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [rating, setRating] = useState(0);
  const [isShippingPopupOpen, setIsShippingPopupOpen] = useState(false);
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);
  

  const addToCart = () => {
    console.log("User tried adding to cart.");

    const token = getToken();
    const userId = getUserId();

    if (!token || !userId) {
      console.error("User is not authenticated.");
      return;
    }

    //TODO use params

    addCartItem(userId, {
      bookId: productId, 
      quantity: quantity,
    })
  }

  const product = {
    id: 2,
    title: "Espíritu Animal",
    author: "Magalí Tajes",
    price: 29299,
    imageUrl: "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/193f2d34-d463-476d-862c-319ddf255ea6/9789500770545.jpg",
    description: "La vida es un viaje que tiene muchos viajes adentro. Algunos nos conectan con nuestro corazón, otros nos cambian el rumbo. También están los que nos parten al medio. No hay viajes equivocados. Todos esconden un destino. En Espíritu Animal, volamos hacia adentro. ¡Prepárate para la aventura! Las turbulencias en este camino son inevitables, pero no pierdas la calma. El universo nos cuida, y las estrellas están de nuestro lado. Déjate guiar por lo invisible. Permite que el tiempo se detenga. Quizás, habitando lo desconocido, puedas al fin conocerte. ¡Despegamos!",
    isbn: "9789873683870",
    genre: "Novela",
    availability: 20,
    weight: "500g",
    publisher: "Sudamericana",
    pages: "344",
    userRating: 4.5, // Calificación promedio del producto
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(e.target.value, product.availability));
    setQuantity(value);
  };

  const increaseQuantity = () => {
    if (quantity < product.availability) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };


  const openShippingPopup = () => {
    setIsShippingPopupOpen(true);
  };

  const closeShippingPopup = () => {
    setIsShippingPopupOpen(false);
  };

  const openPaymentPopup = () => {
    setIsPaymentPopupOpen(true);
  };

  const closePaymentPopup = () => {
    setIsPaymentPopupOpen(false);
  };

  const finalPrice = product.price - product.price * (discount / 100);

  const handleRating = (star) => {
    setRating(star);
    console.log(
      `Rating enviado: ${star} estrellas para el producto ${product.title}`,
    );
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={40}
          onClick={() => handleRating(i)}
          className={`cursor-pointer ${i <= rating ? "text-yellow-500 " : "text-gray-400"}`}
        />,
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto max-w-2x1 my-10 rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-10">
        <BackButton />
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Imagen del producto */}
        <div className="md:w-1/3">
          <img
            className="rounded-lg object-cover shadow-md"
            src={product.imageUrl}
            alt={product.title}
          />
        </div>

        {/* Detalles del producto */}
        <div className="md:w-2/3">
          {/* Título y calificación */}
          <h2 className="text-5xl font-bold text-primary mb-4" style={{ fontSize: "4rem" }}>{product.title}</h2>          
          <h3 className="text-5x text-lg text-gray-500 mb-10" style={{ fontSize: "2rem" }}>{product.author}</h3>
          <div className="flex items-center mb-6">
            <p className="text-2xl font-semibold mr-2">{product.userRating.toFixed(1)}</p>
            <Star className="text-yellow-500" size={25} />
          </div>

          {/* Precio y stock */}
          <p className={`text-4xl font-semibold mb-4 text-green-600 ${discount}`}>
            ${finalPrice.toLocaleString()}
          </p>
          <p className="text-2xl text-primary mb-6">Stock: {product.availability}</p>

          {/* Botones de cantidad y agregar al carrito */}
          <div className="mb-6 flex items-center">
            <Button className="quantity-button" onClick={decreaseQuantity}>
              <Minus size={16} />
            </Button>
            <Input
              min="1"
              max={product.availability}
              value={quantity}
              onChange={handleQuantityChange}
              style={{ width: '190px' }} // Ajusta el valor según sea necesario
              className="mx-4 px-4 py-2 text-center"            />
            <Button onClick={increaseQuantity}>
              <Plus size={16} />
            </Button>
            <Button onClick={addToCart} className="ml-4">
              Agregar al carrito
            </Button>
          </div>

          {/* Calificación del producto */}
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-2">Calificar producto</h3>
            <div className="flex items-center">{renderStars()}</div>
          </div>

          {/* Botones de envío y pago */}
          <div className="flex gap-4">
            <Button onClick={openShippingPopup} variant="outline" className="text-lg px-6 py-3">Ver opciones de envío</Button>
            <Button onClick={openPaymentPopup} variant="outline" className="text-lg px-6 py-3">Ver medios de pago</Button>
          </div>
        </div>
      </div>

      {/* Descripción y especificaciones */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-3">Descripción</h3>
        <p className="text-5x text-lg text-gray-500 mb-10 text-justify" style={{ fontSize: "1.5rem", lineHeight: "1.5", marginRight: "20rem" }} >{product.description}</p>

        <h3 className="text-2xl font-bold mb-3">Especificaciones</h3>
        <table className="w-full text-lg text-gray-500 " style={{ fontSize: "1.5rem" }}>
          <tbody>
            <tr>
              <td className="py-2 ">ISBN: {product.isbn}</td>
            </tr>
            <tr>
              <td className="py-2 ">Categoría: {product.genre}</td>
            </tr>
            <tr>
              <td className="py-2 ">Peso: {product.weight}</td>
            </tr>
            <tr>
              <td className="py-2 ">Editorial: {product.publisher}</td>
            </tr>
            <tr>
              <td className="py-2 ">Páginas: {product.pages}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <PaymentPopup isOpen={isPaymentPopupOpen} onClose={closePaymentPopup} />
      <ShippingPopup isOpen={isShippingPopupOpen} onClose={closeShippingPopup} />
    </div>
  );
};

export default ProductDetail;