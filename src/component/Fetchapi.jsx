import React,{useState,useEffect} from 'react'

const Fetchapi = () => {
  const [data,setData] = useState([]);
   useEffect(()=>{
     const response =   fetch("https://jsonplaceholder.typicode.com/posts")
    .then((datas)=>{
      return datas.json();
    }).then((datas)=>{
      console.log(datas);
      setData(datas)
    })
    
   },[]);
  return (
    <div>
      <div className='grid grid-cols-3 gap-3 '>
      {data.map((item)=>{
      return <div className='border mt-2 p-1 rounded'>
        <p className='text-2xl font-medium'>{item.title}</p>
        <p>{item.body}</p>
      </div>
      })}
      </div>
    </div>
  )
}

export default Fetchapi
