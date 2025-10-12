import React from 'react'     
function Profiles({username, bath = 2, bed = 3}){
  return (
   
<div className="antialiased text-gray-900 mb-2 items-center justify-center flex ">
  <div className="bg-gray-100 min-h-96 p-8 flex items-center justify-center w-64">
    <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-full lg:w-1/2 md:w-1/3 sm:w-1/2">
     <img className="h-48 w-full object-cover object-end" src="./images/buliding.jpg" alt="Home in Countryside" />
      <div className="p-6">
        <div className="flex items-baseline">
          <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">New</span>
          <div className="ml-9 text-gray-600 text-xs uppercase font-semibold tracking-wide">
          {bed} beds &bull; {bath} baths
          </div>
        </div>
        <h4 className="mt-2 font-semibold text-lg leading-tight truncate">{username}</h4>

        <div className="mt-1">
          <span>$1,900.00</span>
          <span className="text-gray-600 text-sm">/ WK</span>
        </div>
        <div className="mt-2 flex items-center">
          <span className="text-teal-600 font-semibold">
            <span>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              </span>
              </span>
              <span className="ml-2 text-gray-600 text-sm">34 reviews</span>
        </div>
      </div>
    </div>
  </div>
</div>
   
  )
}
export default Profiles
