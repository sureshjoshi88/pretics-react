import {React} from 'react'
import { useState } from 'react';
import { AiFillLike,AiFillDislike  } from "react-icons/ai";


const Card = (props) => {


    const [like,setLike] = useState(0);
    const [dislike,setDislike] = useState(0);
    const [comment,setComment] = useState([]);

    const button=()=>{
      let input = document.getElementById("input");
      console.log(comment);
      setComment([...comment,input.value]);
      input.value = ""
      
      
    }

    const counter=()=>{
       
        setLike(like+1)
    }
    const counter2=()=>{
     
        setDislike(dislike+1)
    }
    const reset=()=>{
       
        setLike(0);
        setDislike(0);

    }
  return (
    <div className='flex justify-center'>
     <div>
      <div className="bg-white rounded shadow-xl p-2 mt-3 border border-amber-600">
      <p>{props.title}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quaerat quisquam cumque, nemo debitis autem cum architecto inventore vitae suscipit.</p>
      <div className='flex justify-between mt-3 gap-5 w-80'>
        {/* <button onClick={counter} className='bg-sky-300 p-2 rounded font-bold hover:bg-sky-500'>Like <i className="fa-solid fa-thumbs-up" style={{color: "#0d0d0d;"}}></i></button> */}
        <div  onClick={counter} className="text-5xl text-green-700">
          <AiFillLike />
        </div>
          <div onClick={counter2} className="text-5xl text-red-700">
            <AiFillDislike />
          </div>
        <button onClick={reset} className='bg-sky-300 p-2 rounded font-bold hover:bg-sky-500'>reset</button>
      </div>
      <div className='flex gap-14'>
        <button className='w-10 text-2xl' id='buton-1'>{like}</button>
        <button className='w-10 text-2xl' id='buton-2'>{dislike}</button>
      </div>
      <div className="flex gap-2">
        <input className="border outline-0 rounded" id="input" type="text" placeholder="Enter a comment" />
        <button onClick={button} className="border rounded  'bg-sky-300 p-1  font-bold hover:bg-sky-500">sumbit</button>
      </div>
      <div>
        {comment.map((value)=>
        <p>{value}</p>
        )}
      </div>
      </div>
     </div>
    </div>
  )
}

export default Card
