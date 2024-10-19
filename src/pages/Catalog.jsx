import { useState } from "react";
import Product from "../components/product/Product";
import image from "../assets/image.webp";
import Pagination from "../components/ui/Pagination";
import Filter from "../components/filters/Filter";
import Sort from "../components/filters/Sort";
import BackButton from "../components/ui/BackButton";



const books = [
  {
    image,
    title: "La Casa Neville",
    author: "Florencia Bonelli",
    price: 20000,
    publisher: "Editorial A",
    category: "NOVELA",
  },
  {
    image:
      "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/b77b4b89-900a-4cdc-a9da-049129fb633d/9789878453507_a42918b3-fcc2-449a-bb30-11b5607d56bf.jpg",
    title: "Blackwater: La Riada",
    author: "Michael McDowell",
    price: 14999,
    publisher: "Editorial A",
    category: "TERROR",
  },
  {
    image:
      "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/9d79a285-1e2e-4bde-aa5a-195dff5697a5/9789504988199.jpg",
    title: "Los Soles de Santiago",
    author: "Viviana Rivero",
    price: 34900,
    publisher: "Editorial B",
    category: "NOVELA",
  },
  {
    image:
      "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/17606ca4-3b84-4492-a685-42050dcf485c/96dc8d5e-437c-4ae2-89f5-573439320379.jpg",
    title: "Hábitos Atómicos",
    author: "James Clear",
    price: 21100,
    publisher: "Editorial A",
    category: "AUTOAYUDA",
  },
  {
    image:
      "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/9fd617d5-8b5f-43ed-9e89-fc4fdcd89623/9789504988250.jpg",
    title: "La Felicidad",
    author: "Gabriel Rolón",
    price: 32900,
    publisher: "Editorial B",
    category: "PSICOLOGÍA",
  },
  {
    image:
      "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/af32d5ce-a12e-4055-9e9f-2a1b88131231/9789874670236.jpg",
    title: "El Libro de Bill",
    author: "Alex Hirsch",
    price: 38400,
    publisher: "Editorial A",
    category: "ARTE",
  },
  {
    image:
      "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/f718b610-f742-4f8f-a4d1-3052a8076e15/9788425451010.jpg",
    title: "El Espíritu de la Esperanza",
    author: "Byung-Chul Han",
    price: 21900,
    publisher: "Editorial B",
    category: "FILOSOFÍA",
  },
  {
    image:
      "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/0719dae5-7a95-4f49-84ec-c54d5eb2f026/9786313000937.jpg",
    title: "Zensorialmente",
    author: "Estanislao Bachrach",
    price: 24000,
    publisher: "Editorial A",
    category: "CIENCIA",
  },
  {
    image:
      "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/082d480f-385b-4367-ae41-e40d11f6d0f8/9789500770224.jpg",
    title: "En Agosto Nos Vemos",
    author: "Gabriel García Márquez",
    price: 19999,
    publisher: "Editorial B",
    category: "NOVELA",
  },
  {
    image:
      "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/ed9bb928-ded3-4413-ab35-305da2bd9498/9789504987369_53e6342d-2504-4bc3-ac04-6df9b0fe1602.jpg",
    title: "La Cacería de Hierro",
    author: "Hugo Alconada Mon",
    price: 27600,
    publisher: "Editorial A",
    category: "POLÍTICA",
  },
  {
    image:
      "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/ba4e242c-29a7-48b0-b56d-ec0094cfd449/9788410138407_70fffca5-9ef6-4e19-adb8-c02de8d0cba6.jpg",
    title: "La Biblioteca de la Medianoche",
    author: "Matt Haig",
    price: 18642,
    publisher: "Editorial B",
    category: "FANTASÍA",
  },
];

function Catalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    minPrice: null,
    maxPrice: null,
    publisher: null,
    selectedCategories: [],
  });
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
    const meetsPublisher =
      !filters.publisher || book.publisher === filters.publisher;
    const meetsCategory =
      filters.selectedCategories.length === 0 ||
      filters.selectedCategories.includes(book.category); // Filtra por múltiples categorías
    return meetsPrice && meetsPublisher && meetsCategory;
  });

  // Ordenar los libros
  const sortedBooks = filteredBooks.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    }
    return 0; // Si no hay orden, no cambiar nada
  });

  const totalPages = Math.ceil(sortedBooks.length / booksPerPage);
  const startIndex = (currentPage - 1) * booksPerPage;
  const selectedBooks = sortedBooks.slice(
    startIndex,
    startIndex + booksPerPage,
  );

  const totalBooks = filteredBooks.length; // Cantidad total de libros filtrados
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
              id={index}
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
