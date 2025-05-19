import React from 'react'
import { useState } from 'react';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import ProductCard from './ProductCard';
import Tostyfiy from './Tostyfiy';



const Form = () => {
    const mainFull = (event) => {
        event.preventDefault();
    }

  
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");
    const [error, setError] = useState("");
    const [login, setLogin] = useState(false);

   
const showAlert=(msg)=>{
    setError(msg)
      setTimeout(() => {
        setError(null)
    }, 4000);
}
    const sumbitButton = () => {
        if (value.trim() === "" || value.length <= 5) {
            setValue("")
            setValue2("")
          showAlert("Please correct username(min 5 char) and password(min 8 char)")
        } else {
            setLogin(true)
            Toastify({
                text: "congrass you are logined",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, green, #77ed7e)",
                },
                onClick: function(){} // Callback after click
              }).showToast();      
            setValue("")
            setValue2("")
            setError("congrass yor are logined")
        }

    }
    const logOut = () => {
        setLogin(false)
    }

    
    const ShowPassword=()=>{
        let inputPassword = document.getElementById("102");
        let buton_show = document.getElementById("buton-show")
        if(inputPassword.type==="password"){
            inputPassword.type = "text"
            buton_show.innerText = "Hide"
        }else if(inputPassword.type==="text"){
            inputPassword.type = "password"
            buton_show.innerText = "Show"
        }
    }

      

    return (
        <>
            {error && <Tostyfiy error={error} />}
            {login === false ? <div className='flex justify-center mt-10 mb-4'>
                <div className=' p-2 rounded shadow-xl shadow-amber-300 bg-white'>
                    <form action="" id='main' onSubmit={mainFull} className='p-2'>
                        <div>
                            <label for="101">Username</label><br />
                            <input id='101' autoFocus name='name' className='border hover:border-green-300 mt-3 w-100 p-1 rounded cursor-pointer' value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Username' required />
                        </div>
                        <div className='mt-2'>
                            <label for="102">Password</label><br />
                            <div className='border  hover:border-green-300  mt-3 w-100 p-1 rounded cursor-pointer flex gap-1'>
                                <input className='w-100 outline-0' id='102' name='name2'  value={value2} onChange={(e) => setValue2(e.target.value)} type="password" placeholder='Password' required />
                                <button className='cursor-pointer outline-0 ' id='buton-show' type='button' onClick={ShowPassword}>Show</button>
                            </div>
                        </div>
                        <div>
                            <button onClick={sumbitButton} type='submit' className='p-1 bg-green-400 font-semibold  rounded w-100 mt-3 cursor-pointer'>Login </button>
                        </div>
                        <p className='text-red-500'>{error}</p>
                    </form>
                </div>
            </div>
                : <ProductCard logout={logOut} />}

        </>
    )
}

export default Form
