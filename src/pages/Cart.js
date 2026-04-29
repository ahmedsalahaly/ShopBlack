import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-24 px-8 flex flex-col items-center gap-4">
        <h2 className="text-[1.6rem] font-bold text-[#1e1b4b] dark:text-violet-50">Your cart is empty</h2>
        <p className="text-violet-400 dark:text-[#55556a]">Looks like you haven't added anything yet.</p>
        <Link to="/" className="mt-2 px-7 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-lg font-bold no-underline transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1100px] mx-auto py-8 px-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[1.8rem] font-bold text-[#1e1b4b] dark:text-violet-50">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="bg-transparent border border-violet-400 dark:border-[#3d3d5c] text-violet-700 dark:text-violet-300 px-3.5 py-1.5 rounded-md cursor-pointer text-[0.85rem] transition-all hover:border-red-400 hover:text-red-400"
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8 items-start">
        {/* Items */}
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-5 bg-violet-100 dark:bg-[#13131e] border border-violet-200 dark:border-[#252535] rounded-[10px] p-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
              <div className="flex-1 flex flex-col gap-1">
                <Link to={`/product/${item.id}`} className="text-[#1e1b4b] dark:text-violet-50 font-semibold no-underline text-[0.95rem] hover:underline">
                  {item.name}
                </Link>
                <span className="text-[0.75rem] text-violet-400 dark:text-[#55556a] uppercase">{item.category}</span>
                <span className="text-[0.85rem] text-violet-700 dark:text-violet-300">${item.price.toFixed(2)} each</span>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2.5 bg-violet-50 dark:bg-[#16161f] border border-violet-200 dark:border-[#252535] rounded-md px-2.5 py-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-transparent border-none text-[#1e1b4b] dark:text-violet-50 text-[1.1rem] cursor-pointer px-1 leading-none"
                  >−</button>
                  <span className="text-[#1e1b4b] dark:text-violet-50 font-semibold min-w-[20px] text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-transparent border-none text-[#1e1b4b] dark:text-violet-50 text-[1.1rem] cursor-pointer px-1 leading-none"
                  >+</button>
                </div>
                <span className="font-bold text-violet-500 text-base">${(item.price * item.quantity).toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-transparent border-none text-violet-400 dark:text-[#55556a] text-[0.8rem] cursor-pointer transition-colors hover:text-red-400"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-violet-100 dark:bg-[#13131e] border border-violet-200 dark:border-[#252535] rounded-[10px] p-6 flex flex-col gap-4">
          <h2 className="text-[1.2rem] font-bold text-[#1e1b4b] dark:text-violet-50 m-0">Order Summary</h2>
          <div className="flex justify-between text-violet-700 dark:text-violet-300 text-[0.9rem]">
            <span>Subtotal</span><span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-violet-700 dark:text-violet-300 text-[0.9rem]">
            <span>Shipping</span><span>Free</span>
          </div>
          <div className="flex justify-between text-[#1e1b4b] dark:text-violet-50 font-bold text-[1.1rem] border-t border-violet-200 dark:border-[#252535] pt-4">
            <span>Total</span><span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="w-full py-3.5 bg-violet-500 hover:bg-violet-600 text-white border-none rounded-lg text-[0.95rem] font-bold cursor-pointer transition-colors">
            Proceed to Checkout
          </button>
          <Link to="/" className="block text-center text-violet-700 dark:text-violet-300 text-[0.85rem] no-underline transition-colors hover:text-violet-500">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
