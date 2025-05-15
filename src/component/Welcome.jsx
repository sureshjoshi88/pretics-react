import React, { useEffect, useState } from "react"
function Welcome(props){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("jai shree ram");
        setTimeout(() => {
            setCount(count+1)
        }, 1000);
        
    },[])
return (
    <>
    <h2 className="bg-red-400 ">jai shrre ram {count}</h2>

    {/* {props.user.map((value)=>{
       return <div className="flex flex-row">
           
                <div className="border w-30 p-1">
                    <h3>Name:-{value.name}</h3>
                    <h3>Age:-{value.age}</h3>
                    <h3>Status:-{value.status}</h3>
                </div>
           
        </div>
    })} */}
    </>
)
}
export default Welcome