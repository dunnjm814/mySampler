import React, { useState, useEffect } from "react";
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
            <div id='the-info'>
              <h1>Welcome to mySampler!</h1>
              <span>Click any pad to upload an audio file.</span><br/>
              <span>Pads with loaded audio will fill red.</span><br/>
              <span>Pads 1-4 correspond to keys 'a-f' on your keyboard.</span><br/>
              <span>Pads 5-8 correspond to keys 'z-v' on your keyboard.</span><br/>
              <span>Mix audio gain with the mixer to the right of sampler.</span><br/>
            </div>
            <button type="close" id="close-box">
              Close
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
export default InfoBox
