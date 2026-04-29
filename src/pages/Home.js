import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductContext";

const CATEGORIES = ["All", "Electronics", "Footwear", "Bags", "Accessories", "Kitchen"];

const FAQS = [
  { q: "How long does shipping take?", a: "Standard shipping takes 3–5 business days. Express shipping is available at checkout for 1–2 day delivery." },
  { q: "Can I return a product?", a: "Yes. We offer a 30-day hassle-free return policy. Items must be unused and in original packaging." },
  { q: "Do you ship internationally?", a: "We currently ship to over 40 countries. Shipping rates and times vary by destination." },
  { q: "Is my payment information secure?", a: "Absolutely. All transactions are encrypted with SSL and we never store your card details." },
  { q: "How do I track my order?", a: "Once your order ships you will receive a confirmation email with a tracking number." },
];

export default function Home() {
  const { products } = useProducts();
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const filtered = products.filter((p) => {
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="w-full">

      {/* ── Hero ── */}
      <section className="bg-violet-50 dark:bg-[#09090f] border-b border-violet-200 dark:border-[#252535] py-24 px-6 text-center flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5 max-w-2xl">
          <span className="inline-block px-3.5 py-1 border border-violet-500 rounded-full text-[0.78rem] text-violet-500 tracking-wide uppercase">
            New Collection 2024
          </span>
          <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-black text-[#1e1b4b] dark:text-violet-50 leading-[1.15]">
            Shop Smarter,<br />Live Better.
          </h1>
          <p className="text-violet-700 dark:text-violet-300 text-[1.05rem] max-w-[480px] leading-7">
            Curated products across electronics, fashion, and lifestyle — delivered fast, backed by quality.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="#products" className="inline-block px-7 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-lg font-bold text-[0.95rem] no-underline transition-colors">
              Shop Now
            </a>
            <Link to="/about" className="inline-block px-7 py-3 bg-transparent text-violet-700 dark:text-violet-300 border border-violet-400 dark:border-[#3d3d5c] rounded-lg font-semibold text-[0.95rem] no-underline transition-all hover:border-violet-500 hover:text-violet-500">
              Our Story
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-8 flex-wrap justify-center">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[1.8rem] font-extrabold text-violet-500">6K+</span>
            <span className="text-[0.8rem] text-violet-400 dark:text-[#55556a] uppercase tracking-wide">Happy Customers</span>
          </div>
          <div className="w-px h-10 bg-violet-200 dark:bg-[#252535]" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-[1.8rem] font-extrabold text-violet-500">200+</span>
            <span className="text-[0.8rem] text-violet-400 dark:text-[#55556a] uppercase tracking-wide">Products</span>
          </div>
          <div className="w-px h-10 bg-violet-200 dark:bg-[#252535]" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-[1.8rem] font-extrabold text-violet-500">40+</span>
            <span className="text-[0.8rem] text-violet-400 dark:text-[#55556a] uppercase tracking-wide">Countries</span>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="max-w-[1200px] mx-auto py-20 px-6" id="products">
        <div className="text-center mb-12">
          <h2 className="text-[2rem] font-extrabold text-[#1e1b4b] dark:text-violet-50 mb-2">Our Products</h2>
          <p className="text-violet-700 dark:text-violet-300 text-base">Explore our full collection and find what you love.</p>
        </div>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="block w-full max-w-[420px] mx-auto mb-6 px-[18px] py-3 rounded-lg border border-violet-200 dark:border-[#252535] bg-white dark:bg-[#16161f] text-[#1e1b4b] dark:text-violet-50 text-[0.95rem] outline-none transition-colors focus:border-violet-500 placeholder:text-violet-400 dark:placeholder:text-[#55556a]"
        />

        <div className="flex flex-wrap gap-2.5 mb-8 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full border text-sm cursor-pointer transition-all ${
                activeCategory === cat
                  ? "bg-violet-500 text-white border-violet-500 font-semibold"
                  : "border-violet-200 dark:border-[#252535] bg-transparent text-violet-700 dark:text-violet-300 hover:border-violet-400 hover:text-[#1e1b4b] dark:hover:text-violet-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-violet-400 dark:text-[#55556a] text-center py-12 text-base">No products found.</p>
        ) : (
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* ── Mission & Vision ── */}
      <section className="w-full bg-white dark:bg-[#0e0e17] border-y border-violet-200 dark:border-[#252535] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[2rem] font-extrabold text-[#1e1b4b] dark:text-violet-50 mb-2">Who We Are</h2>
            <p className="text-violet-700 dark:text-violet-300 text-base">Built on purpose, driven by passion.</p>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {[
              { icon: "◎", title: "Our Mission", text: "To make premium products accessible to everyone by removing the middleman and connecting customers directly with quality goods — at honest prices." },
              { icon: "◈", title: "Our Vision", text: "To become the most trusted online destination where customers shop with confidence, knowing every product has been hand-picked for quality, durability, and value." },
              { icon: "◇", title: "Our Values", text: "Transparency, quality-first, and customer respect. We stand behind every item we sell with a 30-day return guarantee and real human support." },
            ].map((card) => (
              <div key={card.title} className="bg-violet-100 dark:bg-[#13131e] border border-violet-200 dark:border-[#252535] rounded-xl p-8 flex flex-col gap-3 transition-colors hover:border-violet-500">
                <span className="text-[1.6rem] text-violet-500">{card.icon}</span>
                <h3 className="text-[1.1rem] font-bold text-[#1e1b4b] dark:text-violet-50">{card.title}</h3>
                <p className="text-violet-700 dark:text-violet-300 text-[0.9rem] leading-7">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-[1200px] mx-auto py-20 px-6 border-b border-violet-200 dark:border-[#252535]">
        <div className="text-center mb-12">
          <h2 className="text-[2rem] font-extrabold text-[#1e1b4b] dark:text-violet-50 mb-2">Frequently Asked Questions</h2>
          <p className="text-violet-700 dark:text-violet-300 text-base">Everything you need to know before you buy.</p>
        </div>
        <div className="max-w-[720px] mx-auto flex flex-col gap-3">
          {FAQS.map((item, i) => (
            <div key={i} className={`border rounded-[10px] overflow-hidden transition-colors ${openFaq === i ? "border-violet-500" : "border-violet-200 dark:border-[#252535]"}`}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center px-5 py-4 bg-violet-100 dark:bg-[#13131e] border-none text-[#1e1b4b] dark:text-violet-50 text-[0.95rem] font-semibold cursor-pointer text-left gap-4 transition-colors hover:bg-violet-50 dark:hover:bg-[#16161f]"
              >
                <span>{item.q}</span>
                <span className="text-[1.3rem] text-violet-500 flex-shrink-0 leading-none">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <div className="px-5 py-4 bg-white dark:bg-[#0e0e17] text-violet-700 dark:text-violet-300 text-[0.9rem] leading-7 border-t border-violet-200 dark:border-[#252535]">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="text-center flex flex-col items-center gap-4 py-20 px-6">
        <h2 className="text-[2rem] font-extrabold text-[#1e1b4b] dark:text-violet-50">Still have questions?</h2>
        <p className="text-violet-700 dark:text-violet-300 text-base">Our team is ready to help you with anything you need.</p>
        <Link to="/contact" className="inline-block px-7 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-lg font-bold text-[0.95rem] no-underline transition-colors">
          Contact Us
        </Link>
      </section>

    </div>
  );
}
