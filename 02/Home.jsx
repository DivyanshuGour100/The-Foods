import React, { useState } from 'react'
import Nav from './src/Components/Nav'
import Category from './src/Components/Category';
import FoodCard from './src/Components/FoodCard';
 

function Home() {

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
     <Nav/>
     <Category/>
     <FoodCard/>
    </div>
  )
}

export default Home;
