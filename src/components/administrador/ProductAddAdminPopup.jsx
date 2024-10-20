import React, { useState } from "react";
import Popup from "reactjs-popup";
import { X } from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const ProductAddAdminPopup = () => {
  const [productData, setProductData] = useState({
    title: "",
    author: "",
    isbn: "",
    year: "",
    price: "",
    stock: "",
    genre: "NOVELA",
    description: "",
    imageUrl: "",
  });

  const [selectedImageName, setSelectedImageName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductData({
      ...productData,
      imageFile: file,
    });
    setSelectedImageName(file ? file.name : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", productData.title);
    formData.append("author", productData.author);
    formData.append("isbn", productData.isbn);
    formData.append("year", productData.year);
    formData.append("price", productData.price);
    formData.append("stock", productData.stock);
    formData.append("genre", productData.genre);
    formData.append("description", productData.description);

    if (productData.imageFile) {
      formData.append("imageFile", productData.imageFile);
    }

    console.log([...formData]); // Para revisar los datos, luego enviarlos al backend
    // Realiza el envío al backend
  };

  return (
    <Popup
      trigger={<Button className="rounded text-white">Añadir producto</Button>}
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

              <div className="col-span-2">
                <label htmlFor="genre" className="block text-gray-700">
                  Género:
                </label>
                <select
                  id="genre"
                  name="genre"
                  value={productData.genre}
                  onChange={handleChange}
                  className="w-full rounded border-gray-300 p-2"
                  required
                >
                  <option value="NOVELA">Novela</option>
                  <option value="ROMANTICO">Romántico</option>
                  <option value="TERROR">Terror</option>
                  <option value="CIENCIA_FICCION">Ciencia Ficción</option>
                  <option value="FANTASIA">Fantasía</option>
                  <option value="AVENTURAS">Aventuras</option>
                  <option value="SUSPENSO">Suspenso</option>
                  <option value="POESIA">Poesía</option>
                  <option value="INFANTIL">Infantil</option>
                  <option value="AUTOAYUDA">Autoayuda</option>
                  <option value="DEPORTE">Deporte</option>
                  <option value="ARTE">Arte</option>
                  <option value="MUSICA">Música</option>
                  <option value="COCINA">Cocina</option>
                </select>
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
                  className="w-full rounded border border-gray-300 p-3 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="col-span-2 mt-6">
                <label htmlFor="imageUrl" className="block text-gray-700">
                  URL de Imagen:
                </label>
                <div className="mt-2 flex items-center space-x-4">
                  <Input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={productData.imageUrl}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    required
                    className="w-full"
                  />
                </div>

                {/* Vista previa de la imagen */}
                {productData.imageUrl && (
                  <div className="mt-4">
                    <p className="text-gray-600">Vista previa de la imagen:</p>
                    <img
                      src={productData.imageUrl}
                      alt="Vista previa"
                      className="mt-2 h-40 w-auto rounded-lg shadow-md"
                    />
                  </div>
                )}
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
