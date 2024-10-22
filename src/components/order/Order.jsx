import PropTypes from "prop-types";
import { formatPeso } from "../../utils/format";

function Order({
  customerName,
  customerEmail,
  customerPhone,
  customerAddress,
  books,
  total,
  paymentMethod,
  id,
}) {
  return (
    <div className="flex w-full max-w-md flex-col items-start justify-center rounded-lg bg-white p-6 shadow-lg">
      <p className="text-lg font-semibold">
        ID: <span className="font-normal">{id}</span>
      </p>
      <p className="text-lg">
        Nombre: <span className="font-normal">{customerName}</span>
      </p>
      <p className="text-lg">
        Email: <span className="font-normal">{customerEmail}</span>
      </p>
      <p className="text-lg">
        Teléfono: <span className="font-normal">{customerPhone}</span>
      </p>
      <p className="text-lg">
        Dirección: <span className="font-normal">{customerAddress}</span>
      </p>
      <p className="text-lg">
        Método de pago: <span className="font-normal">{paymentMethod}</span>
      </p>

      <h2 className="mt-4 text-xl font-bold">Total: {formatPeso(total)}</h2>
      <h2 className="mt-2 text-xl font-bold">Productos:</h2>
      <div className="flex w-full flex-col">
        {books.map((book) => (
          <div key={book.id} className="flex flex-col border-b py-2">
            <p className="text-lg">
              Nombre: <span className="font-normal">{book.title}</span>
            </p>
            <p className="text-lg">
              Cantidad: <span className="font-normal">{book.quantity}</span>
            </p>
            <p className="text-lg">Precio: {formatPeso(book.price)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
