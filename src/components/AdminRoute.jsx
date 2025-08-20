import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

const ADMIN_UID = "T8JhRFXGnfOZTqsQhv2stbPwCDt1"; // replace with your admin UID

export default function AdminRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user || user.uid !== ADMIN_UID) {
    return <Navigate to="/" replace />;
  }

  return children;
}
