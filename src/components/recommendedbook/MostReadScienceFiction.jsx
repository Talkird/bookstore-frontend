import React from 'react';
import Slider from "react-slick"; // Importación del componente Slider
import "slick-carousel/slick/slick.css"; // Importación de estilos
import "slick-carousel/slick/slick-theme.css"; // Importación de temas de slick

import BookSlider from './bookCard'; // Asegúrate de que el nombre de archivo sea correcto
import SamplePrevArrow from './SamplePrevArrow'; // Importa las flechas personalizadas
import SampleNextArrow from './SampleNextArrow'; 

// Componente para mostrar la sección de los libros más leídos en ciencia ficción
function MostReadScienceFiction() {
  const books = [
    {
      title: "Dune",
      author: "Frank Herbert",
      price: "$AR 35.000,00",
      image: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/6b96984b-05dd-4f30-80bc-15ef99834924/9789877254112.jpg",
    },
    {
      title: "Neuromancer",
      author: "William Gibson",
      price: "$AR 29.900,00",
      image: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/f6dc21fd-9770-417c-bdd0-585a3d9b500b/4332a3ad-f167-4d2c-b1fb-d9d331f3c53a.jpg",
    },
    {
      title: "Snow Crash",
      author: "Neal Stephenson",
      price: "$AR 27.500,00",
      image: "https://images.cdn2.buscalibre.com/fit-in/360x360/80/5d/805db27565d3ca9fffda34190f4046fd.jpg",
    },
    {
      title: "The Left Hand of Darkness",
      author: "Ursula K. Le Guin",
      price: "$AR 30.800,00",
      image: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/b5132fcc-ec40-4fc2-ba6a-b33763c3c1c4/9789505472222.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Ajusta el número de libros mostrados
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: true, // Ajusta el alto según el contenido
  };

  return (
    <BookSlider title="Más Leídos en Ciencia Ficción" books={books} settings={settings} />
  );
}

export default MostReadScienceFiction;
