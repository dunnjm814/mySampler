import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import "./Modal.css";

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
              <span className="infoLine">
                Click any pad to upload an audio file.
              </span>
              <br />
              <span className="infoLine">
                Pads with loaded audio will fill red.
              </span>
              <br />
              <span className="infoLine">
                Pads 1-4 correspond to keys 'a-f' on your keyboard.
              </span>
              <br />
              <span className="infoLine">
                Pads 5-8 correspond to keys 'z-v' on your keyboard.
              </span>
              <br />
              <span className="infoLine">
                Mix audio gain with the mixer to the right of sampler.
              </span>
              <br />
              <span className="infoLine">
                Make a sequence by selecting portions of the grid and press play.
              </span>
              <br />
              <span className="infoLine">
                Pick a key for the background synth to play that matches your sample keys!
              </span>
              <br />
              <span className="infoLine">
                the samples in the demosampler are tuned to Dminor :)
              </span>
              <br />
              <span className="infoLine">
                Click anywhere on the page to play! Have fun!
              </span>
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
