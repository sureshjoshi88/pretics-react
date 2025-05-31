
import { Routes, Route } from 'react-router-dom'
import './App.css'
// import Fetchapi from './component/Fetchapi'
import Form from './component/Form'
import ProductCard from './component/ProductCard'
import Navbar from './component/Navbar'
import Card2 from './component/Card2'



function App() {

  return (
    <>
    
      {/* <div className=' gap-5 md:flex w-full'>
        <div>
          <Card  />

        </div>
        <div >
          <Card2 title="React vite" img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6EAHvdbel54bf0pizpGJS2ZkDVfkcoEpuQ&s"} />

        </div>
      </div>  */}

      {/* <Form/> */}
      <Navbar/>
      <Routes>
        <Route path='/product' element={<ProductCard/>}/>
        <Route path='/cart' element={<Card2 title="React vite" img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6EAHvdbel54bf0pizpGJS2ZkDVfkcoEpuQ&s"} />}/>
      </Routes>

    </>
  )
}

export default App
