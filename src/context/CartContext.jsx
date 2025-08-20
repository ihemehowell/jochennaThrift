// src/context/CartContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext); // ✅ very important!

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.size === product.size
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, size, quantity) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === productId && item.size === size
        ? { ...item, quantity }
        : item
    )
  );
};


 const removeFromCart = (productId, size) => {
  setCartItems((prev) =>
    prev.filter((item) => !(item.id === productId && item.size === size))
  );
};

  const clearCart = () => setCartItems([]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
