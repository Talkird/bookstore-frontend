import { useState } from 'react';
import Product from "../components/product/Product";
import image from '../assets/image.webp';
import Pagination from "../components/ui/Pagination"; 
import Filter from "../components/filters/Filter"; 
import Sort from "../components/filters/Sort"; 

const books = [
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "NOVELA" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "TERROR" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "ROMANTICO" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "CIENCIA FICCION" },
  { image, title: "La Casa Neville", price: 10000, publisher: "Editorial A", category: "AVENTURAS" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "SUSPENSO" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "FANTASIA" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "POESIA" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "INFANTIL" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "AUTOAYUDA" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "DEPORTE" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "ARTE" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "MUSICA" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "COCINA" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "NOVELA" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "TERROR" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "ROMANTICO" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "CIENCIA FICCION" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "FANTASIA" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "POESIA" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "INFANTIL" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "AUTOAYUDA" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "DEPORTE" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "ARTE" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "MUSICA" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "COCINA" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "NOVELA" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "TERROR" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "ROMANTICO" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "CIENCIA FICCION" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "FANTASIA" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "SUSPENSO" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "INFANTIL" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "AUTOAYUDA" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "DEPORTE" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "ARTE" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial A", category: "MUSICA" },
  { image, title: "La Casa Neville", price: 20000, publisher: "Editorial B", category: "COCINA" },
];

function Catalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ minPrice: null, maxPrice: null, publisher: null, selectedCategories: [] });
  const [sortOrder, setSortOrder] = useState(null); // Nuevo estado para el orden
  const booksPerPage = 20;

  // Maneja el cambio de filtros
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reinicia a la página 1 cuando se aplican nuevos filtros
  };

  // Maneja el cambio de ordenamiento
  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
    setCurrentPage(1); // Reinicia a la página 1 cuando se aplica un nuevo orden
  };

  // Filtrar los libros
  const filteredBooks = books.filter((book) => {
    const meetsPrice =
      (!filters.minPrice || book.price >= filters.minPrice) &&
      (!filters.maxPrice || book.price <= filters.maxPrice);
    const meetsPublisher = !filters.publisher || book.publisher === filters.publisher;
    const meetsCategory = 
      filters.selectedCategories.length === 0 || filters.selectedCategories.includes(book.category); // Filtra por múltiples categorías
    return meetsPrice && meetsPublisher && meetsCategory;
  });

  // Ordenar los libros
  const sortedBooks = filteredBooks.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else if (sortOrder === 'desc') {
      return b.price - a.price;
    }
    return 0; // Si no hay orden, no cambiar nada
  });

  const totalPages = Math.ceil(sortedBooks.length / booksPerPage);
  const startIndex = (currentPage - 1) * booksPerPage;
  const selectedBooks = sortedBooks.slice(startIndex, startIndex + booksPerPage);

  const totalBooks = filteredBooks.length; // Cantidad total de libros filtrados
  const showingStart = startIndex + 1;
  const showingEnd = Math.min(startIndex + booksPerPage, totalBooks);

  return (
    <div className="flex">
      <div className="w-1/4 p-7">
        <Filter onFilterChange={handleFilterChange} />
      </div>

      <div className="w-3/4 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-gray-600">
            Mostrando {showingStart}-{showingEnd} de {totalBooks} resultados
          </div>
          <Sort onSortChange={handleSortChange} />
        </div>

        {/* Grid de libros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {selectedBooks.map((book, index) => (
            <Product key={index} image={book.image} title={book.title} price={book.price} />
          ))}
        </div>

        <div className="mt-4"> {/* Margen superior para separación */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
}

export default Catalog;