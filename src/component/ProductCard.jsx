import React, { useState, useEffect } from 'react'
import { products } from "../datas/products"
import Comment from './Comment';
import { FaCartShopping } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { MdSunny } from "react-icons/md";
import Fetchapi from './Fetchapi';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Foter from './Foter';




const ProductCard = (props) => {


  const [mode, setMode] = useState("light");

  const colorMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      let heading = document.getElementById("main-heading");
      heading.style.backgroundColor = "black";
      heading.style.color = "white";
      setMode("dark")
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      let heading = document.getElementById("main-heading");
      heading.style.backgroundColor = "white";
      heading.style.color = "black";
      setMode("light")
    }
  }

  const [salected, setSalected] = useState("all");
  const filterData = salected === "all" ? products : products.filter((item) => {
    return item.catergory === salected
  })




  const slider = () => {
    let butons = document.getElementById("slider-bar");
    butons.style.left = 0;
    butons.style.transition = "0.7s 0.2s  linear"
  }
  const removeSlider = () => {
    let butons = document.getElementById("slider-bar");
    butons.style.left = "-100%";
    butons.style.transition = "1.4s 0.2s  linear"
  }


  const [addcard, setAddcard] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];

  });
  const [cardcount, setCardcount] = useState(() => {
    return JSON.parse(localStorage.getItem("length")) || 0;

  });



  const removeitem = (id,name) => {
    const updatedaddcard = addcard.filter(item => item.id !== id);
    let totalproduct = localStorage.setItem("cart", JSON.stringify(updatedaddcard));
    let totalLength = localStorage.setItem("length", JSON.stringify(updatedaddcard.length))
    setAddcard(updatedaddcard);
    totalLength = updatedaddcard.length;
    setCardcount(totalLength);
    Toastify({
      text: `${name} is succedfully delete`,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #d12a3d, red)",
      },
      onClick: function () { } // Callback after click
    }).showToast();

  }



  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addcard));
    localStorage.setItem("length", JSON.stringify(addcard.length));
  }, [addcard]);
  const totalPrice = addcard.reduce((acc, item) => acc + parseFloat(item.price.replace(/,/g, "")) * item.quantity, 0);

  const formateTotal = totalPrice.toLocaleString("en-IN");

  // const incrementQuantity = (id) => {
  //   const updatedaddcard = addcard.map(item => {
  //     if (item.id === id) {
  //       return { ...item, quantity: item.quantity + 1 };
  //     }
  //     return item;
  //   });
  //   setAddcard(updatedaddcard);
  // };

  // const decrementQuantity = (id) => {
  //   const updatedaddcard = addcard.map(item => {
  //     if (item.id === id && item.quantity > 1) {
  //       return { ...item, quantity: item.quantity - 1 };
  //     }
  //     return item;
  //   });
  //   setAddcard(updatedaddcard);
  // };





  return (
    <>

      <div className='sticky top-0 bg-white p-3  z-40' id='main-heading'>
        <h2 className='font-bold md:text-3xl text-center'>My Social Feed</h2>

        <div className='flex flex-wrap justify-around  '>
          <button id="card" onClick={slider} className={`text-3xl ${mode === "light" ? 'text-black' : "text-white"} rounded  p-1 cursor-pointer relative`}><FaCartShopping />
            <span style={{ borderRadius: "50%", height: "24px", width: "24px", fontSize: "16px" }} className='absolute -top-4.5  -right-2 bg-red-500 font-semibold rounded-b-full text-white'>{cardcount}</span>
          </button>
          <select onChange={(e) => setSalected(e.target.value)} name="" id="salect" className={`${mode === "light" ? "text-black " : "text-white"} border rounded mt-2`}>
            <option className={`${mode === "light" ? "text-black " : "text-white bg-black"}`} value="all">all</option>
            <option className={`${mode === "light" ? "text-black " : "text-white bg-black"}`} value="electric">electric</option>
            <option className={`${mode === "light" ? "text-black " : "text-white bg-black"}`} value="vihicle">vihicle</option>
            <option className={`${mode === "light" ? "text-black " : "text-white bg-black"}`} value="clothes">clothes</option>
          </select>




          <button onClick={props.logout} className='border rounded  p-1 ps-2 pe-2  bg-red-600 text-white cursor-pointer'>Log-out</button>
          {mode === "light" ? <button onClick={colorMode} className='text-2xl text-black'><CiDark /></button> :
            <button onClick={colorMode} className='text-2xl text-white'><MdSunny /></button>}
        </div>
      </div>

      <div className='sticky top-22 '>
        <div id='slider-bar' className={`md:h-130 h-70 md:w-100 w-90 absolute   overflow-y-scroll flow-addcard rounded -left-100  ${mode === "light" ? "text-black bg-white" : "text-white bg-black"}`}>
          <p onClick={removeSlider} className='text-4xl text-end pe-3 cursor-pointer sticky top-2.5'>x</p>
          {addcard.length > 0 && <p className='text-center font-bold text-xl p-2'>Total: ₹ {formateTotal}</p>}
          {addcard.length > 0 ? "" : <p className='text-center top-20'>No data found</p>}
          {
            addcard.map((items, index) => {
              return <div key={index}>
                <div className='flex p-2 gap-4 items-center'>
                  <img className='w-40 h-50 object-contain rounded ' src={items.img} alt="" />
                  <div className='flex gap-3 items-center'>
                    <div className='p-2'>
                      <p className=' font-semibold cursor-pointer'>Name :- {items.name}</p>
                      <p className='font-semibold cursor-pointer'>Price :- {items.price}</p>
                      <p className='font-semibold cursor-pointer'>quaninty :- {items.quantity}</p>
                    </div>
                    <div>
                      <button className='ms-auto text-2xl cursor-pointer hover:bg-red-600  hover:text-white p-1 rounded ' onClick={() => removeitem(items.id,items.name)}><MdDeleteForever /></button>
                    </div>
                   
                  </div>
                </div>

              </div>
            })}

        </div>
      </div>
      <div className=' grid  md:grid-cols-2 lg:grid-cols-3  gap-4 mt-5   p-2'>
        {filterData.map((value, index) => {
          return <div className='shadow-xl  rounded p-2 ' key={index}>
            <div className='w-full'>
              <div className='h-100'>
                <img className='w-full h-100 object-contain' src={value.img} alt="" />
              </div>
              <p className='ps-4 font-semibold'>ID: {value.id}</p>
              <p className='ps-4 font-semibold'>Name: {value.name}</p>
              <p className='ps-4 font-semibold'>Price: {value.price}</p>
              <div className='flex gap-3 flex-wrap'>
                <button onClick={() => {
                  let index = addcard.findIndex((item) => item.id === value.id)
                  if (index===-1) {
                    const newaddcard = [...addcard, { ...value, quantity: 1 }];
                    setAddcard(newaddcard);
                    let totalproduct = localStorage.setItem("cart", JSON.stringify(newaddcard));
                    setCardcount(newaddcard.length);
                    let totalLength = localStorage.setItem("length", JSON.stringify(newaddcard.length))
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
                    updateQuantity[index].quantity+=1;
                    setAddcard(updateQuantity)
                    localStorage.setItem("cart",JSON.stringify(updateQuantity))
                    Toastify({
                      text: `${value.name} is quantity increase`,
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
                }}  className='text-white rounded bg-blend-luminosity bg-blue-600 hover:bg-blue-500 font-semibold h-8 w-30 p-1 mt-3 cursor-pointer'>Add to cart</button>

                <button  className='text-white rounded bg-green-600 font-semibold hover:bg-green-500 h-8 w-30 p-1 mt-3 cursor-pointer'>Buy Now</button>
              </div>
              <div className='mt-3'>
                <Comment modes={mode} />
              </div>
            </div>
          </div>
        })}
      </div>
      <Fetchapi />
      <Foter />
    </>
  )
}

export default ProductCard
