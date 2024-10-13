import React from "react";

const Purchase = ({ product, onPurchase }) => {
  return (
    <div className="container mx-auto my-10 rounded-lg bg-white p-6 shadow-lg">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Detalles de Compra
      </h1>

      
      <div className="mb-8 flex flex-col items-center md:flex-row">
        <div className="mb-6 md:mb-0 md:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="h-auto w-full rounded-lg object-cover shadow-md"
          />
        </div>

        <div className="text-center md:w-1/2 md:pl-8 md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
          <p className="text-lg text-gray-600">Autor: {product.author}</p>
          <p className="mb-4 text-xl font-semibold text-primary">
            ${product.price.toLocaleString()}
          </p>
          <p className="mb-4 text-gray-600">{product.description}</p>
        </div>
      </div>

      {/* Formulario de compra */}
      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        Completa tu compra
      </h2>
      <form onSubmit={onPurchase} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring focus:ring-blue-500"
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
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring focus:ring-blue-500"
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
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 font-bold text-white transition duration-300 hover:bg-blue-700"
        >
          Confirmar Compra
        </button>
      </form>
    </div>
  );
};

export default Purchase;
