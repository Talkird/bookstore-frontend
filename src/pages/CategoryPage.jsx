import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { category } = useParams(); // Obtener el nombre de la categoría de la URL

  // Aquí puedes tener lógica para filtrar los libros por la categoría
  const books = [
    { title: "Libro 1", category: "novela" },
    { title: "Libro 2", category: "suspenso" },
    { title: "Libro 3", category: "infantil" },
    { title: "Libro 3", category: "romantico" },
    { title: "Libro 3", category: "ciencia-ficcion" },
    // Agrega más libros con sus respectivas categorías
  ];

  // Filtrar los libros por categoría, asegurándote de que coincida con la categoría de la URL
  const filteredBooks = books.filter(book => book.category === category);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4">Libros en la categoría: {category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div key={index} className="p-4 text-center border rounded-lg">
              <h3 className="text-lg font-bold">{book.title}</h3>
              {/* Aquí puedes agregar más detalles sobre los libros */}
            </div>
          ))
        ) : (
          <p>No hay libros disponibles en esta categoría.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
