import RecommendedBooks from "../components/recommendedbook/RecommendedBooks";
import MostReadScienceFiction from "../components/recommendedbook/MostReadScienceFiction";
import Categories from "../components/categories/categories";
import SpecialOfferBanner from "../components/banners/SpecialOfferBanner";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import ImageBanner from "../components/banners/ImageBanner";

// Página principal Home
function Home() {
  return (
    <div className="p-8">
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
