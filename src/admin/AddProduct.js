import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

const CATEGORIES = ["Electronics", "Footwear", "Bags", "Accessories", "Kitchen"];
const empty = { name: "", price: "", image: "", category: "Electronics", description: "", stock: "" };

const inputClass = "w-full bg-white dark:bg-[#16161f] border border-violet-200 dark:border-[#252535] rounded-lg text-[#1e1b4b] dark:text-violet-50 px-3.5 py-2.5 text-[0.9rem] outline-none transition-colors focus:border-violet-500 resize-y";

export default function AddProduct() {
  const { addProduct } = useProducts();
  const navigate = useNavigate();
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.price || isNaN(form.price) || Number(form.price) <= 0) e.price = "Valid price is required";
    if (!form.image.trim()) e.image = "Image URL is required";
    if (!form.description.trim()) e.description = "Description is required";
    if (!form.stock || isNaN(form.stock) || Number(form.stock) < 0) e.stock = "Valid stock is required";
    return e;
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    addProduct({ ...form, price: Number(form.price), stock: Number(form.stock) });
    navigate("/admin");
  }

  return (
    <div className="max-w-[1100px] mx-auto py-8 px-6">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h1 className="text-[1.8rem] font-bold text-[#1e1b4b] dark:text-violet-50 m-0">Add Product</h1>
        <button
          onClick={() => navigate("/admin")}
          className="bg-transparent border border-violet-400 dark:border-[#3d3d5c] text-violet-700 dark:text-violet-300 px-4 py-2 rounded-md cursor-pointer text-[0.9rem] transition-all hover:border-violet-500 hover:text-violet-500"
        >
          ← Back
        </button>
      </div>

      <div className="bg-violet-100 dark:bg-[#13131e] border border-violet-200 dark:border-[#252535] rounded-[10px] p-8 max-w-[640px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.85rem] font-semibold text-violet-700 dark:text-violet-300">Product Name</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Wireless Mouse" className={inputClass} />
            {errors.name && <span className="text-red-500 dark:text-red-400 text-[0.8rem]">{errors.name}</span>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.85rem] font-semibold text-violet-700 dark:text-violet-300">Price ($)</label>
              <input name="price" value={form.price} onChange={handleChange} placeholder="e.g. 29.99" type="number" step="0.01" className={inputClass} />
              {errors.price && <span className="text-red-500 dark:text-red-400 text-[0.8rem]">{errors.price}</span>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.85rem] font-semibold text-violet-700 dark:text-violet-300">Stock</label>
              <input name="stock" value={form.stock} onChange={handleChange} placeholder="e.g. 10" type="number" className={inputClass} />
              {errors.stock && <span className="text-red-500 dark:text-red-400 text-[0.8rem]">{errors.stock}</span>}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[0.85rem] font-semibold text-violet-700 dark:text-violet-300">Category</label>
            <select name="category" value={form.category} onChange={handleChange} className={inputClass}>
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[0.85rem] font-semibold text-violet-700 dark:text-violet-300">Image URL</label>
            <input name="image" value={form.image} onChange={handleChange} placeholder="https://..." className={inputClass} />
            {errors.image && <span className="text-red-500 dark:text-red-400 text-[0.8rem]">{errors.image}</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[0.85rem] font-semibold text-violet-700 dark:text-violet-300">Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} rows={4} placeholder="Product description..." className={inputClass} />
            {errors.description && <span className="text-red-500 dark:text-red-400 text-[0.8rem]">{errors.description}</span>}
          </div>

          {form.image && (
            <div className="border border-violet-200 dark:border-[#252535] rounded-lg overflow-hidden max-h-[200px]">
              <img src={form.image} alt="preview" className="w-full h-[200px] object-cover block" onError={(e) => (e.target.style.display = "none")} />
            </div>
          )}

          <button type="submit" className="w-full py-3.5 bg-violet-500 hover:bg-violet-600 text-white border-none rounded-lg text-base font-bold cursor-pointer transition-colors">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
