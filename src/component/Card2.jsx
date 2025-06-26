import { useEffect, useState } from 'react';

import Navbar from './Navbar';
import Foter from './Foter';
import Tostyfiy from './Tostyfiy';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useTheme } from '../hooks/usetheame';

const Card2 = (props) => {



  const [addcard, setAddcard] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [cardcount, setCardcount] = useState(() => {
    return JSON.parse(localStorage.getItem("length")) || 0;
  });

  const removeitem = (id, name) => {
    const updatedaddcard = addcard.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedaddcard));
    localStorage.setItem("length", JSON.stringify(updatedaddcard.length))
    setAddcard(updatedaddcard);
    let totalLength = updatedaddcard.length;
    setCardcount(totalLength);
    Toastify({
      text: `${name} is succedfully deleted `,
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #17e335, #76deab)",
      },
      onClick: function () { }
    }).showToast();
  }

 
  const totalPrice = addcard.reduce((acc, item) => acc + parseFloat(item.price.replace(/,/g, "")) * item.quantity, 0);
  const formateTotal = totalPrice.toLocaleString("en-IN");
const {theme,setTheme} = useTheme();

  return (
    <>
      <div>
        {/* <Navbar  logout={props.logOut} sigin={props.sigin} /> */}
        {props.error && <  Tostyfiy error={props.error} />}

        {addcard.length > 0 && <p className='text-center font-bold text-xl p-2'>Total: ₹ {formateTotal}</p>}
        {addcard.length > 0 ? "" : <p className='text-center top-20'>No data found</p>}
        <div className='grid md:grid-cols-3 gap-3'>
          {addcard.map((items, index) => {
            return <div key={index}>
              <div className={`p-2 ${theme==='light'?'shadow-2xl':'border'} rounded`}>
                <div className='w-full'>
                  <div className='h-100'>
                    <img className='w-full h-100 object-contain' src={items.img} alt="" onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";
                    }} />
                  </div>              <div className='p-2'>
                    <p className=' font-semibold cursor-pointer'>Name :- {items.name}</p>
                    <p className='font-semibold cursor-pointer'>Price :- {items.price}</p>
                    <p className='font-semibold cursor-pointer'>quaninty :- {items.quantity}</p>
                    <div>
                      <button className=' cursor-pointer hover:bg-red-400 bg-red-600 text-white font-medium mt-3 p-1 rounded ' onClick={() => removeitem(items.id, items.name)}>Remove</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          })}
        </div>
        <div>
        </div>

        <Foter />
      </div>
    </>

  )
}

export default Card2
