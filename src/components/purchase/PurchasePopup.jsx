import Popup from "reactjs-popup";
import Button from "../ui/Button";
import Input from "../ui/Input";
import propTypes from "prop-types";

const PurchasePopup = ({ cartItems, onCheckout }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <Popup
      trigger={<Button className="rounded text-white">Ver Carrito</Button>}
      modal
      contentStyle={{ width: "95%", maxWidth: "600px" }}
    >
      {(close) => (
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Carrito de Compras
          </h1>

          <div className="mb-4 max-h-72 space-y-4 overflow-y-auto">
            {" "}
            {/* Contenedor deslizante más grande */}
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
                      src={item.imageUrl}
                      alt={item.title}
                      className="mr-2 h-16 w-16 rounded-lg object-cover" // Tamaño de la imagen ajustado
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h2>
                      <p className="text-gray-600">Cantidad: {item.quantity}</p>
                      <p className="text-gray-600">
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-800">
              Resumen de Compra
            </h2>
            <p className="text-lg font-semibold text-gray-800">
              Total: ${totalPrice.toLocaleString()}
            </p>
          </div>

          <h2 className="mb-2 text-lg font-bold text-gray-800">
            Completa tu compra
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const address = e.target.address.value;
              onCheckout({ name, email, address, cartItems });
              close();
            }}
            className="space-y-2"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Nombre:
              </label>
              <Input type="text" id="name" required />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700">
                Correo Electrónico:
              </label>
              <Input type="email" id="email" required />
            </div>

            <div>
              <label htmlFor="address" className="block text-gray-700">
                Dirección de Envío:
              </label>
              <Input type="text" id="address" required />
            </div>

            <Button type="submit" className="mt-4">
              Confirmar Compra
            </Button>
          </form>
        </div>
      )}
    </Popup>
  );
};

PurchasePopup.propTypes = {
  cartItems: propTypes.array.isRequired,
  onCheckout: propTypes.func.isRequired,
};

export default PurchasePopup;
