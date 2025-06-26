import React, { useState, useEffect } from 'react'
import Foter from './Foter';
import Navbar from './Navbar';

const Fetchapi = (props) => {
  const [data, setData] = useState([]);
  useEffect( () => {
     fetch("https://jsonplaceholder.typicode.com/posts")
      .then((datas) => {
        return datas.json();
      }).then((datas) => {
        setData(datas)
      })

  }, []);
  return (
    <div>
      {/* <Navbar logout={props.logOut} sigin={props.sigin} /> */}

      <div className='grid grid-cols-3 gap-3 p-1'>
        {data.map((item, index) => {
          return <div className=' mt-2 p-2 rounded shadow shadow-blue-400' key={index}>
            <p className='text-blue-600 font-semibold'>ID: {item.id}</p>
            <p className='text-xl font-medium'>{item.title}</p>
            <p className='opacity-80'>{item.body}</p>
          </div>
        })}
      </div>
      <Foter />
    </div>
  )
}

export default Fetchapi
