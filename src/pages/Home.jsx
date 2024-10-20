import Categories from "../components/categories/Categories";
import SpecialOfferBanner from "../components/banners/SpecialOfferBanner";
import Button from "../components/ui/Button";
import ImageBanner from "../components/banners/ImageBanner";
import BookSlider from "../components/bookslider/BookSlider";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await fetch(`http://localhost:8080/books/all`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching books:", error);
      return [];
    }
  };

  useEffect(() => {
    getBooks().then((data) => {
      setBooks(data);
      console.log(data);
    });
  }, []);

  const navigate = useNavigate();

  const imagesSlider = [
    "https://acdn.mitiendanube.com/stores/001/315/129/themes/cubo/2-slide-1716819413094-6733356213-b7a5d39530e4190623e5356f6d196b9f1716819414-1024-1024.webp?264042642",
    "https://market2.livriz.com/storage/section/1/escape%20de%20viena.png",
    "https://market2.livriz.com/storage/section/1/Blackwater.jpg",
    "https://planetadelibrosar0.cdnstatics.com/usuaris/web_banners/fotos/4/original/3329_1_PDL_1140x272.png",
  ];

  const recommendedScifi = [
    {
      title: "Dune",
      author: "Frank Herbert",
      price: "$AR 35.000,00",
      image:
        "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/6b96984b-05dd-4f30-80bc-15ef99834924/9789877254112.jpg",
    },
    {
      title: "Neuromancer",
      author: "William Gibson",
      price: "$AR 29.900,00",
      image:
        "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/f6dc21fd-9770-417c-bdd0-585a3d9b500b/4332a3ad-f167-4d2c-b1fb-d9d331f3c53a.jpg",
    },
    {
      title: "Snow Crash",
      author: "Neal Stephenson",
      price: "$AR 27.500,00",
      image:
        "https://images.cdn2.buscalibre.com/fit-in/360x360/80/5d/805db27565d3ca9fffda34190f4046fd.jpg",
    },
    {
      title: "The Left Hand of Darkness",
      author: "Ursula K. Le Guin",
      price: "$AR 30.800,00",
      image:
        "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/b5132fcc-ec40-4fc2-ba6a-b33763c3c1c4/9789505472222.jpg",
    },
    {
      title: "La Casa de los Suicidios",
      author: "Donlea, Charlie",
      price: "$AR 26.900,00",
      image:
        "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/d4076703-04b0-4001-9a27-4e58ebe5630d/9789878474465_6aeebede-5cec-449f-b281-cb724f366c95.jpg",
    },
    {
      title: "La Casa de los Suicidios",
      author: "Donlea, Charlie",
      price: "$AR 26.900,00",
      image:
        "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/d4076703-04b0-4001-9a27-4e58ebe5630d/9789878474465_6aeebede-5cec-449f-b281-cb724f366c95.jpg",
    },
  ];

  const recommendedBooks = [
    {
      title: "La Casa de los Suicidios",
      author: "Donlea, Charlie",
      price: "$AR 26.900,00",
      image:
        "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/d4076703-04b0-4001-9a27-4e58ebe5630d/9789878474465_6aeebede-5cec-449f-b281-cb724f366c95.jpg",
    },
    {
      title: "El Día Más Largo del Año",
      author: "Digregorio, Cecilia",
      price: "$AR 19.999,00",
      image:
        "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/3bb2148f-5090-4b99-8d80-9c668a84d2b0/9789501532999_71470808-a4bc-4518-8bdc-60d61743223f.jpg",
    },
    {
      title: "Los Sorrentinos",
      author: "Higa, Virginia",
      price: "$AR 19.500,00",
      image:
        "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/719e6dd0-68d1-4756-a437-c1e0495f3c74/50d9bfda-9dbc-42b0-9ee7-b860d598cf73.jpg",
    },
    {
      title: "Diario de una Soledad",
      author: "Sarton, May",
      price: "$AR 24.990,00",
      image:
        "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/06a48096-417b-4233-a16f-e78c2425d9fc/9788416529940_cc298532-e139-40dd-969d-e39a0c9c61fe.jpg",
    },
    {
      title: "Las Hijas de la Criada",
      author: "Onega, Sonsoles",
      price: "$AR 36.100,00",
      image:
        "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/b3dc1d8e-159f-49a2-bf7b-cfb1fe691e25/9789504984887_40c60f52-1e8d-4c31-a8c4-7e27a0dcfe7d.jpg",
    },
    {
      title: "El Gato y la Ciudad",
      author: "Bradley, Nick",
      price: "$AR 20.800,00",
      image:
        "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/c73c76e7-8d7f-4694-b5fd-c7566d6b365e/9789878289953.jpg",
    },
  ];

  const handleViewAllProducts = () => {
    navigate("/catalog");
  };

  return (
    <div className="p-8">
      <ImageBanner images={imagesSlider} />

      <div className="flex justify-center">
        <Button
          onClick={handleViewAllProducts}
          className="mt-4 transform px-12 py-6 text-lg transition-transform duration-300 hover:scale-105"
        >
          Ver Todos los Productos
        </Button>
      </div>

      <BookSlider title="Recomendados" books={recommendedBooks} />

      <Categories />

      <SpecialOfferBanner />

      <BookSlider title="Más leidos en Scifi" books={recommendedScifi} />
    </div>
  );
}

export default Home;
