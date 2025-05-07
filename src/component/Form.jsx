import React from 'react'

const Form = () => {
  return (
    <div className='flex justify-center'>
      <div className='border p-2'>
        <form action="">
        <input type="text" placeholder='Username'  required/>
        <input type="password" placeholder='Password'  required/>
        <button className='p-2 bg-green-500 text-white rounded '>Sumbit</button>
        
        </form>
      </div>
    </div>
  )
}

export default Form
