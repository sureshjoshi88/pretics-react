import { React } from 'react'
import { useState } from 'react';
import { AiFillLike, AiFillDislike } from "react-icons/ai";


const Card = (props) => {


  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [comment, setComment] = useState([]);

  const button = () => {
    let input = document.getElementById("input");
    console.log(comment);
    setComment([...comment, input.value]);
    input.value = ""


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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quaerat quisquam cumque, nemo debitis autem cum architecto inventore vitae suscipit.</p>
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
            <button onClick={reset} className='bg-sky-300 p-2 rounded font-bold hover:bg-sky-500'>reset</button>
          </div>

          <form action="">
            <div className="flex gap-2 mt-3">
              <input className="border outline-0 rounded" id="input" type="text" placeholder="Enter a comment" />
              <button type="sumbit" onClick={button} className="border rounded  bg-sky-300 p-1  font-semibold hover:bg-sky-500">sumbit</button>
            </div>
          </form>
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
