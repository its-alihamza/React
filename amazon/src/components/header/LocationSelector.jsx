import React from 'react';
import { MapPin } from 'lucide-react';

const LocationSelector = ({ location = "Pakistan", area = "Dha 09812" }) => {
  return (
    <div className="flex items-center text-sm mr-4 cursor-pointer hover:outline hover:outline-1 hover:outline-white p-1 rounded">
      <MapPin className="w-4 h-4 mr-1" />
      <div>
        <div className="text-gray-300 text-xs">Deliver to</div>
        <div className="font-bold">{location}{area}</div>
      </div>
    </div>
  );
};

export default LocationSelector;