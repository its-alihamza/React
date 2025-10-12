import React from 'react';
import { ChevronRight } from 'lucide-react';
import BestSellerItem from './BestSellerItem';
import { BEST_SELLER_ITEMS } from '../data/mockData';

const BestSeller = ({ onAddToCart }) => {
  return (
    <section className="px-4 pb-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Best Sellers in Clothing, Shoes & Jewelry</h2>
        <div className="relative">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {BEST_SELLER_ITEMS.map((item) => (
              <BestSellerItem
                key={item.id}
                item={item}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;