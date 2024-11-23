import Popup from "reactjs-popup";
import Button from "../ui/Button";
import Input from "../ui/Input";
import propTypes from "prop-types";
import { useState } from "react";
import { X } from "lucide-react";
import { checkoutCart } from "../../redux/slice/cartSlice";
import { getUserId } from "../../utils/token";
import { applyDiscount } from "../../redux/slice/discountSlice";
import { formatPeso } from "../../utils/format";
import { useDispatch, useSelector } from "react-redux";

const PurchasePopup = ({ cartItems }) => {
  const dispatch = useDispatch();

  const { discountAmount, totalPriceWithDiscount } = useSelector(
    (state) => state.discount
  );

  const [paymentMethod, setPaymentMethod] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [coupon, setCoupon] = useState("");

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.book.price * item.quantity,
    0
  );

  const handleApplyDiscount = async () => {
    const userId = getUserId();
    try {
      await dispatch(applyDiscount({ userId, coupon, totalPrice }));
    } catch (error) {
      console.error("Failed to apply discount", error);
    }
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    const userId = getUserId();

    dispatch(
      checkoutCart({
        userId,
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        shippingAddress: address,
        paymentMethod,
        discountCode: coupon,
        items: cartItems,
      })
    );
  };

  return (
    <Popup
      trigger={<Button className="rounded text-white">Comprar</Button>}
      modal
      contentStyle={{
        padding: "0",
        borderRadius: "0.5rem",
        overflow: "hidden",
      }}
    >
      {(close) => (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative h-auto w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
            <button
              onClick={close}
              className="absolute right-4 top-4 text-gray-600 hover:text-gray-800"
            >
              <X size={24} />
            </button>

            <h1 className="mb-4 text-2xl font-bold text-gray-800">
              Carrito de Compras
            </h1>

            <div className="mb-4 max-h-48 space-y-4 overflow-y-auto">
              {cartItems.length === 0 ? (
                <p className="text-gray-600">Tu carrito está vacío.</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b p-2"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.book.imagePath}
                        alt={item.book.title}
                        className="mr-2 h-16 w-16 rounded-lg object-cover"
                      />
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800">
                          {item.book.title}
                        </h2>
                        <p className="text-gray-600">
                          Cantidad: {item.quantity}
                        </p>
                        <p className="text-gray-600">
                          {formatPeso(item.book.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mb-4">
              <h2 className="mb-5 text-lg font-bold text-gray-800">
                Resumen de Compra
              </h2>
              <p className="text-lg font-semibold text-gray-800">
                Total Original: {formatPeso(totalPrice)}
              </p>
              {discountAmount > 0 && (
                <p className="text-lg font-semibold text-green-800">
                  Total con descuento: {formatPeso(totalPriceWithDiscount)}
                </p>
              )}
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <Input
                  type="text"
                  placeholder="Ingresa tu cupón"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <Button onClick={handleApplyDiscount}>
                  Aplicar cupón
                </Button>
              </div>
            </div>

            <h2 className="mb-2 mt-6 text-lg font-bold text-gray-800">
              Completa tu compra
            </h2>

            <form
              onSubmit={handleCheckout}
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Nombre:
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Correo Electrónico:
                </label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700">
                  Teléfono:
                </label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  id="phone"
                  required
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-gray-700">
                  Dirección de Envío:
                </label>
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  id="address"
                  required
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="paymentMethod" className="block text-gray-700">
                  Método de Pago:
                </label>
                <select
                  id="paymentMethod"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                  className="w-full rounded border-gray-300 p-2"
                >
                  <option value="">Seleccione un método</option>
                  <option value="CREDIT_CARD">Tarjeta de Crédito</option>
                  <option value="DEBIT_CARD">Tarjeta de Débito</option>
                  <option value="MERCADO_PAGO">Mercado Pago</option>
                </select>
              </div>

              <Button type="submit" className="col-span-2 mt-4">
                Confirmar Compra
              </Button>
            </form>
          </div>
        </div>
      )}
    </Popup>
  );
};

PurchasePopup.propTypes = {
  cartItems: propTypes.array.isRequired,
};

export default PurchasePopup;
