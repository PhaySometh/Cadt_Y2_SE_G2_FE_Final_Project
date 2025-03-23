import { useState } from "react";
import { Search } from "lucide-react";

function SearchBox({ value, onSearch }) {
  const [query, setQuery] = useState(value || "");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    onSearch(""); 
  };

  return (
    <div className="flex items-center mt-6">
      <div className="relative flex-1 max-w-md">
        <Search 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
        />
        <input
          type="text"
          className="w-full pl-10 py-2 pr-3 border rounded-lg bg-white text-sm"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>
      <button
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm"
        onClick={handleSearch}
      >
        Search
      </button>
      {query && (
        <button
          className="ml-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm"
          onClick={handleClear}
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default SearchBox;