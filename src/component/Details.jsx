import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../datas/products'
import { useTheme } from '../hooks/usetheame'

const Details = (props) => {
const {theme,setTheme} = useTheme()

  const {id} = useParams()
const navigate  = useNavigate()
  const handleNavigates = ()=>{
    navigate('/')
  }
  
  const data = products.filter((item)=>item.id==id);
  if(!data) return <h1>Product not found</h1>

  return (
    <>
    <div className='p-3 mt-12'>
      
      <h1 className='text-3xl text-center font-medium'>Details page</h1>
    <div className='w-full flex justify-center m-2'>
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
                  </div>    
                            <div className='p-2'>
                    <p className=' font-semibold cursor-pointer'>Name :- {items.name}</p>
                    <p className='font-semibold cursor-pointer'>Price :- {items.price}</p>
                    <p className='font-semibold cursor-pointer'>Catergory :- {items.catergory}</p>
                    <button onClick={handleNavigates} className='p-1 ps-2 pe-2 mt-4 bg-blue-500 cursor-pointer text-white font-medium rounded'>Back to Home</button>
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
