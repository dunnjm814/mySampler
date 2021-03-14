import React, { useState , useEffect} from "react";
import { Knob } from "react-rotary-knob";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { receiveSamples } from '../../store/samples'
import { getSampler, deleteSampler } from '../../store/sampler'
import {useMixerContext} from '../../context/Mixer'
import "./sampler.css";

function Sampler() {
  const { samplerId } = useParams()
  const dispatch = useDispatch();
  const history = useHistory();
  const { sampleVol, setSampleVol } = useMixerContext();


  useEffect(() => {
    dispatch(getSampler(samplerId))
    }, [dispatch, samplerId])

  const samplerState = useSelector((state) => {
    return state.sampler.sampler;
  });

  const [tempo, setTempo] = useState(120);
  const [samples, setSamples] = useState({
    sampleOne:'',
    sampleTwo:'',
    sampleThree:'',
    sampleFour:'',
    sampleFive:'',
    sampleSix:'',
    sampleSeven:'',
    sampleEight:'',
  });
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const [seven, setSeven] = useState("");
  const [eight, setEight] = useState("");
  // useEffect(() => {
  //   setLoaded(true);
  // }, [samplerId]);
  useEffect(() => {
    if (samplerState) {
      setOne(samplerState.sampleOne)
      setTwo(samplerState.sampleTwo)
      setThree(samplerState.sampleThree)
      setFour(samplerState.sampleFour)
      setFive(samplerState.sampleFive)
      setSix(samplerState.sampleSix)
      setSeven(samplerState.sampleSeven)
      setEight(samplerState.sampleEight)
    }
  }, [
    samplerState,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
  ]);


  useEffect(() => {
    if (
      Object.values(samples).every((sample) => {
          return sample === ''
        })
      ) return
        const sendData = {
          samplerId,
          samples
        };
      dispatch(receiveSamples(sendData))
  }, [dispatch, samples, samplerId])


  const slideTempo = (e) => {
    setTempo(e.target.value);
  };

  const destroySampler = async (e) => {
    e.preventDefault();
    const destroy = dispatch(deleteSampler(samplerId))
    if (destroy.errors) {
      // future error handling
    } else {
      history.push("/home");
    }
  }
  const knobStyle = {
    width: '20px',
    height: '20px'
  }
  return (
    <div id="sampler-show-wrap">
      {samplerState && (
        <div id="sampler-credentials">
          <h2 id="sampler-title">{samplerState.title}</h2>
          <button type="delete" id="delete-sampler" onClick={destroySampler}>
            Delete?
          </button>
        </div>
      )}
      <div id="sampler-show">
        <div id="sampler-mixer-house">
          <div id="sampler-wrap">
            <div id="knobs-wrap">
              <div id="knob-container">
                <span></span>
                <Knob min={0} max={1} defaultValue={0} step={0.1} />
              </div>
              <div id="knob-container">
                <span></span>
                <Knob min={0} max={1} defaultValue={0} step={0.1} />
              </div>
              <div id="knob-container">
                <span></span>
                <Knob min={0} max={1} defaultValue={0} step={0.1} />
              </div>
              <div id="knob-container">
                <span></span>
                <Knob min={0} max={1} defaultValue={0} step={0.1} />
              </div>
            </div>
            <div id="bpm-wrap">
              <div id='bpm-house'>
                <h1 id='bpm-text'>{tempo}</h1>
              </div>
            </div>
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
                    <label
                      className={(one && "sample-load red") || "sample-load"}
                    >
                      1
                      <input
                        type="file"
                        onChange={(e) =>
                          setSamples({
                            ...samples,
                            sampleOne: e.target.files[0],
                          })
                        }
                      ></input>
                    </label>
                  </form>
                  <form id="sample-submit">
                    <label
                      className={(two && "sample-load red") || "sample-load"}
                    >
                      2
                      <input
                        type="file"
                        onChange={(e) =>
                          setSamples({
                            ...samples,
                            sampleTwo: e.target.files[0],
                          })
                        }
                      ></input>
                    </label>
                  </form>
                  <form id="sample-submit">
                    <label
                      className={(three && "sample-load red") || "sample-load"}
                    >
                      3
                      <input
                        type="file"
                        onChange={(e) =>
                          setSamples({
                            ...samples,
                            sampleThree: e.target.files[0],
                          })
                        }
                      ></input>
                    </label>
                  </form>
                  <form id="sample-submit">
                    <label
                      className={(four && "sample-load red") || "sample-load"}
                    >
                      4
                      <input
                        type="file"
                        onChange={(e) =>
                          setSamples({
                            ...samples,
                            sampleFour: e.target.files[0],
                          })
                        }
                      ></input>
                    </label>
                  </form>
                </div>
              </div>
              <div id="row-two">
                <div id="samples-wrap">
                  <form id="sample-submit">
                    <label
                      className={(five && "sample-load red") || "sample-load"}
                    >
                      5
                      <input
                        type="file"
                        onChange={(e) =>
                          setSamples({
                            ...samples,
                            sampleFive: e.target.files[0],
                          })
                        }
                      ></input>
                    </label>
                  </form>
                  <form id="sample-submit">
                    <label
                      className={(six && "sample-load red") || "sample-load"}
                    >
                      6
                      <input
                        type="file"
                        onChange={(e) =>
                          setSamples({
                            ...samples,
                            sampleSix: e.target.files[0],
                          })
                        }
                      ></input>
                    </label>
                  </form>
                  <form id="sample-submit">
                    <label
                      className={(seven && "sample-load red") || "sample-load"}
                    >
                      7
                      <input
                        type="file"
                        onChange={(e) =>
                          setSamples({
                            ...samples,
                            sampleSeven: e.target.files[0],
                          })
                        }
                      ></input>
                    </label>
                  </form>
                  <form id="sample-submit">
                    <label
                      className={(eight && "sample-load red") || "sample-load"}
                    >
                      8
                      <input
                        type="file"
                        name="sample8"
                        onChange={(e) =>
                          setSamples({
                            ...samples,
                            sampleEight: e.target.files[0],
                          })
                        }
                      ></input>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div id="mixer-wrap">
            <div id="mixer">
              <div id="fx-send-wrap">
                <div className="fx-knobs">
                  <div className="verb">
                    <Knob
                      style={knobStyle}
                      min={0}
                      max={1}
                      defaultValue={0}
                      step={0.1}
                    />
                  </div>
                  <div className="delay" style={{ marginTop: "13px" }}>
                    <Knob
                      style={knobStyle}
                      min={0}
                      max={1}
                      defaultValue={0}
                      step={0.1}
                    />
                  </div>
                </div>
                <div className="fx-knobs" style={{ marginTop: "15px" }}>
                  <div className="verb">
                    <Knob
                      style={knobStyle}
                      min={0}
                      max={1}
                      defaultValue={0}
                      step={0.1}
                    />
                  </div>
                  <div className="delay" style={{ marginTop: "13px" }}>
                    <Knob
                      style={knobStyle}
                      min={0}
                      max={1}
                      defaultValue={0}
                      step={0.1}
                    />
                  </div>
                </div>
                <div className="fx-knobs">
                  <div className="verb">
                    <Knob
                      style={knobStyle}
                      min={0}
                      max={1}
                      defaultValue={0}
                      step={0.1}
                    />
                  </div>
                  <div className="delay" style={{ marginTop: "13px" }}>
                    <Knob
                      style={knobStyle}
                      min={0}
                      max={1}
                      defaultValue={0}
                      step={0.1}
                    />
                  </div>
                </div>
                <div className="fx-knobs" style={{ marginTop: "15px" }}>
                  <div className="verb">
                    <Knob
                      style={knobStyle}
                      min={0}
                      max={1}
                      defaultValue={0}
                      step={0.1}
                    />
                  </div>
                  <div className="delay" style={{ marginTop: "13px" }}>
                    <Knob
                      style={knobStyle}
                      min={0}
                      max={1}
                      defaultValue={0}
                      step={0.1}
                    />
                  </div>
                </div>
                <div className="fx-knobs">
                  <div className="verb">
                    <Knob
                      style={knobStyle}
                      min={0}
                      max={1}
                      defaultValue={0}
                      step={0.1}
                    />
                  </div>
                  <div className="delay" style={{ marginTop: "13px" }}>
                    <Knob
                      style={knobStyle}
                      min={0}
                      max={1}
                      defaultValue={0}
                      step={0.1}
                    />
                  </div>
                </div>
                <div className="fx-knobs" style={{ marginTop: "15px" }}>
                  <div className="verb">
                    <Knob
                      style={knobStyle}
                      min={0}
                      max={1}
                      defaultValue={0}
                      step={0.1}
                    />
                  </div>
                  <div className="delay" style={{ marginTop: "13px" }}>
                    <Knob
                      style={knobStyle}
                      min={0}
                      max={1}
                      defaultValue={0}
                      step={0.1}
                    />
                  </div>
                </div>
                <div className="fx-knobs">
                  <div className="verb">
                    <Knob
                      style={knobStyle}
                      min={0}
                      max={1}
                      defaultValue={0}
                      step={0.1}
                    />
                  </div>
                  <div className="delay" style={{ marginTop: "13px" }}>
                    <Knob
                      style={knobStyle}
                      min={0}
                      max={1}
                      defaultValue={0}
                      step={0.1}
                    />
                  </div>
                </div>
                <div className="fx-knobs" style={{ marginTop: "15px" }}>
                  <div className="verb">
                    <Knob
                      style={knobStyle}
                      min={0}
                      max={1}
                      defaultValue={0}
                      step={0.1}
                    />
                  </div>
                  <div className="delay" style={{ marginTop: "13px" }}>
                    <Knob
                      style={knobStyle}
                      min={0}
                      max={1}
                      defaultValue={0}
                      step={0.1}
                    />
                  </div>
                </div>
              </div>
              <div id="vol-slider-wrap">
                <div id="volOne" className="vol-slider">
                  <input
                    type="range"
                    value={sampleVol.volOne}
                    min={-60}
                    max={6}
                    onChange={(e) => {
                      e.stopPropagation();
                      setSampleVol({ ...sampleVol, volOne: e.target.value });
                      console.log(sampleVol.volOne);
                    }}
                  />
                </div>
                <div id="volTwo" className="vol-slider">
                  <input
                    type="range"
                    value={sampleVol.volTwo}
                    min={-60}
                    max={6}
                    onChange={(e) => {
                      e.stopPropagation();
                      setSampleVol({ ...sampleVol, volTwo: e.target.value });
                      console.log(sampleVol.volTwo);
                    }}
                    orient={"vertical"}
                  />
                </div>
                <div id="volThree" className="vol-slider">
                  <input
                    type="range"
                    value={sampleVol.volThree}
                    min={-60}
                    max={6}
                    onChange={(e) => {
                      e.stopPropagation();
                      setSampleVol({ ...sampleVol, volThree: e.target.value });
                      console.log(sampleVol.volThree);
                    }}
                    orient={"vertical"}
                  />
                </div>
                <div id="volFour" className="vol-slider">
                  <input
                    type="range"
                    value={sampleVol.volFour}
                    min={-60}
                    max={6}
                    onChange={(e) => {
                      e.stopPropagation();
                      setSampleVol({ ...sampleVol, volFour: e.target.value });
                      console.log(sampleVol.volFour);
                    }}
                    orient={"vertical"}
                  />
                </div>
                <div id="volFive" className="vol-slider">
                  <input
                    type="range"
                    value={sampleVol.volFive}
                    min={-60}
                    max={6}
                    onChange={(e) => {
                      e.stopPropagation();
                      setSampleVol({ ...sampleVol, volFive: e.target.value });
                      console.log(sampleVol.volFive);
                    }}
                    orient={"vertical"}
                  />
                </div>
                <div id="volSix" className="vol-slider">
                  <input
                    type="range"
                    value={sampleVol.volSix}
                    min={-60}
                    max={6}
                    onChange={(e) => {
                      e.stopPropagation();
                      setSampleVol({ ...sampleVol, volSix: e.target.value });
                      console.log(sampleVol.volSix);
                    }}
                    orient={"vertical"}
                  />
                </div>
                <div id="volSeven" className="vol-slider">
                  <input
                    type="range"
                    value={sampleVol.volSeven}
                    min={-60}
                    max={6}
                    onChange={(e) => {
                      e.stopPropagation();
                      setSampleVol({ ...sampleVol, volSeven: e.target.value });
                      console.log(sampleVol.volSeven);
                    }}
                    orient={"vertical"}
                  />
                </div>
                <div id="volEight" className="vol-slider">
                  <input
                    type="range"
                    value={sampleVol.volEight}
                    min={-60}
                    max={6}
                    onChange={(e) => {
                      e.stopPropagation();
                      setSampleVol({ ...sampleVol, volEight: e.target.value });
                      console.log(sampleVol.volEight);
                    }}
                    orient={"vertical"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sampler;
