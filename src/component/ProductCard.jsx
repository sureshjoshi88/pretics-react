import React, { useState, useEffect } from 'react'
import { products } from "../datas/products"
import Comment from './Comment';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Tostyfiy from './Tostyfiy';
import Navbar from './Navbar';
import Foter from './Foter';




const ProductCard = (props) => {

const [count,setCount] = useState(3);
  const [salected, setSalected] = useState("all");
  const handleCount = () =>{
    setCount(count+3)
  }
  const finalArray = products.slice(0,count)
  const filterData = salected === "all" ? finalArray : products.filter((item) => {
    return item.catergory === salected
  })



  const [addcard, setAddcard] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];

  });
  const [cardcount, setCardcount] = useState(() => {
    return JSON.parse(localStorage.getItem("length")) || 0;

  });



  const handleAddCard = (value) => {
    let index = addcard.findIndex((item) => item.id === value.id)
    if (index === -1) {
      const newaddcard = [...addcard, { ...value, quantity: 1 }];
      setAddcard(newaddcard);
      setCardcount(newaddcard.length);
      Toastify({
        text: `${value.name} is succedfully added `,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #17e335, #76deab)",
        },
        onClick: function () { } // Callback after click
      }).showToast();
    } else {
      const updateQuantity = [...addcard];
      updateQuantity[index].quantity += 1;
      setAddcard(updateQuantity)
      Toastify({
        text: `${value.name} quantity increase`,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #navyblue, blue)",
        },
        onClick: function () { } // Callback after click
      }).showToast();
    }
  }


    useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addcard));
    localStorage.setItem("length", JSON.stringify(addcard.length));
  }, [addcard]);
  return (
    <>
      {/* {props.error && <Tostyfiy error={props.error} />}/ */}
      <Navbar mode={props.mode} colorMode={props.colorMode} logout={props.logOut} />


      <div className='p-3'>
        <div className='flex flex-wrap justify-around  mt-3'>

          <select onChange={(e) => setSalected(e.target.value)} name="" id="salect" className={`${props.mode === "light" ? "text-black " : "text-white"} border rounded mt-2`}>
            <option className={`${props.mode === "light" ? "text-black " : "text-white bg-black"}`} value="all">all</option>
            <option className={`${props.mode === "light" ? "text-black " : "text-white bg-black"}`} value="electric">electric</option>
            <option className={`${props.mode === "light" ? "text-black " : "text-white bg-black"}`} value="vihicle">vihicle</option>
            <option className={`${props.mode === "light" ? "text-black " : "text-white bg-black"}`} value="clothes">clothes</option>
            <option className={`${props.mode === "light" ? "text-black " : "text-white bg-black"}`} value="books">books</option>
            <option className={`${props.mode === "light" ? "text-black " : "text-white bg-black"}`} value="toys">toys</option>
            <option className={`${props.mode === "light" ? "text-black " : "text-white bg-black"}`} value="furniture">furniture</option>
          </select>

        </div>
      </div>


      <div className=' grid  md:grid-cols-2 lg:grid-cols-3  gap-4 mt-5   p-2'>
        {filterData.map((value, index) => {
          return <div className={`shadow-xl  rounded p-2 ${props.mode==='light'?'shadow-xl':"border"}`} key={index}>
            <div className='w-full'>
              <div className='h-100'>
                <img className='w-full h-100 object-contain' src={value.img} alt="" onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";
                }} />
              </div>
              <p className='ps-4 font-semibold'>ID: {value.id}</p>
              <p className='ps-4 font-semibold'>Name: {value.name}</p>
              <p className='ps-4 font-semibold'>Price: {value.price}</p>
              <div className='flex gap-3 flex-wrap'>
                <button onClick={()=>handleAddCard(value)} className='text-white rounded bg-blend-luminosity bg-blue-600 hover:bg-blue-500 font-semibold h-8 w-30 p-1 mt-3 cursor-pointer'>Add to cart</button>

                <button className='text-white rounded bg-green-600 font-semibold hover:bg-green-500 h-8 w-30 p-1 mt-3 cursor-pointer'>Buy Now</button>
              </div>
              <div className='mt-3'>
                <Comment modes={props.mode} />
              </div>
            </div>
          </div>
        })}
      </div>
      {count < products.length &&(<div className='p-3 flex justify-center'>
        <button onClick={handleCount} className='bg-amber-300 rounded font-medium p-2'>View More</button>
      </div>)}
      <Foter />
    </>

  )
}

export default ProductCard
