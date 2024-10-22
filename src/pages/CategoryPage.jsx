import { useParams } from "react-router-dom";
import Product from "../components/product/Product";
import { useState, useEffect } from "react";
import BackButton from "../components/ui/BackButton";
import { getBooks } from "../api/book";

function CategoryPage() {
  const { category } = useParams();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks()
      .then((books) => setBooks(books))
      .catch((error) => console.error("Error getting books:", error));
  }, []);

  const filteredBooks = books.filter(
    (book) => book.genre.toLowerCase() === decodeURIComponent(category),
  );

  return (
    <div className="p-8">
      <div className="flex flex-col text-right">
        <div className="mb-4">
          <BackButton />
        </div>
        <h1 className="mb-5 text-left text-3xl font-semibold">
          Libros en la categoría: {category.toUpperCase()}
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <Product
              key={index}
              image={book.imagePath}
              title={book.title}
              author={book.author}
              price={book.price}
            />
          ))
        ) : (
          <p>No hay libros disponibles en esta categoría.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
