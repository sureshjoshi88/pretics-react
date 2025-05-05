import React,{useState} from 'react'
import {products} from "../datas/products"
const ProductCard = () => {
    console.log(products);
   const[ salected,setSalected]= useState("all");
   const filterData = salected==="all"?products:products.filter((item)=>{
    return item.catergory===salected
   })
  return (
    <>
    <div className='text-end bg'>
        <select  onChange={(e)=>setSalected(e.target.value)} name="" id="salect" className='border mt-2'>
            <option value="all">all</option>
            <option value="electric">electric</option>
            <option value="vihicle">vihicle</option>
        </select>
    </div>
     <div className='flex  flex-wrap gap-4 mt-5 w-full p-2'>
     {filterData.map((value)=>{
      return  <div className='border  rounded p-2'>
      <div className='w-full'>
        <img className='w-96 ' src={value.img} alt="" />
          <p >ID:{value.id}</p>
        <p>Name:{value.name}</p>
        <p>Price:{value.price}</p>
      </div>
      </div>
      })}
     </div>
    
     </>
   
  )
}

export default ProductCard
