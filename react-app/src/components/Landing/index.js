import React from 'react'
import LandingImg from '../../img/sample.png'
import './landing.css'

function Landing() {
  return (
    <div id='landing-wrap'>
      <h1 id='main-title' >Welcome to mySampler</h1>
      <img id='landing-img' src={LandingImg}
        alt='Welcome'
      ></img>
    </div>
  );
}
export default Landing
