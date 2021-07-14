import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { receiveSamples } from "../../store/samples";
import { getSampler, deleteSampler } from "../../store/sampler";
import { useMixerContext } from "../../context/Mixer";
import "./sampler.css";
import AudioPlayers from "../../components/AudioPlayers";

function Sampler() {
  const { samplerId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    sampleVol,
    setSampleVol,
    tempo,
    setTempo,
  } = useMixerContext();

  useEffect(() => {
    dispatch(getSampler(samplerId));
  }, [dispatch, samplerId]);

  const samplerState = useSelector((state) => {
    return state.sampler.sampler;
  });
  const sessionUser = useSelector((state) => state.session.user);

  const [samples, setSamples] = useState({
    sampleOne: "",
    sampleTwo: "",
    sampleThree: "",
    sampleFour: "",
    sampleFive: "",
    sampleSix: "",
    sampleSeven: "",
    sampleEight: "",
  });
  const fileTypes = ['audio/wav', 'audio/mp3', 'audio/flac', 'audio/aiff']
  function validFileType(file) {
    return fileTypes.includes(file.type);
  }

  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const [seven, setSeven] = useState("");
  const [eight, setEight] = useState("");


  useEffect(() => {
    if (samplerState) {
      setOne(samplerState.sampleOne);
      setTwo(samplerState.sampleTwo);
      setThree(samplerState.sampleThree);
      setFour(samplerState.sampleFour);
      setFive(samplerState.sampleFive);
      setSix(samplerState.sampleSix);
      setSeven(samplerState.sampleSeven);
      setEight(samplerState.sampleEight);
    }
  }, [samplerState, one, two, three, four, five, six, seven, eight]);

  useEffect(() => {
    if (
      Object.values(samples).every((sample) => {
        return sample === "";
      })
    )
      return;
    const sendData = {
      samplerId,
      samples,
    };
    dispatch(receiveSamples(sendData)).then(() => {window.location.reload();})

  }, [dispatch, samples, samplerId]);

  const slideTempo = (e) => {
    setTempo(e.target.value);
  };

  const destroySampler = async (e) => {
    e.preventDefault();
    const destroy = dispatch(deleteSampler(samplerId));
    if (destroy.errors) {
      // future error handling
    } else {
      history.push("/home");
    }
  };

  return (
    <div id="sampler-show-wrap">
      {samplerState && (
        <div id="sampler-credentials">
          <h2 id="sampler-title">{samplerState.title}</h2>
          {sessionUser.id === samplerState.userId ? (
            <button type="delete" id="delete-sampler" onClick={destroySampler}>
              Delete?
            </button>
          ) : null}
        </div>
      )}
      <div id="sampler-show">
        <div id="sampler-mixer-house">
          <div id="sampler-wrap">
            {/* <div id="bpm-wrap">
              <div id="bpm-house">
                <h1 id="bpm-text">{tempo}</h1>
                <h4>Bpm</h4>
              </div>
            </div>
            <div id="bpm-slider">
              <span id='tempo-text'>Tempo</span>
              <input
                type="range"
                id="tempo"
                value={tempo}
                min={60}
                max={240}
                onChange={slideTempo}
              />
            </div> */}
            <div id="samples">
              <div id="row-one">
                <div id="samples-wrap">
                  <form className="sample-submit">
                    <label
                      className={(one && "sample-load red") || "sample-load"}
                    >
                      1
                      <input
                        type="file"
                        accept="audio/*"
                        onChange={(e) => {
                          if (validFileType(e.target.files[0])) {
                            setSamples({
                              ...samples,
                              sampleOne: e.target.files[0],
                            });
                          } else {
                            window.alert("Invalid file type :(");
                          }
                        }}
                      ></input>
                    </label>
                  </form>
                  <form className="sample-submit">
                    <label
                      className={(two && "sample-load red") || "sample-load"}
                    >
                      2
                      <input
                        type="file"
                        accept="audio/*"
                        onChange={(e) => {
                          if (validFileType(e.target.files[0])) {
                            setSamples({
                              ...samples,
                              sampleTwo: e.target.files[0],
                            });
                          } else {
                            window.alert("Invalid file type :(");
                          }
                        }}
                      ></input>
                    </label>
                  </form>
                  <form className="sample-submit">
                    <label
                      className={(three && "sample-load red") || "sample-load"}
                    >
                      3
                      <input
                        type="file"
                        accept="audio/*"
                        onChange={(e) => {
                          if (validFileType(e.target.files[0])) {
                            setSamples({
                              ...samples,
                              sampleThree: e.target.files[0],
                            });
                          } else {
                            window.alert("Invalid file type :(");
                          }
                        }}
                      ></input>
                    </label>
                  </form>
                  <form className="sample-submit">
                    <label
                      className={(four && "sample-load red") || "sample-load"}
                    >
                      4
                      <input
                        type="file"
                        accept="audio/*"
                        onChange={(e) => {
                          if (validFileType(e.target.files[0])) {
                            setSamples({
                              ...samples,
                              sampleFour: e.target.files[0],
                            });
                          } else {
                            window.alert("Invalid file type :(");
                          }
                        }}
                      ></input>
                    </label>
                  </form>
                </div>
              </div>
              <div id="row-two">
                <div id="samples-wrap">
                  <form className="sample-submit">
                    <label
                      className={(five && "sample-load red") || "sample-load"}
                    >
                      5
                      <input
                        type="file"
                        accept="audio/*"
                        onChange={(e) => {
                          if (validFileType(e.target.files[0])) {
                            setSamples({
                              ...samples,
                              sampleFive: e.target.files[0],
                            });
                          } else {
                            window.alert("Invalid file type :(");
                          }
                        }}
                      ></input>
                    </label>
                  </form>
                  <form className="sample-submit">
                    <label
                      className={(six && "sample-load red") || "sample-load"}
                    >
                      6
                      <input
                        type="file"
                        accept="audio/*"
                        onChange={(e) => {
                          if (validFileType(e.target.files[0])) {
                            setSamples({
                              ...samples,
                              sampleSix: e.target.files[0],
                            });
                          } else {
                            window.alert("Invalid file type :(");
                          }
                        }}
                      ></input>
                    </label>
                  </form>
                  <form className="sample-submit">
                    <label
                      className={(seven && "sample-load red") || "sample-load"}
                    >
                      7
                      <input
                        type="file"
                        accept="audio/*"
                        onChange={(e) => {
                          if (validFileType(e.target.files[0])) {
                            setSamples({
                              ...samples,
                              sampleSeven: e.target.files[0],
                            });
                          } else {
                            window.alert("Invalid file type :(");
                          }
                        }}
                      ></input>
                    </label>
                  </form>
                  <form className="sample-submit">
                    <label
                      className={(eight && "sample-load red") || "sample-load"}
                    >
                      8
                      <input
                        type="file"
                        accept="audio/*"
                        name="sample8"
                        onChange={(e) => {
                          if (validFileType(e.target.files[0])) {
                            setSamples({
                              ...samples,
                              sampleEight: e.target.files[0],
                            });
                          } else {
                            window.alert("Invalid file type :(");
                          }
                        }}
                      ></input>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div id="sequencer-wrap">
            <AudioPlayers />
          </div>
          <div id="mixer-wrap">
            <div id="mixer">
              <h1>Volume</h1>
                <div id='vol-ids'>
                  <h4>1</h4>
                  <h4>2</h4>
                  <h4>3</h4>
                  <h4>4</h4>
                  <h4>5</h4>
                  <h4>6</h4>
                  <h4>7</h4>
                  <h4>8</h4>
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
                      setSampleVol({
                        ...sampleVol,
                        volOne: Number(e.target.value),
                      });
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
                      setSampleVol({
                        ...sampleVol,
                        volTwo: Number(e.target.value),
                      });
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
                      setSampleVol({
                        ...sampleVol,
                        volThree: Number(e.target.value),
                      });
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
                      setSampleVol({
                        ...sampleVol,
                        volFour: Number(e.target.value),
                      });
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
                      setSampleVol({
                        ...sampleVol,
                        volFive: Number(e.target.value),
                      });
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
                      setSampleVol({
                        ...sampleVol,
                      });
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
                      setSampleVol({
                        ...sampleVol,
                        volSeven: Number(e.target.value),
                      });
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
                      setSampleVol({
                        ...sampleVol,
                        volEight: Number(e.target.value),
                      });
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
