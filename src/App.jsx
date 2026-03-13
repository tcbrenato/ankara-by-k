import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";
import Home from "./pages/Home";
import Boutique from "./pages/Boutique";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Publicite from "./pages/Publicite";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (product, taille) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.taille === taille
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.taille === taille
            ? { ...item, quantite: item.quantite + 1 }
            : item
        );
      }
      return [...prev, { ...product, taille, quantite: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id, taille) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.taille === taille))
    );
  };

  const updateQuantite = (id, taille, quantite) => {
    if (quantite < 1) return removeFromCart(id, taille);
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.taille === taille
          ? { ...item, quantite }
          : item
      )
    );
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantite, 0);
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.prix * item.quantite, 0
  );

  const handleSearch = (q) => {
    setSearchQuery(q);
  };

  return (
    <BrowserRouter>
      <Header
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onSearch={handleSearch}
      />

      <main style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/boutique"
            element={
              <Boutique
                addToCart={addToCart}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/publicite" element={<Publicite />} />
        </Routes>
      </main>

      <Footer />

      <FloatingButtons />
      <CartModal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onRemove={removeFromCart}
        onUpdateQuantite={updateQuantite}
        total={cartTotal}
      />
    </BrowserRouter>
  );
}