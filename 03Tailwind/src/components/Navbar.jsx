import React from 'react'
function Navbar(){
    
return(

    <>
        <div className="flex flex-1/3 bg-gray-300 p-2 justify-center space-x-48 items-center">
            <div className=' w-1/9  '>
              <h1 className='text-4xl font-bold  '>TextUtlis</h1>
                {/* <img src="./images/tree.jpg" className='rounded-full mt-1' alt="" /> */}
            </div>
            <div className="links flex flex-wrap" >
                <div className='flex justify-center'>
                    <ul className='flex  gap-12 font-bold'>
                        <li>Home</li>
                        <li>About </li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='flex gap-7'>
                <input type="search"  placeholder='Search' name="search" id="" className='border-1 rounded-4xl' />
                <button type="button" className='bg-gradient-to-tl from-pink-700 to-blue-300 p-2 rounded-4xl'>Search</button>
            </div>
        </div>
    </>
)
}

export default Navbar