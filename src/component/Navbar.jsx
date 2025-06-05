import React from 'react'
import { Link } from 'react-router-dom'
import { CiDark } from "react-icons/ci";
import { MdSunny } from "react-icons/md";

const Navbar = (props) => {
  return (
    <div className='sticky top-0 bg-white z-50' id='main-heading'>
      <nav className='flex  justify-between p-2 items-center'>
        <div>
          <img className='w-16 h-16 rounded-full' src="https://marketplace.canva.com/EAGQ1aYlOWs/1/0/1600w/canva-blue-colorful-illustrative-e-commerce-online-shop-logo-bHiX_0QpJxE.jpg" alt="" />
        </div>
        <ul className='flex gap-10'>
          <li className='hover:underline cursor-pointer hover:text-blue-600 font-semibold'><Link to="/">
            Home </Link></li>
          <li className='hover:underline cursor-pointer hover:text-blue-600 font-semibold'><Link to="/about">
            About </Link></li>
          <li className='hover:underline cursor-pointer hover:text-blue-600 font-semibold'><Link to="/cart">
            Cart </Link></li>
        </ul>
        <div>
          {props.mode === "light" ? <button onClick={props.colorMode} className='text-2xl text-black pe-2 cursor-pointer'><CiDark /></button> :
            <button onClick={props.colorMode} className='text-2xl text-white pe-2 cursor-pointer'><MdSunny /></button>}
        </div>
        <div>
          <button onClick={props.logout} className='border rounded  p-1 ps-2 pe-2  bg-red-600 text-white cursor-pointer font-medium'>Log-out</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
