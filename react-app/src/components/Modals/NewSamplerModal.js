import "./Modal.css";
import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import NewSamplerForm from '../Sampler/NewSamplerForm'

function NewSamplerModal() {
  const [showModal, setShowModal] = useState(false);


  return (
    <div>
      <div>
        <button
          id="new-sampler-button"
          className="new-sampler-modal"
          onClick={() => setShowModal(true)}
        >
          Make a new Sampler!
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <NewSamplerForm setShowModal={setShowModal} />
          </Modal>
        )}
      </div>
    </div>
  );
}
export default NewSamplerModal
