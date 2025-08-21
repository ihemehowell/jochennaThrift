// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { auth, provider } from "../firebase";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useCart } from "../context/CartContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const { cartItems, toggleCart } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // ✅ Admin email(s)
  const isAdmin = user?.email === "kelvinuc111@gmail.com"; // change this

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
  try {
    const email = prompt("Enter email:");
    const password = prompt("Enter password:");
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Login successful!");
  } catch (error) {
    console.error("Login failed:", error);
  }
};

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-3xl font-semibold">
          <span className="text-purple-600">Jochenna</span>Thrift
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-6 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-purple-600 transition-colors duration-300 ${
                    isActive ? "text-purple-600" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {/* ✅ Add Product link only for Admin */}
          {isAdmin && (
            <li>
              <NavLink
                to="/add-product"
                className={({ isActive }) =>
                  `hover:text-purple-600
                 transition-colors duration-300 ${
                    isActive ? "text-purple-600" : ""
                  }`
                }
              >
                Add Product
              </NavLink>

            </li>

            
          )}

          {isAdmin && (
            <li>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  `hover:text-primary transition-colors duration-300 ${
                    isActive ? "text-purple-600" : ""
                  }`
                }
              >
                Admin Order
              </NavLink>
            </li>
          )

          }
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-2 ">
              <span className="text-sm text-gray-600 hidden sm:block">
                {<User className="transition-transform duration-200 hover:scale-110 text-purple-600"/> || user.email}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-200 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-300 hover:bg-red-500"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-primary text-white px-3 py-1 rounded-lg text-sm transition-colors duration-300"
            >
              Login
            </button>
          )}

          {/* Cart */}
          <button
            onClick={toggleCart}
            className="relative transition-transform duration-200 hover:scale-110"
          >
            <ShoppingCart className="w-6 h-6 text-purple-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600/60 text-white text-xs font-bold rounded-full px-1.5">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-purple-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white px-6 pb-4 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block hover:text-purple-600 transition-colors duration-300 ${
                    isActive ? "text-purple-600" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {/* ✅ Add Product in mobile menu too */}
          {isAdmin && (
            <li>
              <NavLink
                to="/add-product"
                className={({ isActive }) =>
                  `block hover:text-purple-600 transition-colors duration-300 ${
                    isActive ? "text-purple-600" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Add Product
              </NavLink>
            </li>
          )}

           {isAdmin && (
            <li>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  `hover:text-purple-600 transition-colors duration-300 ${
                    isActive ? "text-purple-600" : ""
                  }`
                }
              >
                Admin Order
              </NavLink>
            </li>
          )

          }
        </ul>
      </div>
    </nav>
  );
}
