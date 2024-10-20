import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Purchase from "./pages/Purchase";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CategoryPage from './pages/CategoryPage'; 
import ComoComprar from "./pages/ComoComprar";
import QuienesSomos from "./pages/QuienesSomos";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetail from "./pages/ProductDetail";
import Faq from "./pages/Faq";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/purchase" element={<Purchase />} />

        <Route path="/books/:category" element={<CategoryPage />} /> 
        <Route path="/como-comprar" element={<ComoComprar />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />

        <Route path="/catalog/product/:title" element={<ProductDetail />} />
        <Route path="/faq" element={<Faq />} />


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/faq" element={<Faq />} />

        <Route path="/" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetail />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
