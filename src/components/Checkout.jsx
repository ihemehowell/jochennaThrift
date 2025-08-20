import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Checkout = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const [shipping, setShipping] = useState({
    name: "",
    address: "",
    phone: "",
    location: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShipping((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!shipping.name || !shipping.phone || !shipping.location || !shipping.address) {
      toast.error("Please fill in all required fields!");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    try {
      // ✅ Create order object
      const newOrder = {
        items: cartItems,
        total,
        shipping,
        status: "pending", // you can update this later
        createdAt: serverTimestamp(),
      };

      // Save to Firestore
      await addDoc(collection(db, "orders"), newOrder);

      toast.success("Order placed successfully!");
      clearCart(); // clear cart after placing order

      setTimeout(() => {
        navigate("/orders"); // go to orders page
      }, 2000);
    } catch (error) {
      console.error("Error saving order:", error);
      toast.error("Failed to place order. Try again.");
    }
  };
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Toast Container */}
      <ToastContainer position="top-right" />

      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-40">
        {/* 🧾 Cart Summary */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Order</h2>
          {cartItems.length === 0 ? (
            <div className="space-y-4">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      ₦{item.price} × {item.quantity}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="px-2 border rounded disabled:opacity-50"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2 border rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t font-semibold text-lg">
                Total: ₦{total.toLocaleString()}
              </div>
            </div>
          )}
        </div>

        {/* 📦 Shipping Details */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-xl font-semibold">Shipping Info</h2>

          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={shipping.name}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={shipping.phone}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              name="location"
              value={shipping.location}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea
              name="address"
              value={shipping.address}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white w-full py-2 rounded hover:bg-gray-800 mt-4"
          >
            Confirm & Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
