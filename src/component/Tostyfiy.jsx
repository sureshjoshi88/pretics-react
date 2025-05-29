import React from 'react'

const Tostyfiy = (props) => {
  return (
    <div>
     { props.error==="congrass yor are logined"?<div className="bg-green-700 z-50 text-white font-bold absolute top-3.5 right-2.5 p-3 rounded"> <p>{props.error}</p></div>:<div className="bg-red-600 text-white font-bold absolute top-3.5 right-2.5 p-3 rounded">
        <p>{props.error}</p>
      </div>}
    </div>
  )
}

export default Tostyfiy
