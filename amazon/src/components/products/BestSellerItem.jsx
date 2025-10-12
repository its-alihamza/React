import React from 'react';
import Button from '../common/Button';

const BestSellerItem = ({ item, onAddToCart }) => (
  <div className="flex-none w-48 bg-white p-4 shadow-sm rounded hover:shadow-md transition-all duration-200 hover:-translate-y-1">
    <div className={`${item.image} h-32 rounded mb-3 border flex items-center justify-center text-4xl hover:scale-105 transition-transform cursor-pointer`}>
      👕
    </div>
    <div className="text-sm text-gray-700 mb-2">{item.name}</div>
    <div className="text-lg font-semibold text-gray-900">{item.price}</div>
    <div className="flex text-yellow-400 text-sm mt-1 mb-2">
      {'★'.repeat(4)}{'☆'.repeat(1)}
    </div>
    <Button 
      onClick={() => onAddToCart?.(item)}
      className="w-full text-sm py-1"
    >
      Add to Cart
    </Button>
  </div>
);

export default BestSellerItem;