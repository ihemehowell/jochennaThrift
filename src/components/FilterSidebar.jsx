import { X } from "lucide-react";

const FilterSidebar = ({ filters, selectedFilters, onFilterChange, isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 z-40 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:block`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4 mt-16">
          <h2 className="text-lg font-bold">Filters</h2>
          <button
            className="lg:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Category</h3>
          {filters.category.map((cat, idx) => (
            <label key={idx} className="flex items-center mb-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.category.includes(cat)}
                onChange={() => onFilterChange("category", cat)}
                className="mr-2 accent-primary"
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>

        {/* Gender */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Gender</h3>
          {filters.gender.map((g, idx) => (
            <label key={idx} className="flex items-center mb-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.gender.includes(g)}
                onChange={() => onFilterChange("gender", g)}
                className="mr-2 accent-primary"
              />
              <span>{g}</span>
            </label>
          ))}
        </div>

        {/* Age Group */}
        <div>
          <h3 className="font-semibold mb-2">Age Group</h3>
          {filters.ageGroup.map((age, idx) => (
            <label key={idx} className="flex items-center mb-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.ageGroup.includes(age)}
                onChange={() => onFilterChange("ageGroup", age)}
                className="mr-2 accent-primary"
              />
              <span>{age}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Dark overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FilterSidebar;
