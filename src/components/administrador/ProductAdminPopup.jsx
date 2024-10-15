import React, { useState } from "react";

const ProductAdminPopup = ({ product, onEdit, onDelete, onClose }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const price = e.target.price.value;
    const stock = e.target.stock.value;
    onEdit(product.id, { price, stock });
    closeEditModal();
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-full max-w-xl rounded-lg bg-white p-6 shadow-lg">
          {" "}
          <h2 className="mb-4 text-center text-xl text-gray-800">
            Editar o Eliminar Producto
          </h2>
          <div className="mb-4 flex border-b pb-4">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="mr-4 h-32 w-32 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-lg text-gray-800">{product.title}</h3>
              <p className="text-gray-600">Autor: {product.author}</p>
              <p className="text-gray-600">ISBN: {product.isbn}</p>
              <p className="text-gray-600">Año: {product.year}</p>
              <p className="text-gray-600">Precio: ${product.price}</p>
              <p className="text-gray-600">Stock: {product.stock}</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <button
              onClick={openEditModal}
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Editar
            </button>
            <button
              type="button"
              onClick={() => {
                if (
                  window.confirm(
                    "¿Estás seguro de que deseas eliminar este producto?",
                  )
                ) {
                  onDelete(product.id);
                  onClose();
                }
              }}
              className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Eliminar
            </button>
          </div>
          <button
            onClick={onClose}
            className="absolute right-2 top-2 text-4xl text-gray-400 hover:text-gray-600" // Tamaño de la cruz
          >
            ×
          </button>
        </div>
      </div>

      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-xl rounded-lg bg-white p-6 shadow-lg">
            {" "}
            <h2 className="mb-4 text-center text-xl text-gray-800">
              Editar Producto
            </h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label htmlFor="price" className="mb-1 block text-gray-700">
                  Precio:
                </label>
                <input
                  type="text"
                  id="price"
                  defaultValue={product.price}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="stock" className="mb-1 block text-gray-700">
                  Stock:
                </label>
                <input
                  type="text"
                  id="stock"
                  defaultValue={product.stock}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <div className="mt-4 flex justify-between">
                <button
                  type="submit"
                  className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                >
                  Cancelar
                </button>
              </div>
            </form>
            <button
              onClick={closeEditModal}
              className="absolute right-2 top-2 text-4xl text-gray-400 hover:text-gray-600" // Tamaño de la cruz
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductAdminPopup;
