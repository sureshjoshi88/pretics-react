import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../datas/products'
import { useTheme } from '../hooks/usetheame'
import Navbar from './Navbar'

const Details = (props) => {
const {theme,setTheme} = useTheme()

  const {id} = useParams()
const navigate  = useNavigate()
  const handleNavigates = ()=>{
    navigate('/')
  }
  
  const data = products.filter((item)=>item.id==id);
  if(!data) return <h1>Data not found</h1>

  return (
    <>
          <Navbar  logout={props.logOut} sigin={props.sigin} />

    <div className='p-3'>
      <button onClick={handleNavigates} className='p-2 bg-blue-500 cursor-pointer text-white font-medium rounded'>Back to Home</button>
      <h1 className='text-2xl text-center font-medium'>Details page</h1>
    <div className='w-full flex justify-center m-3'>
      {data.map((items,index)=>
      
        <div key={index}>
              <div className={`p-2 ${theme==='light'?'shadow-2xl':'border'} rounded`}>
                <div className='w-100'>
                  <div className='h-100'>
                    <img className='w-full h-100 object-contain' src={items.img} alt="" onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";
                    }} />
                  </div>              <div className='p-2'>
                    <p className=' font-semibold cursor-pointer'>Name :- {items.name}</p>
                    <p className='font-semibold cursor-pointer'>Price :- {items.price}</p>
                    <p className='font-semibold cursor-pointer'>Catergory :- {items.catergory}</p>
                  </div>
                </div>
              </div>

            </div>
     
      )}
    </div>
    </div>
    </>
  )
}

export default Details
