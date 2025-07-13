import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Foter from './Foter'

const MainLayout = (props) => {
  return (
    <div>
      <div className='fixed top-0 w-full z-50'>
        <Navbar/>
      </div>
      <div>
      <Outlet/>
      </div>
      <div>
        <Foter/>j
      </div>
    </div>
  )
}

export default MainLayout
