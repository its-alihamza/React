import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Button from '../common/Button';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(searchQuery, category);
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex-1 max-w-2xl mx-4">
      <div className="flex">
        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-gray-200 text-black px-3 py-2 rounded-l-md border-r border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="Clothing">Clothing</option>
        </select>
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Amazon"
          className="flex-1 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <Button type="submit" className="rounded-l-none rounded-r-md">
          <Search className="w-5 h-5 text-black" />
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;