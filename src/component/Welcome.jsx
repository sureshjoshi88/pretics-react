import React from "react"
function Welcome(props){
return (
    <>
    <h2 className="bg-red-400 ">jai shrre ram</h2>
    {props.user.map((value)=>{
       return <div className="flex flex-row">
           
                <div className="border w-30 p-1">
                    <h3>Name:-{value.name}</h3>
                    <h3>Name:-{value.age}</h3>
                    <h3>Name:-{value.status}</h3>
                </div>
           
        </div>
    })}
    </>
)
}
export default Welcome