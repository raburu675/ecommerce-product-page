import React, { useState} from 'react'
import Cart from './cart'
import Modal from './Modal';


function Nav({cart,setCart,increment,decrement,selectedProduct,setSelectedProduct,addToCart,clearCart,removeFromCart}) {
  const [searchTerm, setSearchTerm] = useState('');

  //create state that will hold the products in an empty array
  const [products] = useState([
    { id: 41,name:"Gran Verano Cabernet Sauvignon", price:"1500", quantity:"750ml", abv:"ABV: 40%", url:"https://storage.googleapis.com/zoneke/products/gran-verano-cabernet-sauvignon.webp",initialNumber:1},
    { id: 42, name:"Sileni Estates Straits", price:"5200", quantity:"750ml", abv:"ABV: 40%", url:"https://storage.googleapis.com/zoneke/products/Sileni-estates-straits.webp" ,initialNumber:1},
    { id: 43, name:"Frontera cabernet Sauvignon", price:"1650", quantity:"750ml", abv:"ABV: 35%" ,url:"https://storage.googleapis.com/zoneke/products/frontera-caberbet-sauvignon.webp" ,initialNumber:1},
    { id: 44, name:"Gran Verano auivgnon Blanc", price:"1500", quantity:"750ml", abv:"ABV: 40%",url:"https://storage.googleapis.com/zoneke/products/gran-verano-sauvignon-blanc.webp",initialNumber:1 },
    { id: 41,name:"Offley Reserve Port", price:"3499", quantity:"750ml", abv:"ABV: 40%", url:"https://storage.googleapis.com/zoneke/products/Offley-reserve-port.webp",initialNumber:1},
    { id: 42, name:"Porcupine Ridge Carbanet Sauvignon", price:"2900", quantity:"750ml", abv:"ABV: 40%", url:"https://jayswines.com/wp-content/uploads/2020/09/NEDERBURG-MERLOT-1.jpg" ,initialNumber:1},
    { id: 43, name:"Nederburg Chenin Blanc", price:"1950", quantity:"750ml", abv:"ABV: 35%" ,url:"https://storage.googleapis.com/zoneke/products/nederburg-chenin-blanc.webp" ,initialNumber:1},
    { id: 44, name:"Sileni Estates Pinot Noir", price:"5800", quantity:"750ml", abv:"ABV: 40%",url:"https://storage.googleapis.com/zoneke/products/Sileni-estates-pinot-noir.webp",initialNumber:1 },
    { id: 37, name:"Robertson winery rose red", price:"1900", quantity:"750ml", abv:"ABV: 35%",url:"https://storage.googleapis.com/drinksvine/products/robertson-winery-rose.webp",initialNumber:1 },
    { id: 38, name:"Robertson winery rose white", price:"1900", quantity:"750ml", abv:"ABV: 35%",url:"https://storage.googleapis.com/drinksvine/products/robertson-winery.webp" ,initialNumber:1},
    { id: 39, name:"Four cousins", price:"1300", quantity:"750ml", abv:"ABV: 35%",url:"https://soys.co.ke/PImages/LHOUP-0.jpg" ,initialNumber:1},
    { id: 40,name:"4th Street", price:"850", quantity:"750ml", abv:"ABV: 40%", url:"https://cdnprod.mafretailproxy.com/sys-master-root/h06/he9/12462980923422/41697_Main.jpg_480Wx480H",initialNumber:1},
    { id: 41,name:"Asconi pastrol", price:"2080", quantity:"750ml", abv:"ABV: 40%", url:"https://storage.googleapis.com/drinksvine/products/asconi-pastoral.webp",initialNumber:1},
    { id: 42, name:"Nerderberg", price:"850", quantity:"750ml", abv:"ABV: 40%", url:"https://jayswines.com/wp-content/uploads/2020/09/NEDERBURG-MERLOT-1.jpg" ,initialNumber:1},
    { id: 43, name:"Cella cask Red", price:"2300", quantity:"750ml", abv:"ABV: 35%" ,url:"https://jayswines.com/wp-content/uploads/2020/09/cellar-cask-red.png" ,initialNumber:1},
    { id: 44, name:"Cella cask White", price:"1900", quantity:"750ml", abv:"ABV: 40%",url:"https://soys.co.ke/PImages/HYAYJ-0.jpg",initialNumber:1 },    
])

// const [selectedProduct, setSelectedProduct] = useState(false)

//state to hold the cart
const [ displayCart,setDisplayCart ] = useState(false)

  //function to open cart
const openCart = (product) => {
  setSelectedProduct(product);
  setDisplayCart(true)
}

//function to close cart
const closeCart = () => {
  setDisplayCart(false)
}

//state to hold the buy product modal
const [ modal,setModal ] = useState(false)

//function to trigger the modals visibility
const handleOpenModal = (product) => {
    setSelectedProduct(product)
    setModal(true)
    console.log("opened modal",selectedProduct)
}
const handleCloseModal = () => {
    setModal(false)
}


  return (
        <div>
        <Cart
        cart={cart}
        displayCart={displayCart}
        setDisplayCart={setDisplayCart}
        closeCart={closeCart}
        increment={increment}
        decrement={decrement}
        clearCart={clearCart}
        removeFromCart={removeFromCart}
        />

        <Modal
        modal={modal}
        addToCart={addToCart}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        selectedProduct={selectedProduct}
        />


        <div className='fixed z-20 flex justify-center items-center border-b  t-0 w-full bg-white'>
        <nav className='w-full  sm:w-2/3 flex justify-between my-4'>
         <p className=' mt-2 font-semibold'>PRODUCTS</p>
         <div className='relative w-2/3'>
                <input
                id='searchBar'
                type='text'
                placeholder='Search here...'
                autoComplete='off'
                className='w-full h-10 text-black text-center rounded-full border border-gray-300 focus:outline-none focus:border-blue-400'
                onChange={(e) => setSearchTerm(e.target.value)}
                />

               <div className='absolute flex flex-col text-center   w-full rounded-3xl py-2' >
               {
                products.filter((val) => {
                  if (searchTerm === ''){
                    return null
                  }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val.name
                  }
                })
                .map((val, key) => {
                  return (
                    <button 
                      key={key} 
                      className='py-2 rounded border border-gray-400 w-full bg-white text-black'
                      onClick={()=>handleOpenModal(val)}
                      >
                      {val.name}
                    </button>
                  ) 
                })
               }
          </div>
         </div>
               
         
          <img 
          alt='CART'
          src='https://img.icons8.com/?size=64&id=KqV6G325egdQ&format=png'
          className=' h-12 font-semibold cursor-pointer'
          onClick={()=>openCart()}
          />
        </nav>
        </div>    
        
        </div>
  )
}

export default Nav;