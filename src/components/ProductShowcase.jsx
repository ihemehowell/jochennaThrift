import React, { useState } from "react";
import { Tag } from "lucide-react";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Baby Romper",
    price: "₦5,000",
    image: "/assets/products/romper.jpg",
    tags: ["New", "Bestseller"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 2,
    name: "Baby Shoes",
    price: "₦4,500",
    image: "/assets/products/shoes.jpg",
    tags: ["Bestseller"],
    sizes: ["6", "7", "8"],
  },
  {
    id: 3,
    name: "Feeding Bottle Set",
    price: "₦3,000",
    image: "/assets/products/bottles.jpg",
    tags: ["New"],
    sizes: [],
  },
  {
    id: 4,
    name: "School Bag",
    price: "₦3,000",
    image: "/assets/products/bottles.jpg",
    tags: ["New"],
    sizes: [],
  },
  {
    id: 5,
    name: "Walker",
    price: "₦3,000",
    image: "/assets/products/bottles.jpg",
    tags: ["Thrift"],
    sizes: [],
  },
  {
    id: 6,
    name: "Blanket",
    price: "₦3,000",
    image: "/assets/products/bottles.jpg",
    tags: ["New"],
    sizes: [],
  },
];

const ProductShowcase = () => {
  const { addToCart } = useCart();

  // Manage size & quantity state per product
  // We'll create a component per product card to isolate state easily

  return (
    <section className="py-16 px-6 bg-primarylight">
      <h2 className="text-3xl font-baloo text-primary text-center mb-12">
        New Arrivals & Bestsellers
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

const ProductCard = ({ product, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState(
    product.sizes.length > 0 ? product.sizes[0] : null
  );
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      size: selectedSize,
      quantity,
    });
  };

  return (
    <div
      className="bg-neutral-light rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.03] hover:shadow-xl cursor-pointer"
      tabIndex={0}
      aria-label={`${product.name}, priced at ${product.price}, tags: ${product.tags.join(
        ", "
      )}`}
    >
      <div className="relative w-full h-56 overflow-hidden rounded-t-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />

        <div className="absolute top-3 left-3 flex space-x-2">
          {product.tags.map((tag) => {
            let tagColor = "bg-accent text-neutral-dark"; // default
            if (tag === "New") tagColor = "bg-primary text-neutral-light";
            else if (tag === "Bestseller") tagColor = "bg-secondary text-neutral-light";
            else if (tag === "Thrift") tagColor = "bg-mint text-neutral-dark";

            return (
              <span
                key={tag}
                className={`${tagColor} inline-flex items-center space-x-1 rounded-full px-3 py-1 text-xs font-semibold shadow-md`}
              >
                <Tag className="w-3 h-3" />
                <span>{tag}</span>
              </span>
            );
          })}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-nunito text-lg font-semibold mb-1 text-neutral-dark">
          {product.name}
        </h3>
        <p className="font-baloo text-primary text-xl font-bold mb-4">{product.price}</p>

        {/* Size selector */}
        {product.sizes.length > 0 && (
          <div className="mb-4">
            <label className="block mb-1 font-semibold text-neutral-dark">Size:</label>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded-md border font-semibold transition ${
                    selectedSize === size
                      ? "bg-primary text-neutral-light border-primary"
                      : "bg-neutral-light border-neutral-dark"
                  } hover:bg-primary hover:text-neutral-light`}
                  aria-pressed={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity selector */}
        <div className="mb-4">
          <label htmlFor={`quantity-${product.id}`} className="block mb-1 font-semibold text-neutral-dark">
            Quantity:
          </label>
          <input
            id={`quantity-${product.id}`}
            type="number"
            min="3"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(3, Number(e.target.value)))}
            className="w-full border border-neutral-dark rounded-md px-3 py-1 text-center"
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-primary text-neutral-light rounded-md py-2 font-semibold hover:bg-primarylight transition"
          aria-label={`Add ${product.name} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductShowcase;
