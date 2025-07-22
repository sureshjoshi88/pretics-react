import { useState } from 'react';
import "toastify-js/src/toastify.css"
import Tostyfiy from './Tostyfiy';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/usetheame';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';



const Form = (props) => {

  const { theme, setTheme } = useTheme();

  const navigate = useNavigate();


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

  const schema = z.object({
    name: z.string().min(5, 'must be 5 character'),
    email: z.string().email(),
    password: z.string().min(8, 'must be 8 letter password'),
    confirmPassword: z.string().min(8, "must be 8 letter password")

  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(schema), })


  const handllevalue = (data) => {
    console.log(data);
    alert("form submited")
    reset()
    localStorage.setItem("login", true);
          navigate('/')
  }


  return (
    <>
      {props.error && <Tostyfiy error={props.error} />}
      <div className="min-h-screen flex items-center justify-center  p-3 mt-7">
        <form
          onSubmit={handleSubmit(handllevalue)}
          className={`rounded-2xl shadow-2xl p-6 max-w-md w-full space-y-5 ${theme==='light'?"bg-white":"bg-gray-800 text-white"}`}
        >
          <h2 className="text-3xl font-bold text-center">Create Account</h2>
          <div>
            <label className="block mb-1 text-sm font-semibold ">Name</label>
            <input
              type="text"
              name="name"
              {...register('name')}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="John Doe"
             
            />
            {errors.name && <p className='text-red-600 font-medium text-lg'>{errors.name.message}</p>}
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold ">Email</label>
            <input
              type="email"
              name="email"
              {...register('email')}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
              
            />
            {errors.email && <p className='text-red-600 font-medium text-lg'>{errors.email.message}</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold ">Password</label>
            <input
              type="password"
              name="password"
              {...register('password')}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="••••••••"
             
            />
            {errors.password && <p className='text-red-600 font-medium text-lg'>{errors.password.message}</p>}
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold ">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              {...register('confirmPassword')}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="••••••••"
            
            />
            {errors.confirmPassword && <p className='text-red-600 font-medium text-lg'>{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-semibold transition duration-200"
          >
            Sign Up
          </button>

          <p className="text-sm text-center ">Already have an account? <Link to='/login' className="text-indigo-600 cursor-pointer hover:underline">Login</Link></p>
        </form>
      </div>
    </>
  )
}

export default Form
