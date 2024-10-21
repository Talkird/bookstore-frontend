import { useState, useEffect } from "react";
import Product from "../components/product/Product";
import Pagination from "../components/ui/Pagination";
import Filter from "../components/filters/Filter";
import Sort from "../components/filters/Sort";
import BackButton from "../components/ui/BackButton";
import { useLocation } from "react-router-dom";
import { getBooks } from "../api/book";
import { getRole } from "../utils/token";
import ProductAddAdminPopup from "../components/administrador/ProductAddAdminPopup";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Catalog() {
  const [books, setBooks] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const role = getRole();

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
      filters.selectedCategories.includes(book.category);
    const meetsSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
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
    <div className="flex flex-col">
      <div className="flex flex-row">
        {/*Volver atras y filtros*/}
        <div className="flex flex-col p-8">
          <div className="mb-4">
            <BackButton />
          </div>
          <Filter onFilterChange={handleFilterChange} />
        </div>

        <div className="flex flex-col p-4">
          <div className="flex w-full flex-row items-center justify-between">
            <p className="text-gray-600">
              Mostrando {showingStart}-{showingEnd} de {totalBooks} resultados
            </p>

            <Sort onSortChange={handleSortChange} />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            <ProductAddAdminPopup />
            {selectedBooks.map((book, index) => (
              <Product
                key={book.id}
                id={book.id}
                image={book.imagePath}
                title={book.title}
                author={book.author}
                price={book.price}
              />
            ))}
          </div>
        </div>

        {isPopupOpen && <ProductAddAdminPopup onClose={closePopup} />}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default Catalog;
