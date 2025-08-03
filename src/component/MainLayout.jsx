import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Foter from './Foter'

const MainLayout = () => {
  return (
    <div>
      <section className='fixed top-0 w-full z-50'>
        <Navbar/>
      </section>
      <section>
      <Outlet/>
      </section>
      <section>
        <Foter/>
      </section>
    </div>
  )
}

export default MainLayout
