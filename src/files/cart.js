import React from 'react'

function Cart({displayCart,closeCart}) {
    if (!displayCart) return null;
  return (
    <div>
        {displayCart && (
        <div className='relative w-full flex justify-end '>
        <div className='relative bg-black z-30 w-1/2 border border-black'>
            <div className='fixed text-sm w-full mt-20 bg-black text-white flex pt-8 h-auto sm:w-1/2  '>
                    <div className='w-3/4 px-12 '>
                    <p >Product</p>
                    </div>
                    <div className='flex justify-between w-full ml-6 mr-2'>
                    <p>Price</p>
                    <p>Quality</p>
                    <p>Total</p>
                    </div>   
                    <p className='text-red-700 cursor-pointer' onClick={()=>closeCart()}>close</p>  

                    <div className='fixed mt-20  w-1/2 flex flex-col items-end'>
                    <button className=' py-2 px-12 bg-red-700 rounded-md mb-2'>Clear Cart</button>
                    <div className='py-2 px-12 bg-black text-white rounded-md mb-2'>Total: ksh 30000</div>
                    <button className='py-2 px-12 bg-black text-white rounded-md mb-2'>Proceed to checkout</button>  
                    </div>
                
        </div>

        
        </div>
    </div>
    )}
    </div>
  )
}

export default Cart;