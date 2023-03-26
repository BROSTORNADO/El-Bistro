import React, { useContext, useState } from 'react'
import CartContext from '../cartContext'

export default function Food({ id, image, name, ingredients, price }) {
  const [isAdded, setIsAdded] = useState(false)
  const { addToCart, removeFromCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart(name, price)
    setIsAdded(true)
  }

  const handleRemoveFromCart = () => {
    removeFromCart(name)
    setIsAdded(false)
  }

  return (
    <div
      className={`bg-gradient-to-b from-${
        isAdded ? 'green-200' : 'gray-400'
      } to-${
        isAdded ? 'green-500' : 'gray-600'
      } mb-4 rounded-lg max-w-[270px] overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out`}
    >
      <img className="w-full h-64 object-cover" src={image} alt={name} />
      <div className="p-4 bg-gray-300">
        <h2 className="text-xl text-green-500 font-semibold mb-2">{name}</h2>
        <p className="text-gray-700 text-base">{ingredients}</p>
        <p className="text-gray-700 text-base mt-2">{price} $</p>
        {isAdded ? (
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-500  text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="bg-green-500  text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out"
          >
            Add
          </button>
        )}
      </div>
    </div>
  )
}
