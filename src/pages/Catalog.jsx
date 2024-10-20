import { useState, useEffect } from "react";
import Product from "../components/product/Product";
import Pagination from "../components/ui/Pagination";
import Filter from "../components/filters/Filter";
import Sort from "../components/filters/Sort";
import BackButton from "../components/ui/BackButton";
import { useLocation } from "react-router-dom";
import { getBooks } from "../api/books";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Catalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks()
      .then((books) => setBooks(books))
      .catch((error) => console.error("Error getting books:", error));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    minPrice: null,
    maxPrice: null,
    publisher: null,
    selectedCategories: [],
  });
  const [sortOrder, setSortOrder] = useState(null);
  const booksPerPage = 20;
  const query = useQuery();
  const searchTerm = query.get("search") || "";

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
    setCurrentPage(1);
  };

  const filteredBooks = books.filter((book) => {
    const meetsPrice =
      (!filters.minPrice || book.price >= filters.minPrice) &&
      (!filters.maxPrice || book.price <= filters.maxPrice);
    const meetsPublisher =
      !filters.publisher || book.publisher === filters.publisher;
    const meetsCategory =
      filters.selectedCategories.length === 0 ||
      filters.selectedCategories.includes(book.category); // Filtra por múltiples categorías
    const meetsSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()); // Filtra por título o autor
    return meetsPrice && meetsPublisher && meetsCategory && meetsSearch;
  });

  const sortedBooks = filteredBooks.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedBooks.length / booksPerPage);
  const startIndex = (currentPage - 1) * booksPerPage;
  const selectedBooks = sortedBooks.slice(
    startIndex,
    startIndex + booksPerPage,
  );

  const totalBooks = filteredBooks.length;
  const showingStart = startIndex + 1;
  const showingEnd = Math.min(startIndex + booksPerPage, totalBooks);

  return (
    <div className="flex">
      <div className="flex w-1/4 flex-col p-7">
        <div className="mb-4">
          <BackButton />
        </div>
        <Filter onFilterChange={handleFilterChange} />
      </div>

      {/* Columna para mostrar los productos */}
      <div className="w-3/4 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-gray-600">
            Mostrando {showingStart}-{showingEnd} de {totalBooks} resultados
          </div>
          <Sort onSortChange={handleSortChange} />
        </div>

        {/* Grid de libros */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {selectedBooks.map((book, index) => (
            <Product
              key={index}
              id={index + 1}
              image={book.image}
              title={book.title}
              author={book.author}
              price={book.price}
            />
          ))}
        </div>

        <div className="mt-4">
          {" "}
          {/* Margen superior para separación */}
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
