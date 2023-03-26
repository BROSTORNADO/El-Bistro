import React, { useState, useContext } from 'react'
import grossery from '../Data/grosseryData'
import CartContext from '../cartContext'
import { cartIcon } from '../assets'
import { Basket, Food } from '../components'
const Foods = () => {
  const { items } = useContext(CartContext)

  const [showCart, setShowCart] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {grossery.map((elm, idx) => (
          <Food className="food-section" key={idx} {...elm} />
        ))}
      </div>
      <div className="fixed bottom-0 right-0 mb-4 mr-4">
        <div className="bg-gray-200 text-white p-2 rounded-full max-w-[57px] flex items-center justify-center">
          <span
            onClick={() => setShowCart((prev) => !prev)}
            className="font-bold text-lg flex flex-col items-center justify-center cursor-pointer text-blue-500"
          >
            <img style={{ width: '30px' }} src={cartIcon} />
            {items.length}
          </span>
        </div>
        {items.length > 0 && showCart && <Basket />}
      </div>
    </div>
  )
}

export default Foods
