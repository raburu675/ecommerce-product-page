import React, { useState } from 'react'
import Modal from './Modal'
import CartPopup from './CartPopup'

function Products() {
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

    const [selectedProduct, setSelectedProduct] = useState(false)

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

    //state to add addToCart popup
    const[cartPopup,setCartPopup] = useState(false)
    //functions to trigger carts popups vsibility
    const openCartPopup = (product) => {
        setSelectedProduct(product);
        setCartPopup(true)
    }

    //function to close the cartpopup
    const closeCartPopup = () => {
        setCartPopup(false)
    }
  return (
            <div className=''>
            <Modal
            modal={modal}
            handleCloseModal={handleCloseModal}
            handleOpenModal={handleOpenModal}
            selectedProduct={selectedProduct}
            />

            <CartPopup
            cartPopup={cartPopup}
            setCartPopup={setCartPopup}
            selectedProduct={selectedProduct}
            closeCartPopup={closeCartPopup}
            /> 
            <div className='w-full flex flex-col font-vollkorn justify-center items-center pt-24'>
            <h2 className='text-center my-2 text-red-700 text-4xl '>WINE SHOP</h2>
            <div className=' w-2/3  flex flex-wrap justify-center  font-vollkorn'>
                    {products.map((val,id) =>(
                    <div className='w-60 h-2/6 border border-gray-300 rounded-md my-2 mx-2 bg-white hover:shadow-2xl'>
                    <p className='relative text-xs flex justify-end py-2 pr-2'>{val.abv}</p>
                    <img src={val.url}
                    className=' overflow-hidden text-center object-cover h-44 my-2 px-12 cursor-pointer'
                    onClick={()=>handleOpenModal(val)}
                    />
                    <div class='border-b border-gray-400 ml-3 w-11/12'></div>
                    <div className='py-2 flex flex-col items-center'>
                            <p  className='pl-2 text-xs uppercase font-vollkorn font-semibold'>{val.name}</p>
                            <p  className='pl-2 text-xs upprercase font-semibold'>{val.quantity}</p>
                            <p  className='pl-2 text-xs font-semibold'>ksh{val.price}</p>
                    </div>
                
                    <div className='flex justify-center'>
                        <button
                         onClick={() => openCartPopup(val)}
                        className='font-semibold px-6 h-7 mx-1 my-2 border border-gray-300 rounded-lg w-3/4 hover:bg-gray-100  text-xs'
                        >add to cart</button>
                    </div>
                    </div>
                    ))}
            </div>
            </div>
            </div>
           
            
             
      
  )
}

export default Products