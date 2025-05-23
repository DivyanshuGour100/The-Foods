import React from 'react'
import image1 from '../assets/Food/image1.avif'
import image2 from '../assets/Food/image2.avif'
import image3 from '../assets/Food/image3.avif'
import image4 from '../assets/Food/image4.avif'
import image5 from '../assets/Food/image5.avif'
import image6 from '../assets/Food/image6.avif'
import image7 from '../assets/Food/image7.avif'
import image8 from '../assets/Food/image8.avif'
import image9 from '../assets/Food/image9.avif'
import image10 from '../assets/Food/image10.avif'
import image11 from '../assets/Food/image11.avif'
import image12 from '../assets/Food/image12.avif'
import image13 from '../assets/Food/image13.avif'
import image14 from '../assets/Food/image14.webp'
import image15 from '../assets/Food/image15.avif'
import image16 from '../assets/Food/image16.avif'
import image17 from '../assets/Food/image17.avif'
import image18 from '../assets/Food/image18.avif'
import image19 from '../assets/Food/image19.avif'
import image20 from '../assets/Food/image20.avif'
import image21 from '../assets/Food/image21.avif'
import image22 from '../assets/Food/image22.avif'
import image23 from '../assets/Food/image23.avif'
import image24 from '../assets/Food/image24.avif'
import image25 from '../assets/Food/image25.avif'


let  data =[
    {
        id: 1,
        img:image1 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
    {
        id: 2,
        img:image2 ,
        name:"ChickenSoup",
        price: "399/-",
        type: "non_veg",
    },
 {
        id: 3,
        img:image3 ,
        name:"Minestrone Soup",
        price: "349/-",
        type: "Veg",
    },
 {
        id: 4,
        img:image4 ,
        name:"Spaghetti Carbonara",
        price: "999/-",
        type: "non_veg",
    },
     {
        id: 5,
        img:image5 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 6,
        img:image6 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 7,
        img:image7 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 8,
        img:image8 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 9,
        img:image9 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 10,
        img:image10 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 11,
        img:image11 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 12,
        img:image12 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 13,
        img:image13 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 14,
        img:image14 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 15,
        img:image15 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 16,
        img:image16 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 17,
        img:image17 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 18,
        img:image18 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 19,
        img:image19 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 20,
        img:image20 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 21,
        img:image21 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 22,
        img:image22 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 23,
        img:image23 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 24,
        img:image24 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
     {
        id: 25,
        img:image25 ,
        name:"Pancakes",
        price: "299/-",
        type: "Veg",
    },
    

]

function FoodCard() {   
    return(
        <div className='grid px-8 pt-8 md:grid-cols-4 grid-cols-2  items-center  justify-center gap-[30px]'>
        {data.map((id)=>(
        <div className='flex flex-col overflow-hidden items-center justify-center'>
       <div className='h-[330px] w-[250px] hover:border-1 border-green-500
        bg-white shadow-lg   '>
        <img src={id.img} 
        className='h-[200px] w-[240px] p-3 ml-1 rounded-2xl '
        alt="" srcset="" />
        <div>
          <div className='text-black flex px-4 font-bold'>{id.name}</div>
          <div className='text-green-400 flex px-4 font-bold'>{id.price}</div>
          <div className=' flex justify-end px-4 text-green-400 font-bold'>{id.type}</div>
      </div>
          <button className='bg-green-400 px-8  p-2 rounded-md 
          cursor-pointer '>Add to Dish</button>
          </div>
         </div>
        ))}
        </div>
    )
}

export default FoodCard
