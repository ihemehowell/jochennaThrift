import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import { Filter, Grid, List } from "lucide-react";
import MegaNavBar from "../components/MegaNavbar";
import WithSpinner from "../components/WithSpinner"; // 👈 import HOC

function Shop({}) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [view, setView] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    gender: [],
    ageGroup: [],
  });

  const filters = {
    category: [...new Set(products.map((p) => p.category))],
    gender: [...new Set(products.map((p) => p.gender))],
    ageGroup: [...new Set(products.map((p) => p.ageGroup))],
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
        setFilteredProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (selectedFilters.category.length > 0) {
      filtered = filtered.filter((p) =>
        selectedFilters.category.includes(p.category)
      );
    }
    if (selectedFilters.gender.length > 0) {
      filtered = filtered.filter((p) =>
        selectedFilters.gender.includes(p.gender)
      );
    }
    if (selectedFilters.ageGroup.length > 0) {
      filtered = filtered.filter((p) =>
        selectedFilters.ageGroup.includes(p.ageGroup)
      );
    }
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((p) =>
        (p.name || "").toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedFilters, searchTerm, products]);

  const handleFilterChange = (type, value) => {
    setSelectedFilters((prev) => {
      const current = prev[type];
      return {
        ...prev,
        [type]: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });
  };

  return (
    <div className="flex max-w-[1900px] mx-auto px-4 py-8 gap-8">
      <FilterSidebar
        filters={filters}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        isOpen={isFilterOpen}
        setIsOpen={setIsFilterOpen}
      />

      <main className="flex-1">
        <MegaNavBar
          onSelect={(cat, sub) => {
            setSelectedCategory(cat);
            setSelectedSubcategory(sub);
          }}
        />

        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full md:w-1/2 border rounded-lg px-4 py-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <button
              className="lg:hidden flex items-center px-4 py-3 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition"
              onClick={() => setIsFilterOpen(true)}
            >
              <Filter className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              <button
                className={`px-3 py-2 rounded-lg ${view === "grid" ? "bg-primary text-white" : "bg-gray-100"}`}
                onClick={() => setView("grid")}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                className={`px-3 py-2 rounded-lg ${view === "list" ? "bg-primary text-white" : "bg-gray-100"}`}
                onClick={() => setView("list")}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-gray-500">No products found.</p>
        ) : (
          <div
            className={view === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              : "flex  gap-6"}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} view={view} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

// ✅ Wrap Shop with withSpinner before export
export default WithSpinner(Shop);
