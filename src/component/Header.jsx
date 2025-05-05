import React from 'react'
import ProductCard from './ProductCard'
import Simple from './Simple'

function Header() {
  return (
    <div>
        <h1 className='text-center text-4xl bg-green-400'>product listing app</h1>
        {/* <ProductCard/> */}
        <Simple/>
    </div>
  )
}

export default Header
