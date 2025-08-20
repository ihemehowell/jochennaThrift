import { useState, useEffect } from "react";
import { db ,auth} from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddProduct() {
  const [file, setFile] = useState(null); // ✅ track selected file
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    stock: "",
    size: "",
    tags :  "",
  });
  const [isAdmin, setIsAdmin] = useState(false);

    
  const { name, price, category, description, stock, size, tags } = product;

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleUpload = async () => {
    if (!file) {
      console.error("No file selected");
      return null;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const cloudData = await res.json();
      if (cloudData.secure_url) {
        return cloudData.secure_url;
      } else {
        console.error("Cloudinary error:", cloudData);
        return null;
      }
    } catch (err) {
      console.error("Error uploading image:", err);
      return null;
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const imageUrl = await handleUpload();
    if (!imageUrl) {
      alert("Image upload failed");
      setLoading(false);
      return;
    }

    const { name, price, category, description, stock, size, tags } = product;

    await addDoc(collection(db, "products"), {
      name,
      price,
      category,
      description,
      stock: parseInt(stock),
      sizes: size.split(",").map(s => s.trim()),
      tags: tags.split(",").map(t => t.trim()),
      imageUrl
    });

    alert("Product added!");
    setProduct({
      name: "",
      price: "",
      category: "",
      description: "",
      stock: "",
      size: "",
      tags: "",
    });
    setFile(null);
  } catch (error) {
    console.error("Error uploading product:", error);
  } finally {
    setLoading(false);
  }
};



  return (
    <div className="p-6 border rounded-lg max-w-md shadow-md bg-white my-32 mx-auto">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
        className="border p-2 w-full mb-5 rounded"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        className="border p-2 w-full mb-5 rounded"
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={product.category}
        onChange={handleChange}
        className="border p-2 w-full mb-5 rounded"
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
        className="border p-2 w-full mb-5 rounded"
      />

      <input type="number" name="stock" placeholder="Stock Quantity" value={product.stock} onChange={handleChange}  className="border p-2 w-full mb-5 rounded"/>

      <input type="text" name="size" placeholder="Sizes (comma separated e.g. S,M,L)" value={product.size} onChange={handleChange}  className="border p-2 w-full mb-5 rounded"/>

      <input type="text" name="tags" placeholder="Tags/Categories" value={product.tags} onChange={handleChange}   className="border p-2 w-full mb-5 rounded"/>


      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])} // ✅ update file state
        className="mb-5 "
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-transparent hover:bg-primary text-gray-500 px-4 py-2 rounded w-full"
      >
        {loading ? "Uploading..." : "Add Product"}
      </button>
    </div>
  );
}
