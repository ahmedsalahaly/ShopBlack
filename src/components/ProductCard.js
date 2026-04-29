import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-violet-100 dark:bg-[#13131e] border border-violet-200 dark:border-[#252535] rounded-[10px] overflow-hidden flex flex-col transition-all duration-200 hover:border-violet-500 hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="block overflow-hidden h-[220px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </Link>
      <div className="p-4 flex flex-col gap-1.5 flex-1">
        <span className="text-[0.75rem] text-violet-400 dark:text-[#55556a] uppercase tracking-wide">
          {product.category}
        </span>
        <Link
          to={`/product/${product.id}`}
          className="text-base font-semibold text-[#1e1b4b] dark:text-violet-50 no-underline hover:underline"
        >
          {product.name}
        </Link>
        <div className="flex items-center justify-between mt-auto pt-2.5">
          <span className="text-[1.1rem] font-bold text-violet-500">
            ${product.price.toFixed(2)}
          </span>
          <button
            className="bg-violet-500 hover:bg-violet-600 text-white border-none px-3.5 py-1.5 rounded-md text-[0.85rem] font-semibold cursor-pointer transition-colors"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
