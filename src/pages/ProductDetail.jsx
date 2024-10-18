import React, { useState } from "react";
import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import ShippingPopup from "../components/shippingPopup/ShippingPopup";
import PaymentPopup from "../components/payment/PaymentPopup";
import { useParams } from "react-router-dom";
import { Plus, Minus, Star } from "lucide-react";
import Input from "../components/ui/Input";

const ProductDetail = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [rating, setRating] = useState(0);
  const [isShippingPopupOpen, setIsShippingPopupOpen] = useState(false);
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);

  const product = {
    id: 2,
    title: "Espíritu Animal",
    author: "Magali Tajes",
    price: 29299,
    imageUrl:
      "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/193f2d34-d463-476d-862c-319ddf255ea6/9789500770545.jpg",
    description: "La vida es un viaje que tiene muchos viajes adentro...",
    isbn: "9789873683870",
    genre: "Novela",
    availability: 20,
    year: "2022",
    userRating: 4.5,
  };

  const applyDiscount = (coupon) => {
    const validCoupons = {
      DESCUENTO10: 10,
      DESCUENTO20: 20,
    };

    if (validCoupons[coupon]) {
      setDiscount(validCoupons[coupon]);
      return true;
    } else {
      return false;
    }
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

  const addToCart = () => {
    console.log(`Añadido ${quantity} unidades de ${product.title} al carrito.`);
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
          className={`cursor-pointer ${i <= rating ? "text-yellow-500" : "text-gray-400"}`}
        />,
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto my-10 rounded-lg bg-white p-8 shadow-lg">
      <div className="mb-5">
        <BackButton />
      </div>

      <div className="mb-10 flex flex-col">
        <h2 className="text-5xl font-bold text-primary">{product.title}</h2>
        <div className="mt-2 flex items-center">
          <p className="mr-2 text-3xl font-semibold">
            {product.userRating.toFixed(1)}
          </p>
          <Star className="text-yellow-500" size={30} />
        </div>
      </div>

      <div className="flex flex-row items-start">
        <div className="mb-6 h-full w-full md:w-1/3">
          <img
            className="h-160 w-128 rounded-lg object-cover shadow-md"
            src={product.imageUrl}
            alt={product.title}
          />
        </div>

        <div className="flex w-auto flex-col pl-8">
          <p
            className={`mb-12 text-7xl font-semibold ${discount ? "text-green-600" : "text-primary"}`}
          >
            ${finalPrice.toLocaleString()}
          </p>

          {discount > 0 && (
            <p className="mb-4 text-sm text-gray-500">
              Descuento aplicado: {discount}%
            </p>
          )}

          <p className="mb-4 text-xl text-primary">
            Stock: {product.availability}
          </p>

          <div className="mb-6 flex items-center">
            <Button className="quantity-button" onClick={decreaseQuantity}>
              <Minus size={16} />
            </Button>
            <Input
              min="1"
              max={product.availability}
              value={quantity}
              onChange={handleQuantityChange}
              className="mx-4 w-3/12 px-4 py-2 text-center"
            />
            <Button className="quantity-button" onClick={increaseQuantity}>
              <Plus size={16} />
            </Button>
            <Button onClick={addToCart} className="ml-4">
              Agregar al carrito
            </Button>
          </div>

          <div className="mb-8 mt-6">
            <h3 className="mb-1 text-3xl font-bold">Calificar producto</h3>
            <div className="mt-4 flex items-center">{renderStars()}</div>
          </div>

          <div className="mt-10 flex">
            <Button
              onClick={openShippingPopup}
              variant="outline"
              className="mr-4"
            >
              Ver opciones de envío
            </Button>
            <Button
              onClick={openPaymentPopup}
              variant="outline"
              className="ml-4"
            >
              Ver medios de pago
            </Button>
          </div>
        </div>

        <div className="ml-20 mt-4 w-full max-w-sm md:mt-0 md:w-1/3 md:pl-8">
          <h3 className="mb-2 mt-4 text-2xl font-bold text-gray-800">
            Descripción
          </h3>
          <p className="mb-2 text-justify text-lg text-gray-600">
            {product.description}
          </p>
          <h3 className="mb-2 text-2xl font-bold text-gray-800">
            Especificaciones
          </h3>
          <table className="w-full text-left text-gray-600">
            <tbody>
              <tr>
                <td className="py-1 text-lg font-semibold">
                  Autor: {product.author}
                </td>
              </tr>
              <tr>
                <td className="py-1 text-lg font-semibold">
                  Género: {product.genre}
                </td>
              </tr>
              <tr>
                <td className="py-1 text-lg font-semibold">
                  Año de publicación: {product.year}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <PaymentPopup isOpen={isPaymentPopupOpen} onClose={closePaymentPopup} />
      <ShippingPopup
        isOpen={isShippingPopupOpen}
        onClose={closeShippingPopup}
      />
    </div>
  );
};

export default ProductDetail;
