import React, {useState} from 'react'
import {products} from "../datas/products"
import Comment from './Comment';
import { IoCartSharp } from "react-icons/io5";



const ProductCard = (props) => {

 
   const[ salected,setSalected]= useState("all");
   const filterData = salected==="all"?products:products.filter((item)=>{
    return item.catergory===salected
   })


  const slider=()=>{
    let butons = document.getElementById("slider-bar");
    butons.style.left = 0;
    butons.style.transition = "0.7s 0.2s  linear"
  }
  const removeSlider=()=>{
    let butons = document.getElementById("slider-bar");
    butons.style.left = "-100%";
    butons.style.transition = "1.4s 0.2s  linear"
  }
  

  const [addcard,setAddcard] = useState([]);
  const [cardcount,setCardcount] = useState(0);



  return (
    <>

  <div className='sticky top-0 bg-white p-3  z-40'>
           <h2 className='font-bold text-3xl text-center'>My Social Feed</h2>

      <div className='flex flex-wrap justify-around  '>
       <button id="card" onClick={slider} className=' text-3xl text-black rounded  p-1 cursor-pointer relative'><IoCartSharp /><span style={{borderRadius:"50%",height:"24px",width:"24px",fontSize:"16px"}} className='absolute -top-4.5  -right-2 bg-red-500 font-semibold rounded-b-full text-white'>{cardcount}</span>
</button>
       <select  onChange={(e)=>setSalected(e.target.value)} name="" id="salect" className='border mt-2'>
            <option value="all">all</option>
            <option value="electric">electric</option>
            <option value="vihicle">vihicle</option>
            <option value="clothes">clothesl</option>
        </select>
        <button onClick={props.logout} className='border rounded  p-1 ps-2 pe-2  bg-red-600 text-white cursor-pointer'>Log-out</button>
    </div>
  </div>

   <div className='sticky top-22'>
     <div id='slider-bar' className='md:h-130 h-70 md:w-100 w-90 absolute  bg-white overflow-y-scroll flow-cart rounded -left-100'>
    <p onClick={removeSlider} className='text-4xl text-end pe-3 cursor-pointer'>x</p>
          {addcard.length>0?"":<p className='text-center top-20'>No data found</p>}
    {addcard.map((items)=>{
      return <div className='flex p-2 gap-3 items-center'>
        <img className='w-40 rounded ' src={items.img} alt="" />
        <p className='font-semibold '>{items.name}</p>
        <p className='font-semibold '>{items.price}</p>
      </div>
    })}
   
    </div>
   </div>
     <div className=' grid md:grid-cols-3 gap-4 mt-5 w-full  p-2'>
     {filterData.map((value)=>{
      return  <div className='shadow-xl w-full rounded p-2 '>
      <div  className='w-full'>
        <img className='w-full h-60 object-contain' src={value.img} alt="" />
          <p >ID: {value.id}</p>
        <p>Name: {value.name}</p>
        <p>Price: {value.price}</p>
        <div className='flex gap-3 flex-wrap'>
                  <button onClick={()=>addcard.includes(value)?setAddcard([...addcard]):setAddcard([...addcard,value])[ setCardcount(addcard.length+1)]} id='card-buton' className='text-white rounded bg-red-400 h-8 w-30 p-1 mt-3 cursor-pointer'>Add to Cart</button>
                  <button id='card-buton' className='text-white rounded bg-green-600 h-8 w-30 p-1 mt-3 cursor-pointer'>Buy Now</button>
        </div>
        <div className='mt-3'>
          <Comment/>
        </div>
      </div>
      </div>
      })}
     </div>
     </>
   
  )
}

export default ProductCard
