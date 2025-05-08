import React from 'react'
import { useState } from 'react';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Tostyfiy from './Tostyfiy';



const Form = () => {
const mainFull=(event)=>{
event.preventDefault();
}
const [value,setValue] = useState("");
const [value2,setValue2] = useState("");
const [error,setError] = useState("");

const values = {
    username:"suresh@gmail.com",
    password:"joshi123"
}

const sumbitButton=()=>{
    if(values.username===value && values.password===value2){
        setValue("")
        setValue2("")
        Toastify({
            text: "Welcome user you are login",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
          setError("")
         
    }else{
        setError("Please correct username and password");
        
        // Toastify({
        //     text: "Please correct username and password",
        //     duration: 3000,
        //     destination: "https://github.com/apvarun/toastify-js",
        //     newWindow: true,
        //     close: true,
        //     gravity: "top", // `top` or `bottom`
        //     position: "right", // `left`, `center` or `right`
        //     stopOnFocus: true, // Prevents dismissing of toast on hover
        //     style: {
        //       background: "linear-gradient(to right, #f02e0c, #f76f4d)",
        //     },
        //     onClick: function(){} // Callback after click
        //   }).showToast();      
            setValue("")
        setValue2("")
    }
}
 
    return (
        <div className='flex justify-center mt-10 mb-4'>
            <div className=' p-2 rounded shadow-xl shadow-amber-300 bg-white'>
                <form action="" id='main' onSubmit={mainFull} className='p-2'>
                    <div>
                        <label>UserName</label><br/>
                        <input className='border hover:border-green-300 mt-3 w-100 p-1 rounded cursor-pointer' value={value} onChange={(e)=>setValue(e.target.value)} type="email" placeholder='Username' required />
                    </div>
                    <div className='mt-2'>
                    <label>Password</label><br/>
                        <input className='border  hover:border-green-300  mt-3 w-100 p-1 rounded cursor-pointer' value={value2}  onChange={(e)=>setValue2(e.target.value)} type="password" placeholder='Password' required />
                    </div>
                    <div>
                        <button onClick={sumbitButton} className='p-1 bg-green-400 font-semibold  rounded w-100 mt-3 cursor-pointer'>Login </button>
                    </div>
                    <p className='text-red-500'>{error}</p>
                </form>
            </div>
        </div>
    )
}

export default Form
