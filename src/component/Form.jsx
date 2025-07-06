import { useState } from 'react';
import "toastify-js/src/toastify.css"
import Tostyfiy from './Tostyfiy';
import { Navigate, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/usetheame';



const Form = (props) => {

    // const {theme,setTheme} = useTheme();

    // const navigate = useNavigate();

    // const mainFull = (event) => {
    //     event.preventDefault();
    // }


    // const [value, setValue] = useState("");
    // const [value2, setValue2] = useState("");


    // const showAlert = (msg) => {
    //     props.setError(msg)
    //     setTimeout(() => {
    //         props.setError(null)
    //     }, 4000);
    // }
    // const sumbitButton = () => {

    //     if (value.trim() === "" || value.length <= 5) {
    //         setValue("")
    //         setValue2("")
    //         showAlert("Please correct username(min 5 char)")
    //     } else if (value2.trim() === "" || value2.length <= 8) {
    //         setValue("")
    //         setValue2("")
    //         showAlert("Please correct password(min 8 char)")
    //     } else {
    //         localStorage.setItem("login", true);
    //         props.setLogin(true)
    //         showAlert("congrass yor are logined")
    //         setValue("")
    //         setValue2("")
    //         navigate('/')
    //     }

    // }



    // const ShowPassword = () => {
    //     let inputPassword = document.getElementById("102");
    //     let buton_show = document.getElementById("buton-show")
    //     if (inputPassword.type === "password") {
    //         inputPassword.type = "text"
    //         buton_show.innerText = "Hide"
    //     } else if (inputPassword.type === "text") {
    //         inputPassword.type = "password"
    //         buton_show.innerText = "Show"
    //     }
    // }


    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log('Signup Data:', formData);
    alert("Signup Successful!");

    // Reset form
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

   

  

    return (
        <>
            {props.error && <Tostyfiy error={props.error} />}
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      <form 
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">Create Account</h2>

        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400" 
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400" 
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400" 
            placeholder="••••••••"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Confirm Password</label>
          <input 
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400" 
            placeholder="••••••••"
            required
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-semibold transition duration-200"
        >
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-600">Already have an account? <span className="text-indigo-600 cursor-pointer hover:underline">Login</span></p>
      </form>
    </div>
        </>
    )
}

export default Form
