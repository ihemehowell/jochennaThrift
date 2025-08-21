import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Nike Air Force 1",
    price: "$85",
    image: "https://via.placeholder.com/300x400.png?text=Nike+AF1",
    category: "Sneakers",
  },
  {
    id: 2,
    name: "Vintage Denim Jacket",
    price: "$45",
    image: "https://via.placeholder.com/300x400.png?text=Denim+Jacket",
    category: "Jackets",
  },
  {
    id: 3,
    name: "Adidas Hoodie",
    price: "$60",
    image: "https://via.placeholder.com/300x400.png?text=Adidas+Hoodie",
    category: "Hoodies",
  },
  {
    id: 4,
    name: "Champion Sweatpants",
    price: "$40",
    image: "https://via.placeholder.com/300x400.png?text=Champion+Sweats",
    category: "Pants",
  },
];

export default function FeaturedProducts() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Popular This Week</h2>
          <p className="text-gray-500">Our most loved thrift picks right now</p>
        </div>

        {/* Arrows */}
        <div className="flex space-x-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Product Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[250px] flex-shrink-0 group cursor-pointer"
          >
            <div className="relative w-full h-72 overflow-hidden rounded-xl shadow hover:shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-sm text-gray-500">{product.category}</h3>
              <p className="font-semibold">{product.name}</p>
              <p className="text-primary font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
