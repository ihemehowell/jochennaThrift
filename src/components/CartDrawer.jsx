import { Trash2Icon, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    isCartOpen,
    toggleCart,
    
  } = useCart();
    const navigate = useNavigate();
  const handleCheckout = () => {
    toggleCart(); // Close the drawer
    navigate("/checkout");
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={toggleCart} className="text-gray-600 hover:text-black"><X></X></button>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100%-150px)] space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex items-center gap-4">
              <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">₦{item.price} x {item.quantity}</p>
                <div className="flex gap-2 items-center mt-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="px-2 border rounded disabled:opacity-50"
                  >
                    −
                  </button>
                  ...
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                    className="px-2 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
              onClick={() => removeFromCart(item.id, item.size)}
              className="text-red-300 hover:text-red-500 transition-all duration-300"
            >
              <Trash2Icon />
            </button>

            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t">
         <button
      className="bg-black text-white w-full py-2 rounded hover:bg-gray-800"
      onClick={handleCheckout}
    >
      Proceed to Checkout
    </button>
      </div>
    </div>
  );
};

export default CartDrawer;
