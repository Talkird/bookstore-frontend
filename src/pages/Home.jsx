import React from 'react';
import RecommendedBooks from '../components/recommendedbook/RecommendedBooks';
import MostReadScienceFiction from '../components/recommendedbook/MostReadScienceFiction';
import Categories from '../components/categories/categories';
import SpecialOfferBanner  from '../components/banners/SpecialOfferBanner';
import { Link } from 'react-router-dom';
import Button from "../components/ui/Button";
import ImageBanner from '../components/banners/ImageBanner';


// Página principal Home
function Home() {
  return (
    <div className="p-8">
      
    <ImageBanner />

    {/* Botón Ver Todos los Productos */}
    <div className="flex justify-center ">
      <Link to="/catalog">
        <Button className="w-full py-5 px-14 text-lg transition-transform transform hover:scale-105 duration-300">
          Ver Todos los Productos
        </Button>
      </Link>
    </div>
     {/* Componente de libros recomendados */}
     <RecommendedBooks/>
    
     {/* Sección de Categorías */}
     <h2 className="text-2xl font mb-4 text-center mt-6">Categorías destacadas</h2> 
     <Categories />

      {/* Banner de oferta especial */}
      <SpecialOfferBanner />

      {/* Componente de libros más leidos de Ciencia Ficción */}
      <MostReadScienceFiction />
    </div>

    

  );
}

export default Home;
