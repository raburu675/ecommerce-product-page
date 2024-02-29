import React, { useState } from 'react'
import Cart from './cart'


function Nav() {
  const [searchTerm, setSearchTerm] = useState('');

  //create state that will hold the products in an empty array
  const [products,setProducts] = useState([
    { id: 37, name:"Robertson winery rose red", price:"1900", quantity:"750ml", abv:"ABV: 35%",url:"https://storage.googleapis.com/drinksvine/products/robertson-winery-rose.webp",initialNumber:1 },
    // { id: 38, name:"Robertson winery rose white", price:"1900", quantity:"750ml", abv:"ABV: 35%",url:"https://storage.googleapis.com/drinksvine/products/robertson-winery.webp" ,initialNumber:1},
    { id: 39, name:"Four cousins", price:"1300", quantity:"750ml", abv:"ABV: 35%",url:"https://soys.co.ke/PImages/LHOUP-0.jpg" ,initialNumber:1},
    { id: 40,name:"4th Street", price:"850", quantity:"750ml", abv:"ABV: 40%", url:"https://cdnprod.mafretailproxy.com/sys-master-root/h06/he9/12462980923422/41697_Main.jpg_480Wx480H",initialNumber:1},
    { id: 41,name:"Asconi pastrol", price:"2080", quantity:"750ml", abv:"ABV: 40%", url:"https://storage.googleapis.com/drinksvine/products/asconi-pastoral.webp",initialNumber:1},
    { id: 42, name:"Nerderberg", price:"850", quantity:"750ml", abv:"ABV: 40%", url:"https://jayswines.com/wp-content/uploads/2020/09/NEDERBURG-MERLOT-1.jpg" ,initialNumber:1},
    { id: 43, name:"Cella cask Red", price:"2300", quantity:"750ml", abv:"ABV: 35%" ,url:"https://jayswines.com/wp-content/uploads/2020/09/cellar-cask-red.png" ,initialNumber:1},
    { id: 44, name:"Cella cask White", price:"1900", quantity:"750ml", abv:"ABV: 40%",url:"https://soys.co.ke/PImages/HYAYJ-0.jpg",initialNumber:1 },
])


  //state to hod the cart
  const [ displayCart,setDisplayCart ] = useState(false)

  //function to open cart
const openCart = () => {
  // setSelectedProduct(product);
  setDisplayCart(true)
}
//function to close cart
const closeCart = () => {
  setDisplayCart(false)
}
  return (
        <div>
        <Cart
        displayCart={displayCart}
        setDisplayCart={setDisplayCart}
        closeCart={closeCart}
        />
        <div className='fixed z-20 bg-black text-white flex justify-center items-center  t-0 w-full'>
        <nav className='w-full  sm:w-2/3 flex justify-between my-4'>
         <p className=' mt-2 font-semibold'>PRODUCTS</p>
         <div className='relative w-2/3'>
                <input
                id='searchBar'
                type='text'
                placeholder='Search here...'
                autoComplete='off'
                className='w-full h-10 text-black text-center rounded-full border border-gray-300 focus:outline-none focus:border-blue-200'
                onChange={(e) => setSearchTerm(e.target.value)}
                />

               <div className='absolute flex flex-col text-center   w-full rounded-3xl py-2' >
               {
                products.filter((val) => {
                  if (searchTerm == ''){
                    return null
                  }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val.name
                  }
                })
                .map((val, key) => {
                  return (
                    <button 
                      key={key} 
                      className='py-2 rounded border border-gray-400 w-full bg-white text-black'>
                      {val.name}
                    </button>
                  ) 
                })
               }
          </div>
         </div>
               
         
          <img 
          alt='CART'
          className=' mt-2 font-semibold cursor-pointer'
          onClick={()=>openCart()}
          />
        </nav>
        </div>    
        
        </div>
  )
}

export default Nav;