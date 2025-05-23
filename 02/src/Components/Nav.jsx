import React from 'react'
import { IoFastFood } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";


function Nav() {
  return (
    <div className='md:w-full h-[100px] flex justify-between items-center px-8 w-[600px]'>
     <div className='text-black w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
      <IoFastFood  className='w-[30px] h-[30px] text-green-500'/>
      </div>
      <form className='w-[70%] h-[60px] bg-white flex items-center
      px-5 gap-[20px] shadow-md rounded-md'>
        <IoSearch className='text-green-500  text-[20px]' />
        <input className='w-[100%] text-gray-400 text-[17px] outline-none' type="text" placeholder='Search items....' />
      </form>
        <div className='text-black w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative'>
        <span className='absolute bottom-8 right-1 text-green-500 font-semibold'>0</span>    
        <FaShoppingCart  className='w-[30px] h-[30px] text-green-500' />
      </div>
    </div>
  )
}

export default Nav
