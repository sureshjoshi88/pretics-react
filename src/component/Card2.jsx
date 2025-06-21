import React from 'react'
import { useState } from 'react';
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { GiPlayButton } from "react-icons/gi";
import { GrPowerReset } from "react-icons/gr";
import Card from './Card'
import Navbar from './Navbar';
import Foter from './Foter';
import { MdDeleteForever } from "react-icons/md";




const Card2 = (props) => {

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [comment2, setComment2] = useState([]);
  const [commenttext, setCommenttext] = useState("");

  const buttons = () => {

    if (commenttext.trim() === "") {
      alert("please enter value")
    } else {
      setComment2([...comment2, commenttext]);
      setCommenttext("");

    }
  }

  const handleevent = (event) => {
    if (event.key === "Enter") {
      buttons()
    }
  }


  const counter = () => {

    setLike(like + 1)
  }
  const counter2 = () => {

    setDislike(dislike + 1)
  }
  const reset = () => {

    setLike(0);
    setDislike(0);

  }


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

      // const addcard =  JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <>
      <Navbar mode={props.mode} colorMode={props.colorMode} logout={props.logOut} />


      {/* <div className='mt-1'>
        <div className='grid md:grid-cols-2 gap-4 p-1'>
          <div>
            <Card title="React app" img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04HyzQ1x41KdCCV9KCHaeRdVvRszAP2Zc9A&s"} />
          </div>
          <div className=" rounded shadow-xl p-2 mt-3 ">

            <div>
              <img className='cursor-pointer' src={props.img} alt="" />
            </div>
            <p className='text-2xl'>{props.title}</p>
            <p>Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:</p>
            <div className='flex justify-between mt-3 gap-5 w-80'>
              <div className="flex items-center">
                <div onClick={counter} className="text-3xl text-green-700 cursor-pointer">
                  <AiFillLike />
                </div>
                <button className='w-10 text-2xl cursor-pointer' id='buton-1'>{like}</button>
              </div>
              <div className="flex items-center">
                <div onClick={counter2} className="text-3xl text-red-700 cursor-pointer">
                  <AiFillDislike />
                </div>
                <button className='w-10 text-2xl cursor-pointer' id='buton-2'>{dislike}</button>
              </div>
              <button onClick={reset} className='text-3xl text-lime-600 cursor-pointer'><GrPowerReset />
              </button>          </div>
            <div className="flex gap-2 mt-3 border w-fit rounded">
              <input className=" outline-0 rounded cursor-pointer" id="input2" type="text" value={commenttext} onChange={(e) => setCommenttext(e.target.value)} onKeyDown={handleevent} placeholder="Enter a comment" />
              <div className="text-2xl text-neutral-700 cursor-pointer" onClick={buttons}><GiPlayButton /></div>
            </div>
            <div className='h-20 overflow-hidden overflow-y-scroll webkit'>
              {comment2.map((value, index) =>
                <li className="p-1 cursor-pointer" key={index}>{value}</li>

              )}
            </div>

          </div>
        </div>
      </div> */}

      { addcard.map((items, index) => {
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
      
      <Foter />
    </>

  )
}

export default Card2
