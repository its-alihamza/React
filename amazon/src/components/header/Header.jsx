import React from 'react';
import { MapPin } from 'lucide-react';
import Logo from '../common/Logo';
import LocationSelector from './LocationSelector';
import SearchBar from './SearchBar';
import UserAccount from './UserAccount';
import Navigation from './Navigation';
import { NAVIGATION_LINKS } from '../data/mockData';

const Header = ({ onSearch, cartCount }) => {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-800 text-xs py-1 px-4 text-center">
        <div className="flex items-center justify-center space-x-4">
          <MapPin className="w-3 h-3" />
          <span>Delivering to Dha 09812</span>
          <button className="text-yellow-400 hover:text-yellow-300 transition-colors">
            Update location
          </button>
        </div>
      </div>
      
      {/* Main header */}
      <div className="flex items-center py-2 px-4">
        <Logo />
        <LocationSelector />
        <SearchBar onSearch={onSearch} />
        <UserAccount cartCount={cartCount} />
      </div>
      
      {/* Navigation */}
      <Navigation links={NAVIGATION_LINKS} />
    </header>
  );
};

export default Header;