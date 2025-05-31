import React, { useEffect } from 'react'
import { useState } from 'react';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import ProductCard from './ProductCard';
import Tostyfiy from './Tostyfiy';



const Form = (props) => {
    const mainFull = (event) => {
        event.preventDefault();
    }


    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");


    const showAlert = (msg) => {
        props.setError(msg)
        setTimeout(() => {
            props.setError(null)
        }, 4000);
    }
    const sumbitButton = () => {

        if (value.trim() === "" || value.length <= 5) {
            setValue("")
            setValue2("")
            showAlert("Please correct username(min 5 char)")
        } else if (value2.trim() === "" || value2.length <= 8) {
            setValue("")
            setValue2("")
            showAlert("Please correct password(min 8 char)")
        } else {
            localStorage.setItem("login", true);
            props.setLogin(true)
            showAlert("congrass yor are logined")
            setValue("")
            setValue2("")
        }

    }



    const ShowPassword = () => {
        let inputPassword = document.getElementById("102");
        let buton_show = document.getElementById("buton-show")
        if (inputPassword.type === "password") {
            inputPassword.type = "text"
            buton_show.innerText = "Hide"
        } else if (inputPassword.type === "text") {
            inputPassword.type = "password"
            buton_show.innerText = "Show"
        }
    }

   

  

    return (
        <>
            {props.error && <Tostyfiy error={props.error} />}
             <div className='flex justify-center mt-10 mb-4'>
                <div className=' p-2 rounded shadow-xl shadow-amber-300 bg-white'>
                    <form action="" id='main' onSubmit={mainFull} className='p-2'>
                        <div>
                            <label htmlFor="101">Username</label><br />
                            <input id='101' autoFocus name='username' className='border hover:border-green-300 mt-3 w-100 p-1 rounded cursor-pointer' value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Username' required />
                        </div>
                        <div className='mt-2'>
                            <label htmlFor="102">Password</label><br />
                            <div className='border  hover:border-green-300  mt-3 w-100 p-1 rounded cursor-pointer flex gap-1'>
                                <input className='w-100 outline-0' id='102' name='password'  value={value2} onChange={(e) => setValue2(e.target.value)} type="password" placeholder='Password' required />
                                <button className='cursor-pointer outline-0 '  id='buton-show' type='button' onClick={ShowPassword}>Show</button>
                            </div>
                        </div>
                        <div>
                            <button onClick={sumbitButton} type='submit' className='p-1 bg-green-400 font-semibold  rounded w-100 mt-3 cursor-pointer'>Login </button>
                        </div>
                        <p className='text-red-500'>{props.error}</p>
                    </form>
                </div>
            </div>
                

        </>
    )
}

export default Form
