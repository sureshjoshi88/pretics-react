import React,{useState} from 'react'
import {products} from "../datas/products"
const ProductCard = (props) => {
   const[ salected,setSalected]= useState("all");
   const filterData = salected==="all"?products:products.filter((item)=>{
    return item.catergory===salected
   })

  //  const [silder,setSlider] = useState([]);
  //  const [sildervalue,setSlidervalue] = useState("");

  const slider=()=>{
    let butons = document.getElementById("slider-bar");
    butons.style.left = 0;
    butons.style.transition = "1s 0.5s linear"
  }
  const removeSlider=()=>{
    let butons = document.getElementById("slider-bar");
    butons.style.left = "-100%";
    butons.style.transition = "1s 0.5s linear"
  }
  
  return (
    <>

    <div className='flex flex-wrap justify-around bg'>
       <button id="card" onClick={slider} className='border rounded  p-1  bg-red-400 cursor-pointer'>Cart-product</button>
       <select  onChange={(e)=>setSalected(e.target.value)} name="" id="salect" className='border mt-2'>
            <option value="all">all</option>
            <option value="electric">electric</option>
            <option value="vihicle">vihicle</option>
        </select>
        <button onClick={props.logout} className='border rounded  p-1 ps-2 pe-2  bg-red-600 text-white cursor-pointer'>Log-out</button>
    </div>
    <div id='slider-bar' className='h-130 w-100 absolute bg-white overflow-y-scroll flow-cart rounded -left-100'>
    <p onClick={removeSlider} className='text-4xl text-end pe-3 cursor-pointer'>x</p>
    </div>
     <div className='flex  flex-wrap gap-4 mt-5 w-full p-2'>
     {filterData.map((value)=>{
      return  <div className='border  rounded p-2'>
      <div className='w-full'>
        <img className='w-96 h-60 object-contain' src={value.img} alt="" />
          <p >ID:{value.id}</p>
        <p>Name:{value.name}</p>
        <p>Price:{value.price}</p>
        <button id='card-buton' className=' rounded bg-red-400 h-8 w-30 p-1 mt-3 cursor-pointer'>Add to cart</button>
      </div>
      </div>
      })}
     </div>
    
     </>
   
  )
}

export default ProductCard
