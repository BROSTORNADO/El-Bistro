import React, { Children } from 'react'
import { useState } from 'react'
const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'orders',
    title: 'Orders',
  },
  {
    id: 'login',
    title: 'Log In',
  },
  {
    id: 'signup',
    title: 'Sign Up',
  },
]

const Header = ({ children }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="fixed z-[1]  w-full bg-blue-200 shadow-lg  flex py-4 justify-between items-center navbar">
      <img
        src={'/food-logos/burger.png'}
        alt="hoobank"
        className="w-[40px] ml-1 h-[32px] flex-0 object-contain"
      />
      <h4 className="flex-1 okay font-extrabold  max-w-[120px] rounded-lg ml-1 text-lg text-gray-700">
        EL BISTRO
      </h4>
      {children}
      <ul className="list-none  sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins ${
              index === navLinks.length - 1 ? 'mr-5' : 'mr-10'
            } font-semibold text-lg cursor-pointer text-[16px] text-gray-500 hover:text-green-400 `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden  flex flex-1 justify-end items-center  ">
        <img
          className="w-[28px] mr-2  h-[28px] object-contain animate-pulse "
          src={toggle ? '/food-logos/close.svg' : '/food-logos/menu.svg'}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={` ${
            toggle ? `flex` : `hidden`
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl `}
        >
          <h4>{}</h4>
          <ul className="list-none shadow-lg rounded-md bg-blue-200 p-4 mx-0 flex flex-col  justify-end items-center flex-1 z-[1] bg-gray">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins ${
                  index === navLinks.length - 1 ? 'mb-4' : 'mb-2'
                }  text-lg cursor-pointer text-[20px] text-gray-500 hover:text-green-400`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
