import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between p-2'>
        <div>
            <img className='w-20 h-20 rounded ' src="https://marketplace.canva.com/EAGQ1aYlOWs/1/0/1600w/canva-blue-colorful-illustrative-e-commerce-online-shop-logo-bHiX_0QpJxE.jpg" alt="" />
        </div>
        <ul className='flex gap-10'>
            <li className='hover:underline cursor-pointer hover:text-blue-600 font-semibold'><Link to="/product">
           Home </Link></li>
            <li className='hover:underline cursor-pointer hover:text-blue-600 font-semibold'><Link to="/">
           Product </Link></li>
            <li className='hover:underline cursor-pointer hover:text-blue-600 font-semibold'><Link to="/cart">
           Cart </Link></li>
        </ul>
        <div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
