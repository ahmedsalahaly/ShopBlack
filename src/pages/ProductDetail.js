import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-20 px-8 text-violet-700 dark:text-violet-300">
        <h2 className="text-[1.8rem] font-bold text-[#1e1b4b] dark:text-violet-50 mb-6">Product not found.</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-transparent border border-violet-400 dark:border-[#3d3d5c] text-violet-700 dark:text-violet-300 px-4 py-2 rounded-md cursor-pointer text-[0.9rem] transition-all hover:border-violet-500 hover:text-violet-500"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const inCart = cartItems.find((item) => item.id === product.id);

  return (
    <div className="max-w-[1000px] mx-auto py-8 px-6">
      <button
        onClick={() => navigate(-1)}
        className="bg-transparent border border-violet-400 dark:border-[#3d3d5c] text-violet-700 dark:text-violet-300 px-4 py-2 rounded-md cursor-pointer text-[0.9rem] mb-8 transition-all hover:border-violet-500 hover:text-violet-500 block"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
        <div className="rounded-xl overflow-hidden border border-violet-200 dark:border-[#252535]">
          <img src={product.image} alt={product.name} className="w-full block object-cover max-h-[420px]" />
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-[0.8rem] text-violet-500 uppercase tracking-[1px]">{product.category}</span>
          <h1 className="text-[1.8rem] font-bold text-[#1e1b4b] dark:text-violet-50 m-0">{product.name}</h1>
          <p className="text-violet-700 dark:text-violet-300 leading-7 text-[0.95rem]">{product.description}</p>
          <div className="flex items-center gap-6">
            <span className="text-[1.8rem] font-extrabold text-violet-500">${product.price.toFixed(2)}</span>
            <span className="text-[0.85rem] text-violet-400 dark:text-[#55556a]">
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </span>
          </div>
          <button
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
            className="w-full py-3.5 bg-violet-500 text-white border-none rounded-lg text-base font-bold cursor-pointer transition-colors hover:bg-violet-600 disabled:bg-[#3d3d5c] disabled:text-[#55556a] disabled:cursor-not-allowed"
          >
            {inCart ? `In Cart (${inCart.quantity})` : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
