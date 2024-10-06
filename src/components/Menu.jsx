import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li><NavLink to={'/home'}>Home</NavLink></li>
        <li><NavLink to={'/html'}>Html</NavLink></li>
        <li><NavLink to={'/css'}>Css</NavLink></li>
        <li><NavLink to={'/javascript'}>Javascript</NavLink></li>
        <li><NavLink to={'/tailwind'}>Tailwind</NavLink></li>
        <li><NavLink to={'/design'}>Design</NavLink></li>
        <li><NavLink to={'/system-design'}>System Design</NavLink></li>
        <li><NavLink to={'/react'}>React</NavLink></li>
        <li><NavLink to={'/node'}>Node</NavLink></li>
      </ul>
    </div>
  )
}

export default Menu