import { useState } from "react";
import Popup from "reactjs-popup";
import { X } from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { addBook } from "../../api/book";

const ProductAddAdminPopup = () => {
  const [title, setTitle] = useState("titulo");
  const [author, setAuthor] = useState("author");
  const [isbn, setIsbn] = useState(0);
  const [year, setYear] = useState(2024);
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [genre, setGenre] = useState("NOVELA");
  const [description, setDescription] = useState("descripción");
  const [imageUrl, setImageUrl] = useState("https://example.com/image.jpg");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookRequest = {
      isbn: isbn,
      title: title,
      author: author,
      year: year,
      price: price,
      stock: stock,
      genre: genre,
      description: description,
      imagePath: imageUrl,
    };

    addBook(bookRequest);
  };

  return (
    <Popup
      trigger={
        <Button
          variant="outline"
          className="rounded outline outline-1 hover:bg-opacity-60"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="rounded-full text-8xl">+</p>
            <p className="text-2xl">Agregar producto</p>
          </div>
        </Button>
      }
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="isbn" className="block text-gray-700">
                  ISBN:
                </label>
                <Input
                  type="number"
                  id="isbn"
                  name="isbn"
                  value={isbn}
                  onChange={(e) => setIsbn(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="year" className="block text-gray-700">
                  Año:
                </label>
                <Input
                  id="year"
                  name="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="price" className="block text-gray-700">
                  Precio:
                </label>
                <Input
                  id="price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="stock" className="block text-gray-700">
                  Stock:
                </label>
                <Input
                  id="stock"
                  name="stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
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
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    required
                    className="w-full"
                  />
                </div>

                {imageUrl && (
                  <div className="mt-4">
                    <p className="text-gray-600">Vista previa de la imagen:</p>
                    <img
                      src={imageUrl}
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
