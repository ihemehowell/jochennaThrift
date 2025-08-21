import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useCart } from "../context/CartContext";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData.slice(0, 8)); // limit to 8 like thrifted
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold relative">
            Popular This Week
            <span className="absolute -bottom-1 left-0 w-12 h-1 bg-primary rounded"></span>
          </h2>
          <button className="text-sm font-medium text-gray-600 hover:text-primary transition">
            View All →
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Hover Button */}
              <button
                onClick={() => addToCart(product)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 text-sm bg-black text-white rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                Add to Cart
              </button>

              {/* Product Info */}
              <div className="p-3">
                <h3 className="text-sm font-medium line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
