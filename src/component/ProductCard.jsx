import React, { useState } from 'react'
import { products } from "../datas/products"
import Comment from './Comment';
import { IoCartSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";



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


  const [addcard, setAddcard] = useState([]);
  const [cardcount, setCardcount] = useState(0);



  const removeitem = (id) => {
    const updatedCart = addcard.filter(item => item.id !== id);
    setAddcard(updatedCart);
    setCardcount(updatedCart.length);
  }

  const totalPrice = addcard.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);



  const incrementQuantity = (id) => {
    const updatedCart = addcard.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setAddcard(updatedCart);
  };

  const decrementQuantity = (id) => {
    const updatedCart = addcard.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setAddcard(updatedCart);
  };
  return (
    <>

      <div className='sticky top-0 bg-white p-3  z-40'>
        <h2 className='font-bold text-3xl text-center'>My Social Feed</h2>

        <div className='flex flex-wrap justify-around  '>
          <button id="card" onClick={slider} className=' text-3xl text-black rounded  p-1 cursor-pointer relative'><IoCartSharp /><span style={{ borderRadius: "50%", height: "24px", width: "24px", fontSize: "16px" }} className='absolute -top-4.5  -right-2 bg-red-500 font-semibold rounded-b-full text-white'>{cardcount}</span>
          </button>
          <select onChange={(e) => setSalected(e.target.value)} name="" id="salect" className='border mt-2'>
            <option value="all">all</option>
            <option value="electric">electric</option>
            <option value="vihicle">vihicle</option>
            <option value="clothes">clothesl</option>
          </select>
          <button onClick={props.logout} className='border rounded  p-1 ps-2 pe-2  bg-red-600 text-white cursor-pointer'>Log-out</button>
        </div>
      </div>

      <div className='sticky top-22'>
        <div id='slider-bar' className='md:h-130 h-70 md:w-100 w-90 absolute   bg-white overflow-y-scroll flow-cart rounded -left-100'>

          <p onClick={removeSlider} className='text-4xl text-end pe-3 cursor-pointer'>x</p>
          {addcard.length > 0 && <p className='text-center font-bold text-xl p-2'>Total: ₹ {totalPrice}</p>}
          {addcard.length > 0 ? "" : <p className='text-center top-20'>No data found</p>}
          {addcard.map((items) => {
            return <div>
              <div className='flex p-2 gap-3 items-center'>
                <img className='w-40 h-50 object-contain rounded ' src={items.img} alt="" />
                <div>
                  <div className='flex gap-5  items-center'>
                    <p className='font-semibold '>{items.name}</p>
                    <p className='font-semibold '>{items.price}</p>
                    <button className='ms-auto text-2xl cursor-pointer hover:bg-red-600  hover:text-white p-1 rounded ' onClick={() => removeitem(items.id)}><MdDeleteForever /></button>
                  </div>
                  <div className='flex justify-center gap-1 mt-2'>
                    <button className='text-3xl flex justify-center items-center border rounded cursor-pointer  h-8  w-8' onClick={() => decrementQuantity(items.id)}>- </button>
                    <button className='text-3xl'> {items.quantity} </button>
                    <button className='text-3xl  flex justify-center items-center border rounded cursor-pointer  h-8  w-8' onClick={() => incrementQuantity(items.id)}> +</button>
                  </div>
                </div>
              </div>

            </div>
          })}

        </div>
      </div>
      <div className=' grid  md:grid-cols-2 lg:grid-cols-3  gap-4 mt-5   p-2'>
        {filterData.map((value) => {
          return <div className='shadow-xl  rounded p-2 '>
            <div className='w-full'>
              <div className='h-100'>
                <img className='w-full h-100 object-contain' src={value.img} alt="" />
              </div>
              <p className='ps-4 font-semibold'>ID: {value.id}</p>
              <p className='ps-4 font-semibold'>Name: {value.name}</p>
              <p className='ps-4 font-semibold'>Price: {value.price}</p>
              <div className='flex gap-3 flex-wrap'>
                <button onClick={() => {
                  if (!addcard.find((item) => item.id === value.id)) {
                    const newcart = [...addcard, { ...value, quantity: 1 }];
                    setAddcard(newcart);
                    setCardcount(newcart.length);
                  } else {
                    alert("product is already added");
                  }
                }} id='card-buton' className='text-white rounded bg-red-400 h-8 w-30 p-1 mt-3 cursor-pointer'>Add to Cart</button>
                <button id='card-buton' className='text-white rounded bg-green-600 h-8 w-30 p-1 mt-3 cursor-pointer'>Buy Now</button>
              </div>
              <div className='mt-3'>
                <Comment />
              </div>
            </div>
          </div>
        })}
      </div>
    </>

  )
}

export default ProductCard
