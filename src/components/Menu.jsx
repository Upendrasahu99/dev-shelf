import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li><NavLink to={'/dev-shelf/home'}>Home</NavLink></li>
        <li><NavLink to={'/dev-shelf/html'}>Html</NavLink></li>
        <li><NavLink to={'/dev-shelf/css'}>Css</NavLink></li>
        <li><NavLink to={'/dev-shelf/javascript'}>Javascript</NavLink></li>
        <li><NavLink to={'/dev-shelf/tailwind'}>Tailwind</NavLink></li>
        <li><NavLink to={'/dev-shelf/design'}>Design</NavLink></li>
        <li><NavLink to={'/dev-shelf/system-design'}>System Design</NavLink></li>
        <li><NavLink to={'/dev-shelf/react'}>React</NavLink></li>
        <li><NavLink to={'/dev-shelf/node'}>Node</NavLink></li>
        <li><NavLink to={'/dev-shelf/animation'}>Animation</NavLink></li>
        <li><NavLink to={'/dev-shelf/website'}>WebsiteBuilder</NavLink></li>
      </ul>
    </div>
  )
}

export default Menu