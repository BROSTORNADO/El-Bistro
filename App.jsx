import React from 'react'
import { Header, Foods } from './components'
import { CartProvider } from './cartContext'
export default function App() {
  return (
    <div className=" bg-[url('/food-logos/sky.jpg')] bg-center bg-cover">
      <CartProvider>
        <Header />
        <Foods />
      </CartProvider>
    </div>
  )
}
