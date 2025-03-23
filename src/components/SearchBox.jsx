// src/components/SearchBox.jsx
import { useState } from "react";
import { Search } from "lucide-react";

function SearchBox({ value, onSearch }) {
  const [query, setQuery] = useState(value || "");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    onSearch(""); // Reset search when cleared
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          className="pl-10 pr-3 py-2 border rounded w-80"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>
      <button
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
      {query && (
        <button
          className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          onClick={handleClear}
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default SearchBox;