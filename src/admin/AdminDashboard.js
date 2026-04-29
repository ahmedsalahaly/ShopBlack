import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

export default function AdminDashboard() {
  const { products, deleteProduct } = useProducts();
  const navigate = useNavigate();

  function handleDelete(id) {
    if (window.confirm("Delete this product?")) deleteProduct(id);
  }

  return (
    <div className="max-w-[1100px] mx-auto py-8 px-6">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="text-[1.8rem] font-bold text-[#1e1b4b] dark:text-violet-50 m-0">Admin Dashboard</h1>
          <p className="text-violet-400 dark:text-[#55556a] text-[0.9rem] mt-1">{products.length} products total</p>
        </div>
        <Link to="/admin/add" className="bg-violet-500 hover:bg-violet-600 text-white border-none px-5 py-2.5 rounded-lg font-bold text-[0.9rem] cursor-pointer no-underline inline-block transition-colors">
          + Add Product
        </Link>
      </div>

      <div className="overflow-x-auto border border-violet-200 dark:border-[#252535] rounded-[10px]">
        <table className="w-full border-collapse text-[0.9rem]">
          <thead>
            <tr>
              {["Image", "Name", "Category", "Price", "Stock", "Actions"].map((h) => (
                <th key={h} className="bg-violet-100 dark:bg-[#13131e] text-violet-400 dark:text-[#55556a] px-4 py-3 text-left font-semibold text-[0.8rem] uppercase tracking-wide border-b border-violet-200 dark:border-[#252535]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-violet-50 dark:hover:bg-[#16161f] transition-colors">
                <td className="px-4 py-3 border-b border-violet-200 dark:border-[#252535] last:border-0 align-middle">
                  <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-md" />
                </td>
                <td className="px-4 py-3 border-b border-violet-200 dark:border-[#252535] text-[#1e1b4b] dark:text-violet-50 font-medium align-middle">
                  {product.name}
                </td>
                <td className="px-4 py-3 border-b border-violet-200 dark:border-[#252535] text-violet-400 dark:text-[#55556a] text-[0.8rem] align-middle">
                  {product.category}
                </td>
                <td className="px-4 py-3 border-b border-violet-200 dark:border-[#252535] text-violet-700 dark:text-violet-300 align-middle">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-4 py-3 border-b border-violet-200 dark:border-[#252535] text-violet-700 dark:text-violet-300 align-middle">
                  {product.stock}
                </td>
                <td className="px-4 py-3 border-b border-violet-200 dark:border-[#252535] align-middle">
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/admin/edit/${product.id}`)}
                      className="px-3 py-1 bg-transparent border border-violet-400 dark:border-[#3d3d5c] text-violet-700 dark:text-violet-300 rounded cursor-pointer text-[0.82rem] transition-all hover:border-violet-500 hover:text-violet-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="px-3 py-1 bg-transparent border border-red-200 dark:border-red-900/40 text-red-500 dark:text-red-400 rounded cursor-pointer text-[0.82rem] transition-all hover:bg-red-50 dark:hover:bg-red-400/10"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
