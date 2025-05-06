import { React } from 'react'
import { useState } from 'react';
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { GiPlayButton } from "react-icons/gi";
import { GrPowerReset } from "react-icons/gr";



const Card = (props) => {


  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [comment, setComment] = useState([]);

  const button = () => {
    let input = document.getElementById("input");
    console.log(comment);
    if(input.value==""){
      alert("please enter value")
    }else{
      setComment([...comment, input.value]);
      input.value = ""

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
  return (
    <div className='mt-4'>
      <div>
        <div className="bg-white rounded shadow-xl p-2 mt-3 border border-amber-600">
          <div>
            <img src={props.img} alt="" />
          </div>
          <p>{props.title}</p>
          <p>React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.</p>
          <div className='flex justify-between mt-3 gap-5 w-80'>
            <div className="flex">
              <div onClick={counter} className="text-5xl text-green-700">
                <AiFillLike />
              </div>
              <button className='w-10 text-2xl' id='buton-1'>{like}</button>

            </div>

            <div className="flex">
              <div onClick={counter2} className="text-5xl text-red-700">
                <AiFillDislike />
              </div>
              <button className='w-10 text-2xl' id='buton-2'>{dislike}</button>
            </div>
            <button onClick={reset} className='text-5xl text-lime-600'><GrPowerReset />
            </button>
          </div>
            <div className="flex gap-2 mt-3 border w-fit rounded">
              <input className=" outline-0 rounded" id="input" type="text" placeholder="Enter a comment" />
              <div className="text-2xl" onClick={button}><GiPlayButton /></div>
            </div>
          <div>
            {comment.map((value) =>

              <li>{value}</li>

            )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
