import React from 'react'
import {NavLink} from 'react-router-dom'
import './notfound.css'


function NotFound() {
  return (
    <div id='fourOhfour'>
      <h1>404, Sampler not found</h1>
      <NavLink to='/home'>Click to head home</NavLink>
    </div>

  )
}
export default NotFound
