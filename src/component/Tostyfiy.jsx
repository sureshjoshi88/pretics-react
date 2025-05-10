import React from 'react'

const Tostyfiy = (props) => {
  return (
    <div>
      <div className="bg-red-600 text-white absolute top-3.5 right-2.5">
        <p>{props.error}</p>
      </div>
    </div>
  )
}

export default Tostyfiy
