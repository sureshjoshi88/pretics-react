import React from 'react'

const Card = () => {
    let number = 0;
    const counter=()=>{
        let count = document.getElementById("buton-1");
       
        number++;
        count.innerText = number
    }
    const counter2=()=>{
        let count2 = document.getElementById("buton-2");
       
        number++;
        count2.innerText = number
    }
    const reset=()=>{
        // number = 0;
        let count = document.getElementById("buton-1").innerText = 0;
        let count2 = document.getElementById("buton-2").innerText = 0;


    }
  return (
    <div className='flex justify-center'>
      <div>
      <div>
        <img className='w-50' src="https://m.media-amazon.com/images/I/71Sp7BKB0CL.jpg" alt="balaji-img" />
      </div>
      <div className='flex justify-between mt-10 gap-5'>
        <button onClick={counter} className='bg-sky-300 p-2 rounded font-bold hover:bg-sky-500'>Like <i className="fa-solid fa-thumbs-up" style={{color: "#0d0d0d;"}}></i></button>
        <button onClick={counter2} className='bg-sky-300 p-2 rounded font-bold hover:bg-sky-500'>Dislike <i className="fa-solid fa-thumbs-down" style={{color: "#0d0d0d;"}}></i></button>
        <button onClick={reset} className='bg-sky-300 p-2 rounded font-bold hover:bg-sky-500'>reset</button>
      </div>
      <div className='flex gap-14'>
        <button className='w-10 text-2xl' id='buton-1'>0</button>
        <button className='w-10 text-2xl' id='buton-2'>0</button>
      </div>
      </div>
    </div>
  )
}

export default Card
