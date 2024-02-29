import React from 'react'
import  ReactDOM  from 'react-dom';

function Modal({modal,selectedProduct,handleCloseModal}) {
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
                 className=' overflow-hidden text-center object-cover h-96 px-8 pt-8 mb-8'
                 />
               </div>
     
               <div className='pt-12 text-lg w-3/5 font-bold'>
               <h3 className='px-12 py-2 font-medium'>{selectedProduct.name}</h3>
               <h3 className='px-12 py-2 font-medium'>{selectedProduct.abv}</h3>
               <h3 className='px-12 py-2 font-medium'>Availability : In stock</h3>
               <div className='flex px-12'>
                  <button 
                  className='border border-black rounded-full mr-2 px-2'
                //   onClick={()=>decrement()}
                  >-</button>
                  <div
                  type='number' 
                  className='border border-black w-16 rounded-md text-center font-sans'>
                  {/* ({quantity}) */}
                  1
                  </div>
                  <button 
                  className='border border-black rounded-full ml-2 px-2'
                //   onClick={()=>increment()}
                  >+</button>
               </div>
               
               <div className='flex px-12 py-6 font-medium'>
               <p className='mr-6 font-medium'>{selectedProduct.quantity}</p>
               {/* <p>ksh {selectedProduct.price * quantity}</p> */}
               <p className='mr-6 font-medium'>{selectedProduct.price}</p>
               </div>
     
               <button 
            //    onClick={()=> openCheckout()}
               className=' ml-12 px-16 py-2 bg-black text-white text-xs rounded-md hover:bg-white hover:text-black hover:border hover:border-gray-600 '>
               Buy
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