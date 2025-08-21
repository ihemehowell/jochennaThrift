import React from "react";

export default function PromoBanner() {
  return (
    <section className="bg-yellow-100 py-10 text-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        🎉 Limited Time Offer: <span className="text-red-600">20% OFF</span> All Thrift Treasures!
      </h2>
      <p className="mt-2 text-gray-700">Hurry, sale ends this weekend. Shop smart & stylish 💫</p>
      <button className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition">
        Shop Now
      </button>
    </section>
  );
}
