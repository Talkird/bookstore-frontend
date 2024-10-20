import { useState, useEffect } from "react";
import Product from "../components/product/Product";
import Pagination from "../components/ui/Pagination";
import Filter from "../components/filters/Filter";
import Sort from "../components/filters/Sort";
import BackButton from "../components/ui/BackButton";
import { useLocation } from "react-router-dom"; // Para obtener los parámetros de la URL

export const books = [
  {
    image: "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/cf02fce5-ac40-4f99-a9cf-eb99335d56dc/9789504985082.JPG",
    title: "La Casa Neville",
    author: "Florencia Bonelli",
    price: 20000,
    publisher: "Editorial A",
    category: "NOVELA",
    availability: 10,
    userRating: 4.5, // Calificación del usuario
    description: "Una fascinante historia sobre el amor y la traición.",
    isbn: "9789878453507",
    weight: "1.2 kg",
    pages: 300,
  },
  {
    image: "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/74532307-7356-45a0-b719-7be7d17e9ac2/9786316512222_3a3bab95-3bc6-4c84-a357-88325cb772d7.jpg",
    title: "Escape de Viena",
    author: "María Rosa Lojo",
    price: 27000,
    publisher: "Editorial A",
    category: "NOVELA",
    availability: 10,
    userRating: 4.5,
    description: "1938. El Dr. Ho Fengshan, cónsul general de China, es destinado a Viena junto a su esposa estadounidense, Grace. Tímida e incómoda con las obligaciones sociales, Grace se siente una forastera en una ciudad que comienza a sucumbir al control nazi. Contra las instrucciones de su esposo de mantener relaciones cordiales con el Tercer Reich y evitar cualquier vínculo con judíos, Grace encuentra en su tutora de alemán, Lola Schnitzler, su primera amiga verdadera. Grace desafía las órdenes del Dr. Ho y se reúne con Lola varias veces en secreto. Cuando los familiares de Lola sufren una brutal paliza, el Dr. Ho toma la valiente decisión de firmarles visas para que puedan huir a Shanghái. A medida que la violencia contra los judíos se intensifica, él se enfrenta a la difícil tarea de emitir miles de visas más para ayudar a los judíos a escapar de Viena antes de que sean deportados a los campos de concentración, de donde difícilmente saldrán con vida. Inspirada en una historia real extraordinaria, Escape de Viena narra los riesgos que corrieron almas valientes, y el amor y la amistad que construyeron y perdieron en la lucha contra un mal inconcebible",
    isbn: "9789504985082",
    weight: "0.5 kg",
    pages: 352
  },

  {
    image: "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/e97c9c5b-e986-44ed-944f-545866b47960/9786313011254_4e5c0049-0aab-40e9-8baa-19feb69a541c.jpg",
    title: "La isla de la mujer dormida",
    author: "Arturo Perez-Reverte",
    price: 38999,
    publisher: "Editorial A",
    category: "NOVELA",
    availability: 15,
    userRating: 4.2,
    description: "Una obra que explora los misterios y secretos de una isla mágica.",
    isbn: "9786313011254",
    weight: "0.4 kg",
    pages: 416
  },

  {
    image: "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/b77b4b89-900a-4cdc-a9da-049129fb633d/9789878453507_a42918b3-fcc2-449a-bb30-11b5607d56bf.jpg",
    title: "Blackwater: La Riada",
    author: "Michael McDowell",
    price: 14999,
    publisher: "Editorial A",
    category: "TERROR",
    availability: 5,
    userRating: 3.8,
    description: "Un thriller escalofriante sobre la inundación de una pequeña ciudad.",
    isbn: "9789878453508",
    weight: "1.0 kg",
    pages: 250,
  },
  {
    image: "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/9d79a285-1e2e-4bde-aa5a-195dff5697a5/9789504988199.jpg",
    title: "Los Soles de Santiago",
    author: "Viviana Rivero",
    price: 34900,
    publisher: "Editorial B",
    category: "NOVELA",
    availability: 8,
    userRating: 4.2,
    description: "Un relato conmovedor sobre la familia y el pasado.",
    isbn: "9789504988199",
    weight: "1.5 kg",
    pages: 400,
  },
  {
    image: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/17606ca4-3b84-4492-a685-42050dcf485c/96dc8d5e-437c-4ae2-89f5-573439320379.jpg",
    title: "Hábitos Atómicos",
    author: "James Clear",
    price: 21100,
    publisher: "Editorial A",
    category: "AUTOAYUDA",
    availability: 12,
    userRating: 4.6,
    description: "Un libro sobre cómo formar buenos hábitos y romper los malos.",
    isbn: "9789504988250",
    weight: "0.8 kg",
    pages: 300,
  },
  {
    image: "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/9fd617d5-8b5f-43ed-9e89-fc4fdcd89623/9789504988250.jpg",
    title: "La Felicidad",
    author: "Gabriel Rolón",
    price: 32900,
    publisher: "Editorial B",
    category: "PSICOLOGÍA",
    availability: 15,
    userRating: 4.0,
    description: "Reflexiones sobre la búsqueda de la felicidad.",
    isbn: "9789504988251",
    weight: "1.0 kg",
    pages: 350,
  },
  {
    image: "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/af32d5ce-a12e-4055-9e9f-2a1b88131231/9789874670236.jpg",
    title: "El Libro de Bill",
    author: "Alex Hirsch",
    price: 38400,
    publisher: "Editorial A",
    category: "ARTE",
    availability: 7,
    userRating: 4.3,
    description: "Una exploración del mundo del arte a través de la mirada de Bill.",
    isbn: "9789874670237",
    weight: "1.3 kg",
    pages: 250,
  },
  {
    image: "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/f718b610-f742-4f8f-a4d1-3052a8076e15/9788425451010.jpg",
    title: "El Espíritu de la Esperanza",
    author: "Byung-Chul Han",
    price: 21900,
    publisher: "Editorial B",
    category: "FILOSOFÍA",
    availability: 10,
    userRating: 4.5,
    description: "Un libro que invita a la reflexión sobre la esperanza.",
    isbn: "9788425451011",
    weight: "1.0 kg",
    pages: 280,
  },
  {
    image: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/0719dae5-7a95-4f49-84ec-c54d5eb2f026/9786313000937.jpg",
    title: "Zensorialmente",
    author: "Estanislao Bachrach",
    price: 24000,
    publisher: "Editorial A",
    category: "CIENCIA FICCION",
    availability: 20,
    userRating: 4.7,
    description: "Un viaje a través de los sentidos y la percepción.",
    isbn: "9786313000938",
    weight: "0.9 kg",
    pages: 310,
  },
  {
    image: "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/082d480f-385b-4367-ae41-e40d11f6d0f8/9789500770224.jpg",
    title: "En Agosto Nos Vemos",
    author: "Gabriel García Márquez",
    price: 19999,
    publisher: "Editorial B",
    category: "NOVELA",
    availability: 5,
    userRating: 4.8,
    description: "Una novela que explora el amor y la pérdida.",
    isbn: "9789500770225",
    weight: "1.2 kg",
    pages: 320,
  },
  {
    image: "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/ed9bb928-ded3-4413-ab35-305da2bd9498/9789504987369_53e6342d-2504-4bc3-ac04-6df9b0fe1602.jpg",
    title: "La Cacería de Hierro",
    author: "Hugo Alconada Mon",
    price: 27600,
    publisher: "Editorial A",
    category: "SUSPENSO",
    availability: 8,
    userRating: 4.2,
    description: "Un análisis profundo sobre la política actual.",
    isbn: "9789504987368",
    weight: "1.5 kg",
    pages: 300,
  },
  {
    image: "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/ba4e242c-29a7-48b0-b56d-ec0094cfd449/9788410138407_70fffca5-9ef6-4e19-adb8-c02de8d0cba6.jpg",
    title: "La Biblioteca de la Medianoche",
    author: "Matt Haig",
    price: 18642,
    publisher: "Editorial B",
    category: "FANTASÍA",
    availability: 12,
    userRating: 4.6,
    description: "Una exploración mágica de la vida y las decisiones.",
    isbn: "9788410138408",
    weight: "1.1 kg",
    pages: 280,
  },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

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
  const query = useQuery();
  const searchTerm = query.get("search") || ""; // Obtener el término de búsqueda desde la URL

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
    const meetsSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()); // Filtra por título o autor
    return meetsPrice && meetsPublisher && meetsCategory && meetsSearch;
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