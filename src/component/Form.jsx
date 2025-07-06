import { useState } from 'react';
import "toastify-js/src/toastify.css"
import Tostyfiy from './Tostyfiy';
import { Navigate, useNavigate } from 'react-router-dom';
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-3 mt-7">
        <form
          onSubmit={handleSubmit(handllevalue)}
          className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full space-y-5"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">Create Account</h2>
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              {...register('name')}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="John Doe"
              required
            />
            {errors.name && <p className='text-red-600 font-medium text-lg'>{errors.name.message}</p>}
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              {...register('email')}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
              required
            />
            {errors.email && <p className='text-red-600 font-medium text-lg'>{errors.email.message}</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              {...register('password')}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="••••••••"
              required
            />
            {errors.password && <p className='text-red-600 font-medium text-lg'>{errors.password.message}</p>}
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              {...register('confirmPassword')}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="••••••••"
              required
            />
            {errors.confirmPassword && <p className='text-red-600 font-medium text-lg'>{errors.confirmPassword.message}</p>}
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
