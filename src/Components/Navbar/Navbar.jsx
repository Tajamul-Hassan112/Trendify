import React, { useState, useContext, useEffect } from 'react';
import "./Navbar.css";
import logo from "../Assets/Trendify.png";
import cart_icon from "../Assets/cart_icon.png";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom"

const Navbar = ({isLoggedin,setIsLoggedIn}) => {
  const [toggle, setToggle] = useState(false);
  const { cartItems } = useContext(ShopContext);
  const [cartCount, setCartCount] = useState(0);
  const navigate=useNavigate()
 

  useEffect(() => {
    const count = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);
    setCartCount(count);
  }, [cartItems]);

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions here
    setIsLoggedIn(false); // Update login status
    navigate("/loginsignup")
  };

  return (
    <div>
      <nav className='max-w-[1240px] py-[12px] items-center flex justify-around mx-auto shadow-sm'>
        <div className='flex items-center gap-10'>
          <img src={logo} alt="" className='rounded-full h-[75px] w-[85px]' />
          <p className='text-[#171717] text-4xl'>Tren<span className='text-4xl text-rose-400'>dify</span></p>
        </div>
        {
          toggle ? <IoClose className='text-black md:hidden block text-2xl' onClick={() => setToggle(!toggle)} /> : <IoMenuSharp className='text-black  md:hidden block text-2xl' onClick={() => setToggle(!toggle)} />
        }
        <ul className='hidden md:flex gap-12 text-[#626262] text-xl cursor-pointer'>
          <li><NavLink to="/" activeClassName="active">Shop</NavLink></li>
          <li><NavLink to="/mens" activeClassName="active">Men</NavLink></li>
          <li><NavLink to="/womens" activeClassName="active">Women</NavLink></li>
          <li><NavLink to="/kids" activeClassName="active">Kids</NavLink></li>
        </ul>
        <ul className={`md:hidden text-[#626262] mx-auto fixed bg-black  top-[74px] w-full h-screen 
          ${toggle ? `left-0` : `left-[-100%]`} transition-all duration-300 cursor-pointer
          `}>
          <li className='py-4'>Shop</li>
          <li className='py-4'>Men</li>
          <li className='py-4'>Women</li>
          <li className='py-4'>Kids</li>
        </ul>
        <div className="nav-login flex gap-8">
          {!isLoggedin && <Link to="/loginsignup"><button className="shadow-lg shadow-indigo-800/50 h-[48px] w-[137px] text-[ #515151] text-xl rounded-full">Login</button></Link>}
          {!isLoggedin && <Link to="/signup"><button className="shadow-lg shadow-indigo-800/50 h-[48px] w-[137px] text-[ #515151] text-xl rounded-full">Sign Up</button></Link>}
          {isLoggedin && <button className="shadow-lg shadow-indigo-800/50 h-[48px] w-[137px] text-[ #515151] text-xl rounded-full" onClick={handleLogout}>Log Out</button>}
          {isLoggedin && (
            <li><Link to="/profile"><FontAwesomeIcon icon={faUser} className='text-4xl'  /></Link></li>
          )}
          <div className="relative">
            <Link to="/cart"><img src={cart_icon} alt="Cart Icon"/></Link>
            <div className="absolute top-0 right-0 h-5 w-5 flex justify-center items-center bg-red-500 text-white rounded-full text-xs">{cartCount}</div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
