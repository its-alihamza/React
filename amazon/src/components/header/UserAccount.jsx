import React from 'react';
import { ShoppingCart } from 'lucide-react';

const UserAccount = ({ isSignedIn = false, username = null, cartCount = 0 }) => {
  return (
    <div className="flex items-center space-x-6 text-sm">
      <div className="cursor-pointer hover:outline hover:outline-1 hover:outline-white p-1 rounded">
        <div className="text-xs text-gray-300">Hello, {isSignedIn ? username : 'sign in'}</div>
        <div className="font-bold">Account & Lists</div>
      </div>
      <div className="cursor-pointer hover:outline hover:outline-1 hover:outline-white p-1 rounded">
        <div className="text-xs text-gray-300">Returns</div>
        <div className="font-bold">& Orders</div>
      </div>
      <div className="flex items-center cursor-pointer hover:outline hover:outline-1 hover:outline-white p-1 rounded">
        <ShoppingCart className="w-8 h-8" />
        <span className="ml-1 font-bold">Cart</span>
        {cartCount > 0 && (
          <span className="bg-yellow-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold ml-1">
            {cartCount}
          </span>
        )}
      </div>
    </div>
  );
};

export default UserAccount;