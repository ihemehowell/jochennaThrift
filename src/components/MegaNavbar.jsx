import { useState } from "react";

const categories = {
  Boys: ["All", "0-2 Years", "3-5 Years", "6-10 Years"],
  Girls: ["All", "0-2 Years", "3-5 Years", "6-10 Years"],
  Babies: ["Newborn", "0-6 Months", "6-12 Months"],
  Accessories: ["Shoes", "Bottles", "Walkers"]
};

export default function MegaNavBar({ onSelect }) {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <nav className=" px-6 py-3 flex gap-8 relative mb-5">
      {Object.keys(categories).map((cat) => (
        <div key={cat} className="relative group">
          {/* Main Category Button */}
          <button
            className=" hover:text-primary"
            onClick={() =>
              setOpenCategory(openCategory === cat ? null : cat)
            }
          >
            {cat}
          </button>

          {/* Mega Dropdown */}
          {openCategory === cat && (
            <div className="absolute left-0 top-full bg-white shadow-lg rounded mt-2 w-[600px] p-6 grid grid-cols-2 gap-6 z-20">
              <h3 className="col-span-2 text-lg font-semibold border-b pb-2">
                {cat} Categories
              </h3>

              {categories[cat].map((sub) => (
                <button
                  key={sub}
                  onClick={() => {
                    onSelect(cat, sub);
                    setOpenCategory(null);
                  }}
                  className="text-left px-3 py-2 hover:bg-gray-100 rounded"
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
