import React from 'react'
import NewSamplerModal from '../Modals/NewSamplerModal'
import Sampler from '../Sampler'

function Home() {
  return (
    <>
      <div id="body-wrap">
        <div id='new-sampler'>'
          <h2>lets make</h2>
          <br />
          <h1>Some Beats!</h1>
          <NewSamplerModal />
        </div>
        <Sampler />
      </div>
    </>
  );
}
export default Home;
