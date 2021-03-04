import React from 'react'
import './home.css'


function Home() {
  function load() {

  }
  return (
    <div id="sampler-wrap">
      <div id="knobs-wrap"></div>
      <div id="bpm-wrap"></div>
      <div id="bpm-slider"></div>
      <div id="samples">
        <div id="row-one">
          <div id="samples-wrap">
            <form id="sample-submit" onSubmit={load}>
              <label for="sample1" className="sample-load">
                1
                <input type="file"></input>
              </label>
            </form>
            <form id="sample-submit" onSubmit={load}>
              <label for="sample1" className="sample-load">
                2
                <input type="file"></input>
              </label>
            </form>
            <form id="sample-submit" onSubmit={load}>
              <label for="sample1" className="sample-load">
                3
                <input type="file"></input>
              </label>
            </form>
            <form id="sample-submit" onSubmit={load}>
              <label for="sample1" className="sample-load">
                4
                <input type="file"></input>
              </label>
            </form>
          </div>
        </div>
        <div id="row-two">
          <div id="samples-wrap">
            <form id="sample-submit" onSubmit={load}>
              <label for="sample1" className="sample-load">
                5
                <input type="file"></input>
              </label>
            </form>
            <form id="sample-submit" onSubmit={load}>
              <label for="sample1" className="sample-load">
                6
                <input type="file"></input>
              </label>
            </form>
            <form id="sample-submit" onSubmit={load}>
              <label for="sample1" className="sample-load">
                7
                <input type="file"></input>
              </label>
            </form>
            <form id="sample-submit" onSubmit={load}>
              <label for="sample1" className="sample-load">
                8
                <input type="file"></input>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home
