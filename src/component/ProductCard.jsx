import React, { useState, useEffect } from 'react'
import { products } from "../datas/products"
import Comment from './Comment';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Tostyfiy from './Tostyfiy';
import { useTheme } from '../hooks/usetheame';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart,FaRupeeSign,FaBolt,FaPlus, FaImage,} from "react-icons/fa";




const ProductCard = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(6);
  const [salected, setSalected] = useState("all");
  const { theme, setTheme } = useTheme();
  const [searchitem,setSearchitem] = useState("");

  const handleCount = () => {
    setCount(count + 3)
  }
  const finalArray = products.slice(0, count)
  const filterData = salected === "all" ? finalArray : products.filter((item) => {
    return item.catergory === salected
  })

const producList = filterData.filter((item,ind)=>{
  return item.name.toLowerCase().includes(searchitem.toLowerCase());
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

  const handleNavigate = (id) => {
    navigate(`/details/${id}`)
  }
  return (
    <>
      {/* {props.error && <Tostyfiy error={props.error} />}/ */}


      <div className='p-3 mt-14'>
        <div className='flex flex-wrap justify-around  mt-3'>
        <input type="search" name="" className='border-1 p-1 rounded w-100 outline-0 ' value={searchitem} onChange={(e)=>setSearchitem(e.target.value)} placeholder='Search Name' id="" />
          <select onChange={(e) => setSalected(e.target.value)} name="" id="salect" className={`${theme === "light" ? "text-black " : "text-white "}  rounded border mt-2`}>
            <option className={`${theme === "light" ? "text-black " : "text-white bg-black"}`} value="all">all</option>
            <option className={`${theme === "light" ? "text-black " : "text-white bg-black"}`} value="electric">electric</option>
            <option className={`${theme === "light" ? "text-black " : "text-white bg-black"}`} value="vihicle">vihicle</option>
            <option className={`${theme === "light" ? "text-black " : "text-white bg-black"}`} value="clothes">clothes</option>
            <option className={`${theme === "light" ? "text-black " : "text-white bg-black"}`} value="books">books</option>
            <option className={`${theme === "light" ? "text-black " : "text-white bg-black"}`} value="toys">toys</option>
            <option className={`${theme === "light" ? "text-black " : "text-white bg-black"}`} value="furniture">furniture</option>
          </select>
        </div>
      </div>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4">
  {producList.map((value, index) => (
    <div
      key={index}
      className={`${
        theme === "light" ? "shadow-xl" : "border border-gray-700"
      }  dark:bg-gray-800 rounded-2xl p-4 transition-transform  hover:scale-[1.02] duration-300`}
    >
      {/* Image */}
      <div
        className="w-full cursor-pointer"
        onClick={() => handleNavigate(value.id)}
      >
        <img
          src={value.img}
          alt={value.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";
          }}
          className="w-full h-48 object-contain rounded mb-4"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold  dark:text-white flex items-center gap-2">
          <FaShoppingCart className="text-blue-600" /> {value.name}
        </h2>
        <p className={`text-md font-medium ${theme==='light'?'text-blue-600':"text-gray-100"} dark:text-blue-400 flex items-center gap-2`}>
          <FaRupeeSign /> ₹ {value.price}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mt-4">
        <button
          onClick={() => handleAddCard(value)}
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition"
        >
          <FaPlus /> Add to Cart
        </button>

        <button
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition"
        >
          <FaBolt /> Buy Now
        </button>
      </div>

      {/* Comment */}
      <div className="mt-4">
        <Comment />
      </div>
    </div>
  ))}
</div>
      {count < products.length && (<div className='p-3 flex justify-center m-4'>
        <button onClick={handleCount} className='bg-amber-300 rounded font-medium p-2 cursor-pointer'>View More</button>
      </div>)}
    </>

  )
}

export default ProductCard
