import { Link } from "react-router-dom";

// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Discover Affordable{" "}
            <span className="text-purple-600">Thrift Fashion</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-xl">
            Shop stylish thrift clothes, shoes, and baby wear at unbeatable
            prices. Refresh your wardrobe while keeping it budget-friendly and
            sustainable.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/shop">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all">
              <ShoppingBag size={20} />
              Shop Now
            </button>
            </Link>
            <button className="bg-white hover:bg-gray-100 text-gray-800 border px-6 py-3 rounded-xl shadow-md transition-all">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img
            src="/nathan-dumlao-puWkYFKJVbA-unsplash.jpg"
            alt="Thrift fashion"
            className="w-full h-96 rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
