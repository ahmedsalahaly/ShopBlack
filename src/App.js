import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminDashboard from "./admin/AdminDashboard";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";

function App() {
  return (
    <ThemeProvider>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-violet-50 dark:bg-[#09090f] text-[#1e1b4b] dark:text-violet-50">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/admin/add" element={<AddProduct />} />
                  <Route path="/admin/edit/:id" element={<EditProduct />} />
                </Routes>
              </main>
              <footer className="text-center py-6 text-xs text-violet-400 dark:text-[#55556a] border-t border-violet-200 dark:border-[#252535]">
                © 2024 ShopBlack — All rights reserved
              </footer>
            </div>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
