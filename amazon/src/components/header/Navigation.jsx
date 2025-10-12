import React from 'react';
import { Menu } from 'lucide-react';

const Navigation = ({ links }) => {
  return (
    <div className="bg-gray-700 px-4 py-2 flex items-center space-x-6 text-sm overflow-x-auto">
      <div className="flex items-center cursor-pointer hover:outline hover:outline-1 hover:outline-white p-1 rounded">
        <Menu className="w-4 h-4 mr-1" />
        <span>All</span>
      </div>
      {links.map((link, index) => (
        <a 
          key={`nav-${index}`}
          href="#" 
          className="hover:text-gray-300 whitespace-nowrap hover:outline hover:outline-1 hover:outline-white p-1 rounded transition-colors"
          onClick={(e) => e.preventDefault()}
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default Navigation;