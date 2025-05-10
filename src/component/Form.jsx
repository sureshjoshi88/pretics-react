import React from 'react'
import { useState } from 'react';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import ProductCard from './ProductCard';
import Tostyfiy from './Tostyfiy';



const Form = () => {
const mainFull=(event)=>{
event.preventDefault();
}

setTimeout(() => {
    setError(null)
}, 4000);
const [value,setValue] = useState("");
const [value2,setValue2] = useState("");
const [error,setError] = useState("");
const [login,setLogin] = useState(false);
// const [tost,setTost] = useState(false);

const values = {
    username:"suresh",
    password:"joshi123"
}

const sumbitButton=()=>{
    if(value===""||value.length<=5 && value2===""||value2.length<=8){
        setValue("")
        setValue2("")
        // Toastify({
        //     text: "Welcome user you are login",
        //     duration: 3000,
        //     destination: "https://github.com/apvarun/toastify-js",
        //     newWindow: true,
        //     close: true,
        //     gravity: "top", // `top` or `bottom`
        //     position: "right", // `left`, `center` or `right`
        //     stopOnFocus: true, // Prevents dismissing of toast on hover
        //     style: {
        //       background: "linear-gradient(to right, #00b09b, #96c93d)",
        //     },
        //     onClick: function(){} // Callback after click
        //   }).showToast();
         
        setError("Please correct username and password");
    }else{
        setLogin(true)
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
const logOut=()=>{
    setLogin(false)
}
 
    return (
        <>
            {/* <div className={error!=""?"":"hidden"}> */}
              { error&& <Tostyfiy error ={error}/>}
            {/* </div> */}
       {login===false? <div className='flex justify-center mt-10 mb-4'>
            <div className=' p-2 rounded shadow-xl shadow-amber-300 bg-white'>
                <form action="" id='main' onSubmit={mainFull} className='p-2'>
                    <div>
                        <label for="101">Username</label><br/>
                        <input id='101' name='name' className='border hover:border-green-300 mt-3 w-100 p-1 rounded cursor-pointer' value={value} onChange={(e)=>setValue(e.target.value)} type="text" placeholder='Username' required />
                    </div>
                    <div className='mt-2'>
                    <label for="102">Password</label><br/>
                        <input id='102' name='name2' className='border  hover:border-green-300  mt-3 w-100 p-1 rounded cursor-pointer' value={value2}  onChange={(e)=>setValue2(e.target.value)} type="password" placeholder='Password' required />
                    </div>
                    <div>
                        <button onClick={sumbitButton} className='p-1 bg-green-400 font-semibold  rounded w-100 mt-3 cursor-pointer'>Login </button>
                    </div>
                    <p className='text-red-500'>{error}</p>
                </form>
            </div>
        </div>
            :<ProductCard logout={logOut}/>}

        </>
    )
}

export default Form
