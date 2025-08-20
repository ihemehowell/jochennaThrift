import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const sampleProducts = [
  {
    name: "Baby Shoes",
    price: 3500,
    category: "shoes",
    stock: 20,
    image: "https://picsum.photos/300/300?random=1",
    description: "This is a cute baby shoe"
  },
  {
    name: "Toddler T-Shirt",
    price: 2500,
    category: "clothing",
    stock: 15,
    image: "https://picsum.photos/300/300?random=1"
,
  },
  {
    name: "Feeding Bottle",
    price: 1500,
    category: "feeding",
    stock: 25,
    image: "https://picsum.photos/300/300?random=1"
,
  },
  {
    name: "Baby Walker",
    price: 12000,
    category: "toys",
    stock: 10,
    image: "https://picsum.photos/300/300?random=1"
,
  },
  {
    name: "Newborn Socks",
    price: 1000,
    category: "clothing",
    stock: 30,
    image: "https://picsum.photos/300/300?random=1"
,
  },
];

// Generate 30 products by repeating with slight variation
export async function seedProducts() {
  try {
    const productsRef = collection(db, "products");

    for (let i = 1; i <= 30; i++) {
      const base = sampleProducts[i % sampleProducts.length];
      await addDoc(productsRef, {
        ...base,
        name: `${base.name} #${i}`,
        price: base.price + (i % 5) * 200, // small variation in price
        stock: base.stock - (i % 7),       // vary stock
      });
    }

    console.log("✅ Seeded 30 products into Firestore!");
  } catch (error) {
    console.error("❌ Error seeding products:", error);
  }
}
