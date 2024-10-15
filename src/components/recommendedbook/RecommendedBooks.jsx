import React from 'react';
import "slick-carousel/slick/slick.css"; // Importación de estilos
import "slick-carousel/slick/slick-theme.css"; // Importación de temas de slick

import BookSlider from './bookCard';
import SamplePrevArrow from './SamplePrevArrow'; // Importa las flechas personalizadas
import SampleNextArrow from './SampleNextArrow'; 



// Componente para mostrar la sección de libros recomendados
function RecommendedBooks() {
  const books = [
    {
      title: "La Casa de los Suicidios",
      author: "Donlea, Charlie",
      price: "$AR 26.900,00",
      image: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/d4076703-04b0-4001-9a27-4e58ebe5630d/9789878474465_6aeebede-5cec-449f-b281-cb724f366c95.jpg",
    },
    {
      title: "El Día Más Largo del Año",
      author: "Digregorio, Cecilia",
      price: "$AR 19.999,00",
      image: "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/3bb2148f-5090-4b99-8d80-9c668a84d2b0/9789501532999_71470808-a4bc-4518-8bdc-60d61743223f.jpg",
    },
    {
      title: "Los Sorrentinos",
      author: "Higa, Virginia",
      price: "$AR 19.500,00",
      image: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/719e6dd0-68d1-4756-a437-c1e0495f3c74/50d9bfda-9dbc-42b0-9ee7-b860d598cf73.jpg",
    },
    {
      title: "Diario de una Soledad",
      author: "Sarton, May",
      price: "$AR 24.990,00",
      image: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/06a48096-417b-4233-a16f-e78c2425d9fc/9788416529940_cc298532-e139-40dd-969d-e39a0c9c61fe.jpg",
    },
    {
      title: "Las Hijas de la Criada",
      author: "Onega, Sonsoles",
      price: "$AR 36.100,00",
      image: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/b3dc1d8e-159f-49a2-bf7b-cfb1fe691e25/9789504984887_40c60f52-1e8d-4c31-a8c4-7e27a0dcfe7d.jpg",
    },
    {
      title: "El Gato y la Ciudad",
      author: "Bradley, Nick",
      price: "$AR 20.800,00",
      image: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/c73c76e7-8d7f-4694-b5fd-c7566d6b365e/9789878289953.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Mostrar menos libros para evitar que las flechas se salgan
    slidesToScroll: 1, // Desliza de uno en uno para un comportamiento más suave
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: true, // Ajusta el alto según el contenido
  };

  return (
    <BookSlider title="Recomendados" books={books} settings={settings} />
  );
}



export default RecommendedBooks;