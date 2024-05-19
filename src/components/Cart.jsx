import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import ItemCard from './ItemCard';
import {useSelector} from "react-redux";
import { IoMdCart } from "react-icons/io";
import {useNavigate} from "react-router-dom"


const Cart = () => {
  const [activeCart, setActiveCart] = useState(true)
  const cartItems = useSelector((state)=>state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item)=>totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((total, item)=>total+item.qty*item.price, 0)
  console.log(cartItems)

  const navigate = useNavigate();
  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] bg-white h-full p-5 ${activeCart?"translate-x-0":"translate-x-full"} transition-all duration-500 z-500`}>
        <div className='flex justify-between my-3 items-center'>
          <span className='text-xl font-bold text-gray-800'>My Order</span>
          <MdClose onClick={()=>setActiveCart(!activeCart)} className='border-2 border-gray-600 text-gray-600 font-bold padding-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer' />
        </div>
         
         {cartItems.length > 0 ? cartItems.map((food)=>{
          return <ItemCard ket={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty}/>
         }) : <h2 className='text-center text-xl font-bold text-gray-800'>Your Cart is empty</h2>
         }
        

        <div className='absolute bottom-0'>
          <h3 className='font-semibold text-gray-800 '>Items: {totalQty}</h3>
          <h3 className='font-semibold text-gray-800 '>Total Amount: {totalPrice}</h3>
          <hr className='w-[90vw] lg:w-[18vw] my-2'/>
          <button onClick={()=>navigate("/success")} className='bg-green-500 font-bold px-3 py-2 text-white rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Checkout</button>
        </div>


      </div>
      

     <IoMdCart onClick={()=>setActiveCart(!activeCart)} className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all "}`}/>
    </>
  )
}

export default Cart