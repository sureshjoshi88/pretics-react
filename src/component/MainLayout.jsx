import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = (props) => {
  return (
    <div>
      <div>
        <Navbar logout={props.logOut} sigin={props.sigin}/>
      </div>
      <Outlet/>
    </div>
  )
}

export default MainLayout
