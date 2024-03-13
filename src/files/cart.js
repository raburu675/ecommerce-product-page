import React from 'react'

function Cart({cart=[],item,selectedProduct,setSelectedProduct,removeFromCart,displayCart,closeCart,addToCart,decrement,increment,clearCart}) {
    // Function to calculate the total price of the items in the cart
    const totalPrice = () => {
      return cart.reduce((total, item) => {
        return total + item.initialNumber * item.price;
      }, 0);
    };

 
  if(!displayCart) return null;
  return (

    <div>
      {displayCart && (
        <div className='fixed flex mt-20 w-full'>
          <div 
          className='w-2/3 bg-black opacity-10'
          onClick={()=>closeCart()}
          >

          </div>

          <div className='w-1/3 flex flex-col bg-white h-[100vh]'>  
              <div className='flex py-4 bg-black '>
                <p className='w-1/2 pl-2 text-white text-sm'>Product</p>
                <div className='flex w-1/2 justify-around text-white text-sm'>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Total</p>
                  <img
                  alt='img'
                  src='https://img.icons8.com/?size=50&id=111057&format=png'
                  className='h-4 w-6 bg-white cursor-pointer'
                  onClick={()=>closeCart()}
                  />
                </div>
              </div>

              {/*div to hold the cart items  */}
              <div className='z-10 min-h-[67vh]  '>
                {cart.map((item,index) => (
                   <div className='flex'  key={index}>
                     <div className='flex text-xs font-semibold w-1/2' >
                      <img
                      src={item.url}
                      className='h-12 my-2'
                      alt='Product'
                      />
                      <p className='text-xs font-semibold mx-2 my-2'>{item.name}</p>
                      <p className='text-xs font-semibold my-2'>{item.quantity}</p>
                      </div>
                      

                      <div className='flex text-xs font-semibold justify-between my-4 ml-4 w-1/3'>
                        <p>{item.price}</p>
                        <div className='flex justify-center items-center rounded-md '>
                          <button
                            className='w-7 h-5 bg-red-900 rounded-lg'
                            onClick={() => decrement(item.id)}
                          >
                            -
                          </button>
                          <div className='px-4'>{item.initialNumber}</div>
                          <button
                            className='w-7 h-5 bg-blue-900 rounded-lg'
                            onClick={() => increment(item.id)}
                          >
                            +
                          </button>
                        </div>
                        <h2>ksh {item.initialNumber * item.price}</h2>

                        <img
                          src='https://img.icons8.com/?size=80&id=WG1DCzrcvFoF&format=png'
                          className='h-4 cursor-pointer mx-2 ' 
                          alt='Remove from cart'
                          onClick={() => removeFromCart(item.id)}
                      />
                      </div>
                   </div>
                ))}
              </div>

              <div className='z-20 flex flex-col w-full items-end'>
                  <div className='border-b  border-black w-full'></div>
                  <button className='px-12 py-2 bg-red-800 rounded-md text-white my-1 text-center text-sm'
                  onClick={()=>clearCart()}
                  >Clear Cart</button>
                  <div className='w-44 rounded-md py-2 bg-black text-white my-1 text-center text-sm'>Total: ksh{totalPrice()}</div>
                  <button className='px-12 py-2 bg-black text-white rounded-md text-center text-sm hover:text-green-400 mb-1'>Proceed to checkout</button>
              </div>
          </div>   
        </div>
      )}
    </div>
  )
}
export default Cart