import React, { useState , useEffect} from "react";
// import { Slider } from "@material-ui/core";
import { Knob } from "react-rotary-knob";
import { useDispatch, useSelector } from 'react-redux'
import {receiveSamples} from '../../store/samples'
import "./home.css";

function Home() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [tempo, setTempo] = useState(120);
  const [sample1, setSample1] = useState('');
  const [sample2, setSample2] = useState('');
  const [sample3, setSample3] = useState('');
  const [sample4, setSample4] = useState('');
  const [sample5, setSample5] = useState('');
  const [sample6, setSample6] = useState('');
  const [sample7, setSample7] = useState('');
  const [sample8, setSample8] = useState('');

  const userId = sessionUser.id
  useEffect(() => {
      const sendData = {
        userId,
        sample1,
        sample2,
        sample3,
        sample4,
        sample5,
        sample6,
        sample7,
        sample8,
      };
      console.log(sample1)
      dispatch(receiveSamples(sendData))
    console.log(sample1)
  }, [sample1, sample2, sample3, sample4, sample5, sample6, sample7, sample8])


  const slideTempo = (e) => {
    setTempo(e.target.value);
  };
  return (
    <div id="home-wrap">
      <div id="sampler-wrap">
        <div id="knobs-wrap">
          <div id='knob-container'>
            <span></span>
            <Knob min={0} max={1} defaultValue={0} step={0.1}/>
          </div>
          <div id='knob-container'>
            <span></span>
            <Knob min={0} max={1} defaultValue={0} step={0.1}/>
          </div>
          <div id='knob-container'>
            <span></span>
            <Knob min={0} max={1} defaultValue={0} step={0.1}/>
          </div>
          <div id='knob-container'>
            <span></span>
            <Knob min={0} max={1} defaultValue={0} step={0.1}/>
          </div>
        </div>
        <label className="sample-load">
          <input type="file" />
        </label>
        <div id="bpm-wrap"></div>
        <div id="bpm-slider">
          <span>Tempo</span>
          <input
            type="range"
            id="tempo"
            value={tempo}
            min={60}
            max={240}
            onChange={slideTempo}
          />
        </div>
        <div id="samples">
          <div id="row-one">
            <div id="samples-wrap">
              <form id="sample-submit">
                <label className="sample-load">
                  1
                  <input
                    type="file"
                    onChange={(e) => setSample1(e.target.files[0])}
                  ></input>
                </label>
              </form>
              <form id="sample-submit">
                <label className="sample-load">
                  2
                  <input
                    type="file"
                    onChange={(e) => setSample2(e.target.files[0])}
                  ></input>
                </label>
              </form>
              <form id="sample-submit">
                <label className="sample-load">
                  3
                  <input
                    type="file"
                    onChange={(e) => setSample3(e.target.files[0])}
                  ></input>
                </label>
              </form>
              <form id="sample-submit">
                <label className="sample-load">
                  4
                  <input
                    type="file"
                    onChange={(e) => setSample4(e.target.files[0])}
                  ></input>
                </label>
              </form>
            </div>
          </div>
          <div id="row-two">
            <div id="samples-wrap">
              <form id="sample-submit">
                <label className="sample-load">
                  5
                  <input
                    type="file"
                    onChange={(e) => setSample5(e.target.files[0])}
                  ></input>
                </label>
              </form>
              <form id="sample-submit">
                <label className="sample-load">
                  6
                  <input
                    type="file"
                    onChange={(e) => setSample6(e.target.files[0])}
                  ></input>
                </label>
              </form>
              <form id="sample-submit">
                <label className="sample-load">
                  7
                  <input
                    type="file"
                    onChange={(e) => setSample7(e.target.files[0])}
                  ></input>
                </label>
              </form>
              <form id="sample-submit">
                <label className="sample-load">
                  8
                  <input
                    type="file"
                    name="sample8"
                    onChange={(e) => setSample8(e.target.files[0])}
                  ></input>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
