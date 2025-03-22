import React, { useState } from 'react';

function SearchBox({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value); // Live search while typing
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onSearch(query); // Trigger search when pressing enter
        }
    };

    return (
        <label className="input flex items-center gap-2 border p-2 rounded shadow-sm">
            <svg
                className="h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg>
            <input
                type="search"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                className="outline-none w-full"
            />
        </label>
    );
}

export default SearchBox;
