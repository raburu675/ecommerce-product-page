import React from 'react'
import  ReactDOM  from 'react-dom'


function Checkout({checkout,closeCheckout}) {

//   if(!checkout) return null
  return ReactDOM.createPortal(
    <div>
        {checkout && (
      <div  className='fixed  flex justify-center items-center top-0 left-0 h-[100vh] bottom-0 right-0 bg-black bg-opacity-70 z-40' >
        <div className='w-1/3  h-[50vh] bg-black'>
        <form className=' flex  flex-col text-white font-vollkorn'>
          <div className='flex justify-between bg-white py-4'>
          <h1 className='text-black text-xl font-vollkorn px-2 font-semibold'>PAYMENT INFO</h1>
          <img 
          src='https://img.icons8.com/?size=1x&id=111057&format=png' 
          alt='close checkout'
          className='h-6 cursor-pointer px-2'
          onClick={closeCheckout}
          />
          </div>

          
          <input
          className='border-b rounded:md py-4 bg-black text-white px-2 outline-none '
          name='name'
          id='name'
          autoComplete='off'
          placeholder='name'
          
          />
          
          
          <input
          className='border-b rounded:md py-4 bg-black text-white px-2 outline-none'
          name='phoneNumber'
          id='phoneNumber'
          autoComplete='off'
          placeholder='phone number'
          />
          

          
          <input
          className='border-b rounded:md py-4 bg-black text-white px-2 outline-none '
          name='amount'
          id='amount'
          autoComplete='off'
          placeholder='amount'
        //   defaultValue={totalPrice}  // Set the defaultValue here
          />
          

          
          <input
          className='border-b rounded:md py-4 bg-black text-white px-2 outline-none'
          name='address'
          id='address'
          autoComplete='off'
          placeholder='address'
          />
          


          <textarea
          class=" border-none  text-17 rounded-5 border-b-1 border-gray-500 bg-black text-white outline-none font-vollkorn"
          name='message'
          id='message'
          placeholder='instructions'
          rows={5}
          />
          <button className='px-6 py-2 bg-red-500'>PLace Order</button>
      </form>
        </div>
      
  </div>
    )}
    </div>,
    document.getElementById('checkout')
  )
}

export default Checkout