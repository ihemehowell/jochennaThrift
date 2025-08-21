import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const ordersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (orders.length === 0)
    return <p className="text-center mt-10">No orders found.</p>;

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Orders</h1>
      <ul className="space-y-6">
        {orders.map((order) => (
          <li key={order.id} className="border p-4 rounded-lg shadow">
            <p>
              <strong>Order ID:</strong> {order.id}
            </p>
            <p>
              <strong>Customer:</strong> {order.shipping?.name} ({order.shipping?.phone})
            </p>
            <p>
              <strong>Address:</strong> {order.shipping?.address}, {order.shipping?.location}
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <p>
              <strong>Total:</strong> ₦{order.total}
            </p>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Items:</h4>
              <ul className="space-y-2">
               {order.items.map((item) => (
  <li key={item.id} className="border p-2 rounded">
    <p><strong>Name:</strong> {item.name}</p>
    <p><strong>Category:</strong> {item.category}</p>
    <p><strong>Price:</strong> ₦{item.price}</p>
    <p><strong>Quantity:</strong> {item.quantity}</p>
    <p>
      <strong>Sizes:</strong>{" "}
      {Array.isArray(item.sizes) ? item.sizes.join(", ") : "N/A"}
    </p>
    <img
      src={item.imageUrl}
      alt={item.name}
      className="w-32 h-auto mt-2 rounded"
    />
  </li>
))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
