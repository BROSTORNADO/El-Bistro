import React, { useState } from 'react'
import { plus, minus } from '../assets'
const Quant = () => {
  const [quantity, setquantity] = useState(1)
  return (
    <>
      <img
        src={plus}
        className="px-2 py-2 rounded-lg w-[45px] h-[45px] object-cover cursor-pointer"
        onClick={() => setquantity((prev) => prev + 1)}
      />
      <h4 className="font-bold text-green-500">x {quantity}</h4>
      <img
        src={minus}
        onClick={() =>
          setquantity((prev) => {
            if (prev === 1) {
              return 1
            } else {
              return prev - 1
            }
          })
        }
        className=" px-2 py-2 rounded-lg w-[45px] h-[45px]  object-cpover cursor-pointer "
      />
    </>
  )
}

export default Quant
