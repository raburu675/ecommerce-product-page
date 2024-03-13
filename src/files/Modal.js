import React from 'react'
import  ReactDOM  from 'react-dom';

function Modal({modal,addToCart,selectedProduct,handleCloseModal}) {
    if (!modal  ) return null;

  return ReactDOM.createPortal(
    <div>
    {modal && (
        <div className='fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-70 z-30 font-vollkorn '> {/*This div is the overlay that should be transparent */}
        <div className='bg-white w-1/2 mt-60 ml-96  rounded-md'>
        <div className='flex justify-between border-b border-black mx-8 '>
               <h1 className='text-red-500 text-2xl font-medium my-2'>Buy Product</h1>
               <img 
                     src='https://img.icons8.com/?size=1x&id=111057&format=png' 
                     alt='CLOSE MODAL'
                     className='h-5 w-5 left-0 my-2 cursor-pointer'
                     onClick={handleCloseModal}
               />
               </div>
     
               <div className='flex'>
               <div>
                 <img src={selectedProduct.url} 
                 alt='IMG'
                 className=' overflow-hidden text-center object-cover h-96 px-8 pt-8 mb-8'
                 />
               </div>
     
               <div className='pt-12 text-lg w-3/5 font-bold '>
               <h3 className='px-12 py-2 text-3xl underline font-bold'>{selectedProduct.name}</h3>
               <h3 className='px-12 pt-8 font-medium ml-12'>{selectedProduct.abv}</h3>
               <h3 className='px-12 pb-4 font-medium ml-12'>Availability : In stock</h3>
               <div className='flex ml-12 w-1/4'>
                  <button 
                  className='px-6 text-white bg-red-900 rounded-lg ml-12'
                  >
                    -
                  </button>
                  <p className='mx-2'>1</p>
                  <button 
                  className='px-6 text-white bg-gray-900 rounded-lg'
                  >
                    +
                  </button>
               </div>
               
               <div className='flex flex-col py-6 font-semibold ml-24 '>
               <p className=' font-medium font-bold '>Quantity:  {selectedProduct.quantity}</p>
               {/* <p>ksh {selectedProduct.price * quantity}</p> */}
               <p className=' font-medium  '>ksh: {selectedProduct.price}</p>
               </div>
     
               <button 
            //    onClick={()=> openCheckout()}
               className=' ml-12 px-10 py-2 bg-blue-900 text-white text-xs rounded-md hover:text-green-100 '>
               Buy
               </button>
               <button 
               className='mx-4 rounded-md text-xs py-2 px-6 bg-red-800 text-white'
               onClick={() => addToCart()}
               >
                Add To Cart
               </button>
               </div>
               </div>
        </div>
        </div>
    )}
    </div>
    ,
    document.getElementById('modal')
  )
}

export default Modal