import {React} from 'react'

const Card = (props) => {
    let number = 0;
    let number2 =0;

    const counter=()=>{
        let count = document.getElementById("buton-1");
       
        number++;
        count.innerText = number
    }
    const counter2=()=>{
        let count2 = document.getElementById("buton-2");
       
        number2++;
        count2.innerText = number2
    }
    const reset=()=>{
        // number = 0;
        let count = document.getElementById("buton-1").innerText = 0;
        let count2 = document.getElementById("buton-2").innerText = 0;
        number = 0;
        number2 = 0;


    }
  return (
    <div className='flex justify-center'>
     <div>
     <h2 className="text-4xl font-bold text-center pt-3">{props.title}</h2>
      <div className="bg-white rounded shadow-xl p-2 mt-3 border border-amber-600">
      <div className="w-60">
        <img className='w-full' src="https://m.media-amazon.com/images/I/71Sp7BKB0CL.jpg" alt="balaji-img" />
      </div>
      <div className='flex justify-between mt-3 gap-5'>
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
    </div>
  )
}

export default Card
