import { useParams } from "react-router-dom";
import Product from "../components/product/Product";
import { useState, useEffect } from "react";
import BackButton from "../components/ui/BackButton";
import { getBooks } from "../redux/slice/bookSlice";
import { useDispatch, useSelector } from "react-redux";

function CategoryPage() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { items: books, loading, error } = useSelector((state) => state.books);

  const filteredBooks = books.filter(
    (book) => book.genre.toLowerCase() === decodeURIComponent(category),
  );

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500"></div>
        <p className="ml-4 text-xl text-blue-700">
          Cargando, por favor espera...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <h2 className="mb-2 text-2xl font-semibold text-red-600">
          ¡Ups! Algo salió mal.
        </h2>
        <p className="text-lg text-gray-700">{error}</p>
      </div>
    );
  }

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
