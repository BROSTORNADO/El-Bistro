import React, { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../cartContext'
import { Quant } from '../components'

const Basket = () => {
  const { removeFromCart, items } = useContext(CartContext)

  return (
    <div className="bg-gray-200 rounded-lg shadow-lg p-2 mt-2 max-h-72 overflow-y-auto">
      {items.map((item, idx) => (
        <div key={idx} className="flex justify-between items-center mb-4">
          <div className="flex-1 mr-4">
            <h4 className="font-bold">{item.nom}</h4>

            <p className="text-green-500 font-bold">{item.prix}$</p>
          </div>
          <Quant />
        </div>
      ))}
    </div>
  )
}

export default Basket
