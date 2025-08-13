"use client";

export function SearchBar() {
  return (
    <div className="flex-1 max-w-2xl mx-8">
      <div className="flex">
        <select className="bg-gray-100 border border-gray-300 px-3 py-2 rounded-l-md text-sm">
          <option>All</option>
          <option>Electronics</option>
          <option>Books</option>
        </select>
        <input
          type="text"
          placeholder="Search Amazon"
          className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button className="bg-orange-500 text-white px-6 py-2 rounded-r-md hover:bg-orange-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
} 