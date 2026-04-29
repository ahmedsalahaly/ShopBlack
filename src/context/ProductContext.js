import React, { createContext, useContext, useState } from "react";
import initialProducts from "../data/products";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);

  function addProduct(product) {
    const newProduct = { ...product, id: Date.now() };
    setProducts((prev) => [...prev, newProduct]);
  }

  function updateProduct(updatedProduct) {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  }

  function deleteProduct(id) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
