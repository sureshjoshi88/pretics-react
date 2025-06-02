import React, { useState, useEffect } from 'react'
import { products } from "../datas/products"
import Comment from './Comment';
import { FaCartShopping } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Tostyfiy from './Tostyfiy';
import Navbar from './Navbar';
import Foter from './Foter';




const ProductCard = (props) => {


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



  const removeitem = (id, name) => {
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
      {props.error && <Tostyfiy error={props.error} />}
      <Navbar mode={props.mode} colorMode={props.colorMode} logout={props.logOut} />


      <div className='p-3' >
        <div className='flex flex-wrap justify-around  mt-3'>
          <button id="card" onClick={slider} className={`text-3xl ${props.mode === "light" ? 'text-black' : "text-white"} rounded  p-1 cursor-pointer relative`}><FaCartShopping />
            {cardcount > 0 && <span style={{ borderRadius: "50%", height: "24px", width: "24px", fontSize: "16px" }} className='absolute -top-4.5  -right-2 bg-red-500 font-semibold rounded-b-full text-white'>{cardcount}</span>}
          </button>
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

      <div id='slider-bar' className={`flow-cart fixed top-20  md:h-[90vh] h-70 md:w-100 w-90 overflow-y-scroll rounded -left-100 ${props.mode === "light" ? "text-black bg-white" : "text-white bg-black"} z-50`}>
        <div >
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
                      <button className='ms-auto text-2xl cursor-pointer hover:bg-red-600  hover:text-white p-1 rounded ' onClick={() => removeitem(items.id, items.name)}><MdDeleteForever /></button>
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
                  if (index === -1) {
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
                    updateQuantity[index].quantity += 1;
                    setAddcard(updateQuantity)
                    localStorage.setItem("cart", JSON.stringify(updateQuantity))
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
                }} className='text-white rounded bg-blend-luminosity bg-blue-600 hover:bg-blue-500 font-semibold h-8 w-30 p-1 mt-3 cursor-pointer'>Add to cart</button>

                <button className='text-white rounded bg-green-600 font-semibold hover:bg-green-500 h-8 w-30 p-1 mt-3 cursor-pointer'>Buy Now</button>
              </div>
              <div className='mt-3'>
                <Comment modes={props.mode} />
              </div>
            </div>
          </div>
        })}
      </div>
      <Foter />
    </>
  )
}

export default ProductCard
