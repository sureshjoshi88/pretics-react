import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = (props) => {
  return (
    <div>
      <div className='fixed top-0 w-full z-50'>
        <Navbar/>
      </div>
      <Outlet/>
    </div>
  )
}

export default MainLayout
