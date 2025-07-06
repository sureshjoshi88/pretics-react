import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import { CiDark } from "react-icons/ci";
import { MdSunny } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { useTheme } from '../hooks/usetheame';

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const token = JSON.parse(localStorage.getItem('login'))
  const {theme,setTheme} = useTheme();
 const colorMode = () => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#0c1026";
      document.body.style.color = "white";
      setTheme("dark")
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setTheme("light")
    }
  }
  const logOut = () => {
    localStorage.removeItem("login");
    setLogin(false)
  }

  const navigate = useNavigate();
  const sigin = () => {
    navigate('/form')
  }
  return (
    <div className={` z-50 ${theme=== 'light' ? 'bg-white' : 'bg-black '} shadow-md`}>
      <nav className="flex justify-between items-center px-4 md:px-10 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src="https://marketplace.canva.com/EAGQ1aYlOWs/1/0/1600w/canva-blue-colorful-illustrative-e-commerce-online-shop-logo-bHiX_0QpJxE.jpg"
            alt="Logo"
          />
          <span className={`font-bold text-xl ${theme=== 'light' ? 'text-black' : 'text-white'}`}>
            MyShop
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li><NavLink to="/" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium ':"hover:text-blue-500 font-medium"}>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium ':"hover:text-blue-500 font-medium"}>About</NavLink></li>
          <li><NavLink to="/cart" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium ':"hover:text-blue-500 font-medium"}>Cart</NavLink></li>
          <li>
            {theme=== 'light' ? (
              <button onClick={colorMode} className="text-2xl text-black cursor-pointer">
                <CiDark />
              </button>
            ) : (
              <button onClick={colorMode} className="text-2xl text-white cursor-pointer">
                <MdSunny />
              </button>
            )}
          </li>
         
          { token? <button
              onClick={logOut}
              className="bg-red-600 text-white px-3 py-1 font-medium rounded hover:bg-red-700 transition"
            >
              Log-out
            </button>:
             <button
              onClick={sigin}
              className="bg-blue-500 text-white px-3 py-1 rounded font-medium  hover:bg-blue-700 transition"
            >
              Sign Up
            </button>}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className={`md:hidden flex flex-col items-start px-6 py-4 gap-3 ${theme=== 'light' ? 'bg-white' : 'bg-black'}`}>
          <NavLink to="/" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium':""} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium':""} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/cart" className={({isActive})=>isActive?'text-blue-500 border-b-2 font-medium':""} onClick={() => setMenuOpen(false)}>Cart</NavLink>
          <div className="pt-2 flex items-center gap-4">
            {theme=== 'light' ? (
              <button onClick={colorMode} className="text-2xl text-black">
                <CiDark />
              </button>
            ) : (
              <button onClick={colorMode} className="text-2xl text-white">
                <MdSunny />
              </button>
            )}
            { token? <button
              onClick={props.logout}
              className="bg-red-600 text-white px-3 py-1 font-medium rounded hover:bg-red-700 transition"
            >
              Log-out
            </button>:
             <button
              onClick={props.sigin}
              className="bg-blue-500 text-white px-3 py-1 rounded font-medium  hover:bg-blue-700 transition"
            >
              Sign Up
            </button>}
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
