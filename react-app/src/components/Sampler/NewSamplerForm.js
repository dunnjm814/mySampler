import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {newSampler} from '../../store/sampler'
import './samplerform.css'

const NewSamplerForm = ({ setShowModal }) => {

  const history = useHistory();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [priv, setPriv] = useState(false);
  const [errors, setErrors] = useState([]);


  const submitSampler = async (e) => {
    e.preventDefault();

    const sampler = await dispatch(newSampler(title, priv));
    if (sampler.errors) {
      setErrors([...sampler.errors]);
    }
    setShowModal(false);
    history.push(`/sampler/${sampler.id}`)
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={submitSampler}>
      <div>
        <ul>
          {errors.map((error, i) => (
            <li key={i} style={{ color: "red" }}>
              {error}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input
          placeholder="Title"
          type="text"
          name="title"
          onChange={updateTitle}
          value={title}
        ></input>
      </div>
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <label htmlFor="public">
            Public
            <input
              type="radio"
              value={false}
              id="radio-false"
              name="public"
              onChange={(e) => setPriv(e.target.value)}
              checked={priv === false}
            />
          </label>
          <label htmlFor="private">
            Private
            <input
              type="radio"
              value={true}
              id="radio-true"
              name="private"
              onChange={(e) => setPriv(e.target.value)}
              checked={priv === true}
            />
          </label>
        </div>
      </div>
      <button id="submit-new" type="submit">
        Make a new sampler!
      </button>
    </form>
  );
};
export default NewSamplerForm
