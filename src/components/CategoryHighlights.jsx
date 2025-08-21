import React from "react";
import { Baby, Shirt, ShoppingBag,Footprints } from "lucide-react";

const categories = [
  { id: 1, name: "Boys", icon: <Shirt className="w-8 h-8 text-blue-500" />, bg: "bg-blue-100" },
  { id: 2, name: "Girls", icon: <Shirt className="w-8 h-8 text-blue-500" />, bg: "bg-pink-100" },
  { id: 3, name: "Shoes", icon: <Footprints className="w-8 h-8 text-blue-500" />, bg: "bg-gray-100" },
  { id: 4, name: "Babies", icon: <Baby className="w-8 h-8 text-purple-500" />, bg: "bg-purple-100" },
  { id: 5, name: "Accessories", icon: <ShoppingBag className="w-8 h-8 text-green-500" />, bg: "bg-green-100" },
];

export default function CategoryHighlights() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`flex flex-col items-center justify-center rounded-2xl shadow-md p-6 cursor-pointer hover:scale-105 transition-transform ${cat.bg}`}
          >
            {cat.icon}
            <h3 className="mt-3 font-semibold">{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
