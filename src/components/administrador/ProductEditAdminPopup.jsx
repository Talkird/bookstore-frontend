import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { deleteBook, updateBook } from "../../redux/slice/bookSlice";
import { useDispatch } from "react-redux";

const ProductEditAdminPopup = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };
  
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
    onClose();
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const book = {
      isbn: product.isbn,
      title: product.title,
      author: product.author,
      year: product.year,
      genre: product.genre,
      description: product.description,
      imagePath: product.image,
      price: price,
      stock: stock,
    };

    dispatch(updateBook({ id: product.id, book }));

    closeEditModal();
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-full max-w-sm rounded-lg bg-white p-4 shadow-lg">
          <h2 className="mb-2 text-center text-lg text-gray-800">
            Editar o Eliminar Producto
          </h2>
          <div className="mb-3 flex border-b pb-3">
            <img
              src={product.image}
              alt={product.title}
              className="mr-2 h-24 w-24 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-md text-gray-800">{product.title}</h3>
              <p className="text-sm text-gray-600">Autor: {product.author}</p>
              <p className="text-sm text-gray-600">ISBN: {product.isbn}</p>
              <p className="text-sm text-gray-600">Año: {product.year}</p>
              <p className="text-sm text-gray-600">Precio: ${product.price}</p>
              <p className="text-sm text-gray-600">Stock: {product.stock}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <Button variant="default" onClick={openEditModal}>
              Editar
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                if (
                  window.confirm(
                    "¿Estás seguro de que deseas eliminar este producto?",
                  )
                ) {
                  handleDeleteBook(product.id);
                }
              }}
            >
              Eliminar
            </Button>
          </div>
          <Button
            size="sm"
            onClick={onClose}
            className="absolute right-2 top-2 text-3xl text-gray-400 hover:text-gray-600"
          >
            ×
          </Button>
        </div>
      </div>

      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-sm rounded-lg bg-white p-4 shadow-lg">
            <h2 className="mb-2 text-center text-lg text-gray-800">
              Editar Producto
            </h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="price"
                  className="mb-1 block text-sm text-gray-700"
                >
                  Precio:
                </label>
                <Input
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  required
                  placeholder="Introduce el nuevo precio"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="stock"
                  className="mb-1 block text-sm text-gray-700"
                >
                  Stock:
                </label>
                <Input
                  id="stock"
                  onChange={(e) => setStock(e.target.value)}
                  value={stock}
                  required
                  placeholder="Introduce el nuevo stock"
                />
              </div>

              <div className="mt-3 flex justify-between">
                <Button type="submit" variant="default" size="sm">
                  Guardar
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={closeEditModal}
                >
                  Cancelar
                </Button>
              </div>
            </form>
            <Button
              size="sm"
              onClick={closeEditModal}
              className="absolute right-2 top-2 text-3xl text-gray-400 hover:text-gray-600"
            >
              ×
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductEditAdminPopup;
