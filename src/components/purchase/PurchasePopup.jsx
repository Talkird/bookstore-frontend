import React from "react";
import Popup from "reactjs-popup";
import Button from "../ui/Button"; // Asegúrate de que el componente Button esté importado correctamente

const PurchasePopup = ({ cartItems, onCheckout }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <Popup
      trigger={<Button>Ver Carrito</Button>}
      modal
      contentStyle={{ width: "90%", maxWidth: "400px" }} // Ajusta el tamaño del popup
    >
      {(close) => (
        <div className="rounded-lg bg-white p-4 shadow-lg">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Carrito de Compras
          </h1>

          <div className="mb-4 max-h-48 space-y-4 overflow-y-auto">
            {" "}
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
                      className="mr-2 h-12 w-12 rounded-lg object-cover" // Tamaño de la imagen ajustado
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
            div
            className="mb-4 max-h-48 space-y-4 overflow-y-auto"
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const address = e.target.address.value;
              onCheckout({ name, email, address, cartItems });
              close(); // Cierra el popup después de enviar el formulario
            }}
          >
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 p-1 focus:ring focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700">
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 p-1 focus:ring focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-gray-700">
                Dirección de Envío:
              </label>
              <input
                type="text"
                id="address"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 p-1 focus:ring focus:ring-blue-500"
              />
            </div>

            <Button type="submit">Confirmar Compra</Button>
          </form>
        </div>
      )}
    </Popup>
  );
};

export default PurchasePopup;
