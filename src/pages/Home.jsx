import React, { useState } from "react";
import RecommendedBooks from "../components/recommendedbook/RecommendedBooks";
import MostReadScienceFiction from "../components/recommendedbook/MostReadScienceFiction";
import Categories from "../components/categories/categories";
import SpecialOfferBanner from "../components/banners/SpecialOfferBanner";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import ImageBanner from "../components/banners/ImageBanner";
import ProductAdminPopup from "../components/administrador/ProductAdminPopup"; // Asegúrate de ajustar la ruta

// Página principal Home
function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const product = {
    id: 1,
    title: "Libro Ejemplo",
    author: "Autor Ejemplo",
    isbn: "123456789",
    year: "2023",
    price: 19.99,
    stock: 10,
    imageUrl: "https://via.placeholder.com/150",
  };

  const handleEdit = (productId, updatedData) => {
    console.log("Producto editado:", productId, updatedData);
  };

  const handleDelete = (productId) => {
    console.log("Producto eliminado:", productId);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="p-8">
      {/* Botón para abrir el popup */}
      <div className="mb-6 flex justify-center">
        <Button
          onClick={togglePopup}
          className="w-full transform px-14 py-5 text-lg transition-transform duration-300 hover:scale-105"
        >
          Administrar Producto
        </Button>
      </div>

      {/* Mostrar el popup si está abierto */}
      {isPopupOpen && (
        <ProductAdminPopup
          product={product}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onClose={togglePopup}
        />
      )}

      <ImageBanner />

      {/* Botón Ver Todos los Productos */}
      <div className="flex justify-center">
        <Link to="/catalog">
          <Button className="w-full transform px-14 py-5 text-lg transition-transform duration-300 hover:scale-105">
            Ver Todos los Productos
          </Button>
        </Link>
      </div>

      {/* Componente de libros recomendados */}
      <RecommendedBooks />

      {/* Sección de Categorías */}
      <h2 className="font mb-4 mt-6 text-center text-2xl">
        Categorías destacadas
      </h2>
      <Categories />

      {/* Banner de oferta especial */}
      <SpecialOfferBanner />

      {/* Componente de libros más leidos de Ciencia Ficción */}
      <MostReadScienceFiction />
    </div>
  );
}

export default Home;
