import React from 'react';

const ProductCard = ({ title, items, link, onClick }) => (
  <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow rounded-md">
    <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
    <div className="grid grid-cols-2 gap-3 mb-4">
      {items.map((item) => (
        <div 
          key={item.id}
          className="text-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => onClick?.(item)}
        >
          <div className={`${item.image} h-24 rounded mb-2 flex items-center justify-center text-2xl hover:opacity-80 transition-opacity`}>
            {item.icon}
          </div>
          <div className="text-xs text-gray-700">{item.name}</div>
        </div>
      ))}
    </div>
    <a 
      href="#" 
      className="text-blue-600 hover:text-blue-800 text-sm hover:underline transition-colors"
      onClick={(e) => e.preventDefault()}
    >
      {link}
    </a>
  </div>
);

export default ProductCard;