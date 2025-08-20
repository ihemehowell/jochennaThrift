import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; 
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();``

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id); 
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such product!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-10 mt-20">
      {/* Product Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-80 h-80 object-cover rounded-lg shadow-md bg-white"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p>{product.description}</p>
        <p className="text-xl font-semibold text-primary mb-6">
          ₦{product.price}
        </p>
       

        <button
          className="bg-primary/55 text-white px-6 py-3 rounded-md hover:bg-primary transition-colors duration-200"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
