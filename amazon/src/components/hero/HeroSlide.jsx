import React from 'react';

const HeroSlide = ({ slide, isActive }) => (
  <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
    <div className={`h-full ${slide.bg}`}>
      <div className="flex items-center justify-between px-8 h-full">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">{slide.title}</h2>
          <p className="text-5xl font-bold text-gray-900 mb-4">{slide.subtitle}</p>
          <p className="text-3xl font-semibold text-gray-800">{slide.description}</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-32 h-20 bg-red-500 rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-red-600 rounded-full relative">
              <div className="absolute inset-2 bg-white rounded-full"></div>
              <div className="absolute inset-3 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-8 bg-white rounded"></div>
              </div>
            </div>
          </div>
          <div className="w-24 h-16 bg-red-500 rounded transform rotate-12 hover:rotate-6 transition-transform"></div>
          <div className="w-32 h-20 bg-blue-600 rounded-lg hover:scale-105 transition-transform"></div>
          <div className="w-24 h-16 bg-red-400 rounded flex items-center justify-center hover:scale-105 transition-transform">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <div className="w-28 h-20 bg-red-500 rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
            <div className="w-20 h-12 bg-blue-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSlide;