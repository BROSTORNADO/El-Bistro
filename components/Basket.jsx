import React from 'react'
import { useContext } from 'react'
import CartContext from '../cartContext'
const Basket = () => {
  const { removeFromCart, items } = useContext(CartContext)
  //   console.log(items)
  return (
    <div className="bg-gray-200 rounded-lg shadow-lg p-2 mt-2 max-h-72 overflow-y-auto">
      {items.map((item, idx) => (
        <div key={idx} className="flex justify-between items-center mb-4">
          <div className="flex-1 mr-4">
            <h4 className="font-bold">{item.nom}</h4>

            <p className="text-green-500 font-bold">{item.prix}$</p>
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
            onClick={() => removeFromCart(item.nom)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default Basket
