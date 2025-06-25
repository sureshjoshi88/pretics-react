import React, { useState } from 'react'
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { GiPlayButton } from "react-icons/gi";
import { GrPowerReset } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { useTheme } from '../hooks/usetheame';

const Comment = (props) => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [comment, setComment] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const {theme,setTheme} = useTheme();

  const button = () => {
    if (inputValue == "") {
      alert("please enter value")
    } else {
      setComment([...comment, inputValue]);
      setinputValue("")
    }
  }
  const handleevent = (event) => {
    if (event.key === "Enter") {
      button()
    }
  }



  const counter = () => {

    setLike(like + 1)
  }
  const counter2 = () => {

    setDislike(dislike + 1)
  }
  const reset = () => {

    setLike(0);
    setDislike(0);

  }
  const handleDelete = (ind)=>{
    const filterComent = comment.filter((item,index)=>{
      return ind!==index;
    })
    setComment(filterComent)
  }
  return (
    <div>
      <div className='flex justify-between mt-3 gap-5 w-80'>
        <div className="flex items-center">
          <div onClick={counter} className="text-3xl text-green-700 cursor-pointer">
            <AiFillLike />
          </div>
          <button className='w-10 text-2xl cursor-pointer' id='buton-1'>{like}</button>

        </div>

        <div className="flex items-center">
          <div onClick={counter2} className="text-3xl text-red-700 cursor-pointer">
            <AiFillDislike />
          </div>
          <button className='w-10 text-2xl cursor-pointer' id='buton-2'>{dislike}</button>
        </div>
        <button onClick={reset} className='text-3xl text-lime-600 cursor-pointer'><GrPowerReset />
        </button>
      </div>
      <div className="flex gap-2 mt-3 border w-fit rounded items-center">
        <input className={` outline-0 rounded cursor-pointer p-1 ${theme === "light" ? " text-black" : "text-white"}`}  value={inputValue} type="text" name='comment' onChange={(e) => setinputValue(e.target.value)} onKeyDown={handleevent} placeholder="Enter a comment" />
        <div className={`text-2xl   cursor-pointer ${theme === "light" ? "text-neutral-700" : "text-white"}`} onClick={button}><GiPlayButton /></div>
      </div>
      <div className='h-20 overflow-hidden overflow-y-scroll webkit '>
        {comment.map((value, index) =>
        <div className='flex gap-5 p-1 items-center'>
          <li className="p-1 cursor-pointer" key={index}>{value}</li>
          <button onClick={()=>handleDelete(index)} className='text-red-600 text-lg font-medium rounded cursor-pointer'><MdDeleteForever /></button>
        </div> 
        )
        }
      </div>
    </div>
  )
}

export default Comment
