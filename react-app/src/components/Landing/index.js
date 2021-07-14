import React from 'react'
import { NavLink } from "react-router-dom";
import LandingImg from '../../img/sample.png'
import './landing.css'

function Landing() {
  return (
    <>
    <div id='landing-wrap'>
      <h1 id='main-title' >Welcome to mySampler</h1>
      <img id='landing-img' src={LandingImg}
        alt='Welcome'
      ></img>
      <section className="info one">
        <div>
          <p>
            What is mySampler?
          </p>
        </div>
        <div>
          <p>mySampler is a in browser audio sequencer instrument.</p>
          <p>You upload audio snippets to the cloud</p>
          <p>Then sequence your audio as an arrangement for playback</p>
        </div>
        </section>
        <section className='info two'>
          <div>
            <p>What if I don't have any samples?</p>
          </div>
          <div>
            <p>Click <NavLink to="/demo">here</NavLink> to try out
              the sequencer without uploading any audio!
            </p>
          </div>
        </section>
    </div>
    </>
  );
}
export default Landing
