import React from 'react'
import { NavLink } from 'react-router-dom'

const HtmlPage = () => {
  return (
    <div>
      HtmlPage
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li><NavLink to={'/html/resources'}>Resources</NavLink></li>
        <li><NavLink to={'/html/tools'}>Tools</NavLink></li>
      </ul>
    </div>
  )
}

export default HtmlPage