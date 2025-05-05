import React,{useState} from 'react'
import { products } from '../datas/products'

const Simple = () => {
   
    const [salected,setSalected] = useState("all");
    const filterData = salected==="all"?products:products.filter((item)=>item.catergory===salected)
  return (
    <>
    <select name="" id="" onChange={(e)=>setSalected(e.target.value)}>
    <option value="all">ALL</option>
    <option value="electric">electric</option>
    <option value="vihicle">vihicle</option>
    </select>
    <div  className='grid grid-cols-1 md:grid-cols-3  gap-4 mt-5 w-full p-2'>
      {filterData.map((item)=>{
        return <div className=' rounded  p-2 bg-white shadow-xl'>
         <div className='w-full'>
          <div className='h-80'>
          <img className=' w-100 rounded hover:blur-xs' src={item.img} alt="" />
          </div>
        <div className='p-3'>
        <p className='text-cyan-400 hover:underline cursor-pointer'>ID:{item.id}</p>
        <p className='text-cyan-400 hover:underline cursor-pointer'>Name:{item.name}</p>
        <p className='text-cyan-400 hover:underline cursor-pointer'>Price:{item.price}</p>
        </div>
      </div>
        </div>
      })}
    </div>
    </>
  )
}

export default Simple
