import React, { createContext, useState } from 'react'

const CartContext = createContext()

export default CartContext

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addToCart = (nom, prix) => {
    setItems((prev) => [...prev, { nom, prix }])
  }
  const removeFromCart = (nom) => {
    setItems((prev) => prev.filter((item) => item.nom !== nom))
  }
  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
