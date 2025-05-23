import React, { useState } from 'react'
import { RiGalleryView2 } from "react-icons/ri";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { GiOpenedFoodCan } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";
import { SiBurgerking } from "react-icons/si"; 
import FoodCard from './FoodCard';

let Data =[
    {
        id:1,
        name:"All",
        image:<RiGalleryView2 className='w-[60px] h-[60px] text-green-500'/>,
    },
       {
        id:2,
        name:"breckfast",
        image:<MdFreeBreakfast className='w-[60px] h-[60px] text-green-500' />
,
    },
       {
        id:3,
        name:"Soups",
        image:<TbSoupFilled className='w-[60px] h-[60px] text-green-500' />

    },
       {
        id:4,
        name:"pasta",
        image:<GiOpenedFoodCan className='w-[60px] h-[60px] text-green-500'/>,
    },
       {
        id:5,
        name:"main course",
        image:<MdFoodBank className='w-[60px] h-[60px] text-green-500'/>,
    },
       {
        id:6,
        name:"Pizza",
        image:<FaPizzaSlice className='w-[60px] h-[60px] text-green-500' />,
    },
       {
        id:7,
        name:"Burger",
        image:<SiBurgerking className='w-[60px] h-[60px] text-green-500'/>,
    },
]
let [cate,setCate]=useState(Data);
function filter(Data){
    if(Data === "All"){
        setCate(FoodCard)
    }else{
    newList = FoodCard.filter((item)=>(item.Food_Data===Data))
      setCate(newList)
    }
}

function Category(){
  


    return(
        <div className='flex flex-wrap text-center  w-[100%] sm:w-full justify-center gap-[30px] text-black '>
            
           {Data.map((item)=>(
            <div className='flex w-30 h-30 bg-white items-center flex-col hover:bg-green-200 
            duration-200 p-3 rounded-sm cursor-pointer shadow-lg'
            onClick={()=>filter(item.name)}>
                {item.image}
                {item.name}
            </div>
           ))}
        </div>
    )
}
export default Category;