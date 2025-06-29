import { useState } from 'react';
import "toastify-js/src/toastify.css"
import Tostyfiy from './Tostyfiy';
import { Navigate, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/usetheame';



const Form = (props) => {

    const {theme,setTheme} = useTheme();

    const navigate = useNavigate();

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
            navigate('/')
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
            <div className='bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-600 p-6 rounded-xl  shadow-xl h-dvh w-full'>

          
             <div className='flex justify-center mt-14 mb-4 font-medium'>
                <div className={`p-3 rounded shadow-xl shadow-blue-300 ${theme==='light'?'bg-white':'bg-gray-200 text-black'}`}>
                    <form action="" id='main' onSubmit={mainFull} className='p-2 space-y-4'>
                        <div>
                            <label className='font-medium' htmlFor="101">Username</label><br />
                            <input id='101' autoFocus name='username' className='border hover:border-green-300 mt-3 w-100 p-2 rounded cursor-pointer' value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Username' required />
                        </div>
                        <div className='mt-2'>
                            <label className='font-medium' htmlFor="102">Password</label><br />
                            <div className='border  hover:border-green-300  mt-3 w-100 p-2 rounded cursor-pointer flex gap-1'>
                                <input className='w-100 outline-0 ' id='102' name='password'  value={value2} onChange={(e) => setValue2(e.target.value)} type="password" placeholder='Password' required />
                                <button className='cursor-pointer outline-0 '  id='buton-show' type='button' onClick={ShowPassword}>Show</button>
                            </div>
                        </div>
                        <div>
                            <button onClick={sumbitButton} type='submit' className='p-2 text-black bg-blue-500 font-blod text-lg  rounded w-100 mt-3 cursor-pointer'>Sign Up</button>
                        </div>
                        {props.error==='congrass yor are logined'?<p className='text-green-700 font-semibold text-lg'>{props.error}</p>:
                        <p className='text-red-500 font-semibold text-lg'>{props.error}</p>}
                    </form>
                </div>
            </div>
                
  </div>
        </>
    )
}

export default Form
