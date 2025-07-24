import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const fixEmail = "suresh@gmail.com";
  const fixPassword = "joshi123";


  const handleSubmit = () => {
    if (email !== fixEmail) {
      setEmailError('invalid email')
      setTimeout(() => {
        setEmailError("")
      }, 3000);
    } else if (password !== fixPassword) {
      setPasswordError("invalid password")
      setTimeout(() => {
        setPasswordError("")
      }, 3000);
    } else {
      alert("successfully login")
      localStorage.setItem("login", true);
      navigate('/')
      setEmail("");
      setEmailError("");
      setPassword("");
      setPasswordError("");
    }
  }


  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault(),
              handleSubmit()
          }}>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
              {emailError && <p className='text-red-600 font-semibold text-lg'>{emailError}</p>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
              {passwordError && <p className='text-red-600 font-semibold text-lg'>{passwordError}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            Don't have an account?{" "}
            <Link
              to='/form'
              className="text-blue-600 hover:underline font-medium"
            >
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
