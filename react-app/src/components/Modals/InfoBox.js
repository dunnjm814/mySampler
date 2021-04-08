import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import "./Modal.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import {BiCool} from 'react-icons/bi'


function InfoBox() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        id="info-box"
        className="info-box-modal"
        onClick={() => setShowModal(true)}
      >
        About
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div id="info-box-wrap">
            <div id="the-info">
              <h1>Welcome to mySampler!</h1>
              <p className="infoLine">
                Click any pad to upload an audio file.
                <br />
                Pads with loaded audio will fill red.
                <br />
                Pads 1-4 correspond to keys 'a-f' on your keyboard.
                <br />
                Pads 5-8 correspond to keys 'z-v' on your keyboard.
                <br />
                Mix audio gain with the mixer to the right of sampler.
                <br />
                Make a sequence by selecting portions of the grid and press
                play.
                <br />
                Pick a key for the background synth to play that matches your
                sample keys! <br />
                the samples in the demosampler are tuned to Dminor.
                <br />
                Click anywhere on the page to play! Have fun!
              </p>
            </div>
            <div id="links">
              <a href="https://www.dunn.cool/">
                <BiCool />
              </a>
              <a href="https://github.com/dunnjm814/mySampler">
                <FaGithubSquare />
              </a>
              <a href="https://www.linkedin.com/in/jason-dunn-software-engineer/">
                <FaLinkedin />
              </a>
            </div>
            <button
              type="close"
              id="close-box"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
export default InfoBox
