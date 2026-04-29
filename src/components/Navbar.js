import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;
  const close = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between px-8 h-16 bg-white dark:bg-[#0e0e17] border-b border-violet-200 dark:border-[#252535] max-[700px]:relative">
      <Link to="/" className="text-[1.4rem] font-bold text-violet-500 no-underline tracking-wide" onClick={close}>
        ShopBlack
      </Link>

      {/* Hamburger */}
      <button
        className="min-[700px]:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span className="block w-[22px] h-0.5 bg-[#1e1b4b] dark:bg-violet-50 rounded-sm" />
        <span className="block w-[22px] h-0.5 bg-[#1e1b4b] dark:bg-violet-50 rounded-sm" />
        <span className="block w-[22px] h-0.5 bg-[#1e1b4b] dark:bg-violet-50 rounded-sm" />
      </button>

      {/* Links */}
      <div className={`
        ${menuOpen ? "flex" : "hidden"} min-[700px]:flex
        flex-col min-[700px]:flex-row
        absolute min-[700px]:static top-16 left-0 right-0 min-[700px]:top-auto
        bg-white dark:bg-[#0e0e17] min-[700px]:bg-transparent min-[700px]:dark:bg-transparent
        border-b border-violet-200 dark:border-[#252535] min-[700px]:border-none
        p-6 min-[700px]:p-0
        gap-4 min-[700px]:gap-6
        z-[99] min-[700px]:z-auto
        items-start min-[700px]:items-center
      `}>
        <Link to="/" onClick={close} className={`no-underline text-[0.95rem] font-medium transition-colors ${isActive("/") ? "text-[#1e1b4b] dark:text-violet-50" : "text-violet-700 dark:text-violet-300 hover:text-[#1e1b4b] dark:hover:text-violet-50"}`}>Home</Link>
        <Link to="/about" onClick={close} className={`no-underline text-[0.95rem] font-medium transition-colors ${isActive("/about") ? "text-[#1e1b4b] dark:text-violet-50" : "text-violet-700 dark:text-violet-300 hover:text-[#1e1b4b] dark:hover:text-violet-50"}`}>About</Link>
        <Link to="/contact" onClick={close} className={`no-underline text-[0.95rem] font-medium transition-colors ${isActive("/contact") ? "text-[#1e1b4b] dark:text-violet-50" : "text-violet-700 dark:text-violet-300 hover:text-[#1e1b4b] dark:hover:text-violet-50"}`}>Contact</Link>
        <Link to="/cart" onClick={close} className={`flex items-center gap-1 no-underline text-[0.95rem] font-medium transition-colors ${isActive("/cart") ? "text-[#1e1b4b] dark:text-violet-50" : "text-violet-700 dark:text-violet-300 hover:text-[#1e1b4b] dark:hover:text-violet-50"}`}>
          Cart
          {totalItems > 0 && (
            <span className="bg-violet-500 text-white text-[0.7rem] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
              {totalItems}
            </span>
          )}
        </Link>
        <Link
          to="/admin"
          onClick={close}
          className={`px-3.5 py-1.5 border rounded-md no-underline text-[0.95rem] font-medium transition-colors ${location.pathname.startsWith("/admin") ? "text-[#1e1b4b] dark:text-violet-50 border-violet-500" : "text-violet-700 dark:text-violet-300 border-violet-400 dark:border-[#3d3d5c] hover:text-[#1e1b4b] dark:hover:text-violet-50 hover:border-violet-500"}`}
        >
          Admin
        </Link>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          className="w-9 h-9 rounded-full bg-violet-100 dark:bg-[#13131e] border border-violet-400 dark:border-[#3d3d5c] text-[#1e1b4b] dark:text-violet-50 text-base flex items-center justify-center cursor-pointer transition-all hover:bg-violet-500 hover:border-violet-500 hover:text-white hover:rotate-12"
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </div>
    </nav>
  );
}
