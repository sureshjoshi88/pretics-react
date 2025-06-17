import React, { useState } from 'react';
import { NavLink,Link} from 'react-router-dom';
import { CiDark } from "react-icons/ci";
import { MdSunny } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = "block py-2 px-4 hover:text-blue-600  font-semibold hover:underline";

  return (
    <div className={`sticky top-0 z-50 ${props.mode === 'light' ? 'bg-white' : 'bg-black '} shadow-md`}>
      <nav className="flex justify-between items-center px-4 md:px-10 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 rounded-full "
            src="https://marketplace.canva.com/EAGQ1aYlOWs/1/0/1600w/canva-blue-colorful-illustrative-e-commerce-online-shop-logo-bHiX_0QpJxE.jpg"
            alt="Logo"
          />
          <span className={`font-bold text-xl ${props.mode === 'light' ? 'text-black' : 'text-white'}`}>
            MyShop
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li><NavLink to="/" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium':""}>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium':""}>About</NavLink></li>
          <li><NavLink to="/cart" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium':""}>Cart</NavLink></li>
          <li>
            {props.mode === 'light' ? (
              <button onClick={props.colorMode} className="text-2xl text-black cursor-pointer">
                <CiDark />
              </button>
            ) : (
              <button onClick={props.colorMode} className="text-2xl text-white cursor-pointer">
                <MdSunny />
              </button>
            )}
          </li>
          <li>
            <button
              onClick={props.logout}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
            >
              Log-out
            </button>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className={`md:hidden flex flex-col items-start px-6 py-4 gap-3 ${props.mode === 'light' ? 'bg-white' : 'bg-black'}`}>
          <NavLink to="/" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium':""} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium':""} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/cart" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium':""} onClick={() => setMenuOpen(false)}>Cart</NavLink>
          <div className="pt-2 flex items-center gap-4">
            {props.mode === 'light' ? (
              <button onClick={props.colorMode} className="text-2xl text-black">
                <CiDark />
              </button>
            ) : (
              <button onClick={props.colorMode} className="text-2xl text-white">
                <MdSunny />
              </button>
            )}
            <button
              onClick={props.logout}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
            >
              Log-out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
