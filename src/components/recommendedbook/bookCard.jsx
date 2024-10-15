import React from 'react';
import Slider from "react-slick"; // Importación del componente Slider
import "slick-carousel/slick/slick.css"; // Importación de estilos
import "slick-carousel/slick/slick-theme.css"; // Importación de temas de slick

function BookSlider({ title, books, settings }) {
  return (
    <div className="border-2 border-secondary p-6 pt-3 mt-6 rounded overflow-hidden">
      <h2 className="text-2xl font mb-1 text-center">{title}</h2>
      <Slider {...settings}>
        {books.map((book, index) => (
          <div key={index} className="p-4 text-center">
            <img
              src={book.image}
              alt={book.title}
              className="mx-auto w-32 h-48 object-cover"
            />
            <h3 className="text-lg mt-4 font-bold text-blueLight">
              {book.title}
            </h3>
            <p className="text-sm text-gray-500">{book.author}</p>
            <p className="text-sm font-bold text-primary">{book.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BookSlider;
