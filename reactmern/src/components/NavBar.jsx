import React from 'react'
import { Link } from 'react-router-dom'
// import {createrou}

function NavBar() {
  return (
    <>
   <div className='w-full '>
        <nav className='w-full px-10 flex items-center justify-between fixed h-[100px] bg-blue-500'>
            <div id="logo" className='fs-1 text fw-bold'>
                Logo
            </div>

            <div className='flex  gap-4 font-medium text-[24px]'>
              <div><Link to="/"> Home</Link> </div>
              <div > <Link to="/about">About</Link> </div>
              <div><Link to="/service"> Service</Link> </div>
              <div > <Link to="/contact">Contact</Link> </div>
              

            </div>
            
        </nav>
   </div>
    
    
    </>
  )
}

export default NavBar