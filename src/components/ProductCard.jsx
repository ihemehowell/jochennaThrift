import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Tag, View } from "lucide-react";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="max-w-xs border rounded-xl shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-semibold line-clamp-2">{product.name}</h3>
        <p className="text-lg font-bold text-primary mt-1">₦{product.price}</p>
        <div className="  flex space-x-2">
 
        <span
          key={product.tags}
          className={` bg-gray-500 inline-flex items-center z-40 space-x-1 rounded-full px-3 py-1 text-xs font-semibold shadow-md text-white`}
        >
          <Tag className="w-3 h-3" />
          <span>{product.tags}</span>
        </span>
      
</div>

        {/* Buttons */}
        <div className="mt-auto flex gap-28 pt-4">
          <button
            onClick={() => addToCart(product)}
            className="flex items-center justify-center gap-1 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300"
          >
            <ShoppingCart className="w-5 h-5" />
            
          </button>

          <Link
            to={`/product/${product.id}`}
            className="flex  items-center justify-center px-4 py-2 rounded-lg border hover:bg-gray-100 transition-colors duration-300"
          >
            <View />
            
          </Link>
        </div>
      </div>
    </div>
  );
}


