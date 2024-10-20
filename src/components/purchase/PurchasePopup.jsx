import React, { useState } from "react";
import Popup from "reactjs-popup";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { X } from "lucide-react";

const ProductAddAdminPopup = () => {
  const [productData, setProductData] = useState({
    title: "",
    author: "",
    isbn: "",
    year: "",
    price: "",
    stock: "",
    imagePath: "",
    genre: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData); // Manejar el envío de datos
  };

  return (
    <Popup
      trigger={<Button className="rounded text-white">Add Product</Button>}
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
            {/* Botón para cerrar */}
            <button
              onClick={close}
              className="absolute right-4 top-4 text-gray-600 hover:text-gray-800"
            >
              <X size={24} />
            </button>

            <h1 className="mb-4 text-2xl font-bold text-gray-800">
              Agregar Producto
            </h1>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              <div>
                <label htmlFor="title" className="block text-gray-700">
                  Título:
                </label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  value={productData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="author" className="block text-gray-700">
                  Autor:
                </label>
                <Input
                  type="text"
                  id="author"
                  name="author"
                  value={productData.author}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="isbn" className="block text-gray-700">
                  ISBN:
                </label>
                <Input
                  type="text"
                  id="isbn"
                  name="isbn"
                  value={productData.isbn}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="year" className="block text-gray-700">
                  Año:
                </label>
                <Input
                  type="number"
                  id="year"
                  name="year"
                  value={productData.year}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="price" className="block text-gray-700">
                  Precio:
                </label>
                <Input
                  type="number"
                  id="price"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="stock" className="block text-gray-700">
                  Stock:
                </label>
                <Input
                  type="number"
                  id="stock"
                  name="stock"
                  value={productData.stock}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="imagePath" className="block text-gray-700">
                  Ruta de Imagen:
                </label>
                <Input
                  type="text"
                  id="imagePath"
                  name="imagePath"
                  value={productData.imagePath}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="genre" className="block text-gray-700">
                  Género:
                </label>
                <Input
                  type="text"
                  id="genre"
                  name="genre"
                  value={productData.genre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="description" className="block text-gray-700">
                  Descripción:
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={productData.description}
                  onChange={handleChange}
                  className="w-full rounded border-gray-300 p-2"
                  required
                />
              </div>

              <Button type="submit" className="col-span-2 mt-4">
                Agregar Producto
              </Button>
            </form>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ProductAddAdminPopup;
