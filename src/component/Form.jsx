import React from 'react'

const Form = () => {
  function mainFull(){
    let main = document.getElementById("main")
    main.addEventListener("submit",(e)=>[
        e.preventDefault()
    ])
  }
    return (
        <div className='flex justify-center mt-10'>
            <div className=' p-2 rounded shadow-xl bg-white'>
                <form action="" id='main' onSubmit={mainFull}>
                    <div>
                        <input className='border mt-3 w-100 p-1 rounded' type="email" placeholder='Username' required />
                    </div>
                    <div>
                        <input className='border mt-3 w-100 p-1 rounded' type="password" placeholder='Password' required />
                    </div>
                    <div>
                        <button className='p-1 bg-green-400 font-semibold  rounded w-100 mt-3'>Sumbit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
