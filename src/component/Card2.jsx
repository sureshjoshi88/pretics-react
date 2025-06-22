import { useState } from 'react';

import Navbar from './Navbar';
import Foter from './Foter';
import { MdDeleteForever } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import Tostyfiy from './Tostyfiy';
// import Toastify from 'toastify-js'
// import "toastify-js/src/toastify.css"





const Card2 = (props) => {

  const notify = () => toast("product is succedfully delete");

  const [addcard, setAddcard] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];

  });

  const removeitem = (id, name) => {
    const updatedaddcard = addcard.filter(item => item.id !== id);
    let totalproduct = localStorage.setItem("cart", JSON.stringify(updatedaddcard));
    let totalLength = localStorage.setItem("length", JSON.stringify(updatedaddcard.length))
    setAddcard(updatedaddcard);
    totalLength = updatedaddcard.length;
    setCardcount(totalLength);
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

    // notify

  }


  return (
    <>
      <div>
        <Navbar mode={props.mode} colorMode={props.colorMode} logout={props.logOut} />
        {props.error && <  Tostyfiy error={props.error} />}

        {addcard.map((items, index) => {
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
                  <button className='ms-auto text-2xl cursor-pointer hover:bg-red-600  hover:text-white p-1 rounded ' onClick={() => removeitem(items.id, items.name)}><MdDeleteForever />   </button>

                  <ToastContainer />
                </div>
              </div>
            </div>

          </div>
        })}

        <Foter />
      </div>
    </>

  )
}

export default Card2
