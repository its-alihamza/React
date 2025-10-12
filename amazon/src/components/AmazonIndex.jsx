import React, { useState } from 'react';
import Header from './header/Header';
import HeroSection from './hero/HeroSection';
import ProductSection from './products/ProductSection';
import BestSeller from './products/BestSeller';
import MainLayout from './layouts/MainLayout';
import LocationSelector from './header/LocationSelector';
import UserAccount from './header/UserAccount';
import SearchBar from './header/SearchBar';
import Button from './common/Button';
import Logo from './common/Logo';
export default function AmazonHomepage() {
  const [cartCount, setCartCount] = useState(0);

  // Event handlers
  const handleSearch = (query, category) => {
    console.log('Searching for:', query, 'in category:', category);
  };

  const handleProductClick = (item) => {
    console.log('Product clicked:', item);
  };

  const handleAddToCart = (item) => {
    setCartCount(prev => prev + 1);
    console.log('Added to cart:', item);
  };

  return (
    <>
    <MainLayout>
      <Header onSearch={handleSearch} cartCount={cartCount} />
      <HeroSection />
      <ProductSection onProductClick={handleProductClick} />
      <BestSeller onAddToCart={handleAddToCart} />
    </MainLayout>
    </>
  );
}