import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { IoBook } from "react-icons/io5";
import { BooksContext, ThemeContext } from '../context';
import { FaRegBell } from "react-icons/fa";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import CartDetails from '../Pages/books/CartDetails';


const Header = () => {
    //to toggle cart icon on click
    const [showCart, setShowCart] = useState(false);
    const { state, dispatch } = useContext(BooksContext);
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    
    const handleCartShow = () => {
        if (state.cartData.length > 0) {
            setShowCart(true)
        }
        else {
            setShowCart(false)
        }
    }
  return (
      <header>
          {showCart && <CartDetails onClose={()=>setShowCart(false) } />}
          <nav className='container flex items-center justify-between space-x-10 py-6'>
              <Link to="/" className='flex gap-2 items-center '><IoBook className='w-8 h-8' />
              <span  className='font-bold uppercase'>Word Warehouse</span>
              </Link>
              <ul className='flex  items-center space-x-5'>
                  <li>
                      <Link to="#" className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blue-[2px] p-1 inline-block'><FaRegBell className='w-5 h-5'/></Link>
                  </li>
                  <li>
                      <Link to="#" className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blue-[2px] p-1 inline-block' onClick={() => {
                          setDarkMode((darkMode)=>!darkMode)
                      }}>
                      {darkMode? <MdOutlineWbSunny className='w-5 h-5'/>:<FaRegMoon/>}
                      </Link>
                  </li>
                  <li>
                      <Link
                          onClick={handleCartShow}
                          to="#" className='bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blue-[2px] p-1 inline-block'><PiShoppingCartDuotone className='w-5 h-5' />
                          {
                              state.cartData.length > 0 && (
                                  <span className='rounded-full absolute top-[45px] bg-[#A3B763] text-white text-center p-[2px] w-[30px] h-[30px]'>
                                      {state.cartData.length}
                                  </span>
                              )
                      }
                      </Link>
                  </li>
              </ul>
              
          </nav>
    </header>
  )
}

export default Header
