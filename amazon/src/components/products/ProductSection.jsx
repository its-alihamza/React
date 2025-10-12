import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCT_SECTIONS } from '../data/mockData';

const ProductSection = ({ onProductClick }) => (
  <section className="px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {PRODUCT_SECTIONS.map((section) => (
        <ProductCard
          key={section.id}
          title={section.title}
          items={section.items}
          link={section.link}
          onClick={onProductClick}
        />
      ))}
    </div>
  </section>
);

export default ProductSection;