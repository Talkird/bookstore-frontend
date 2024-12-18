import Categories from "../components/categories/categories";
import SpecialOfferBanner from "../components/banners/SpecialOfferBanner";
import Button from "../components/ui/Button";
import ImageBanner from "../components/banners/ImageBanner";
import BookSlider from "../components/bookslider/BookSlider";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBooks } from "../redux/slice/bookSlice";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const { items: books, loading } = useSelector((state) => state.books);

  const navigate = useNavigate();

  const recommendedScifi = [
    {
      title: "Dune",
      author: "Frank Herbert",
      price: "$AR 35.000,00",
      image:
        "https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/6b96984b-05dd-4f30-80bc-15ef99834924/9789877254112.jpg",
    },
    {
      title: "Neuromante",
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
      title:"1984",
      author:"George Orwell",
      price:"$AR 19.990,00",
      image:"https://acdn.mitiendanube.com/stores/001/315/129/products/henci-290449789875669284-3dcb89556a66c96b2117322031722972-480-0.jpg"
    },
    {
      title:"Los Juegos del Hambre",
      author:"Suzanne Collins",
      price:"$AR 38.799,00",
      image:"https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/43933708-15ef-4879-9133-3f51ac968232/9789878120201.jpg"
    },
    {
      title:"La naranja mecánica",
      author:"Anthony Burgess",
      price:"$AR 30.100,00",
      image:"https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/e602a280-4d50-4162-933b-7ebf2ae4fa26/9789505472734_09abc2ac-efb8-4636-b6cf-d9eebf3a4903.jpg"
    }
    
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

  return (
    <div className="p-8">
      <ImageBanner />

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
