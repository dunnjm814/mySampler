import React, { useState , useEffect} from "react";
import { Knob } from "react-rotary-knob";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { receiveSamples } from '../../store/samples'
import { getSampler, deleteSampler } from '../../store/sampler'
import "./sampler.css";

function Sampler() {
  const { samplerId } = useParams()
  const dispatch = useDispatch();
  const history = useHistory();

    useEffect(() => {
      dispatch(getSampler(samplerId))
    },[samplerId])

  const sessionUser = useSelector((state) => state.session.user);
  const samplerState = useSelector((state) => {
    console.log("incoming sampler state", state);
    return state.sampler;
  });

  console.log("yay userState", sessionUser)

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

  useEffect(() => {
    const userId = sessionUser.id
    // change to userSampler.id
    if (
      Object.values(samples).every((sample) => {
          return sample === ''
        })
      ) return
        const sendData = {
          userId,
          samples
        };
      dispatch(receiveSamples(sendData))
  }, [samples])


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

  return (
    <div id="sampler-show-wrap">

    {<div id="sampler-credentials">
        <h2>{samplerState.title}</h2><button type='delete' onClick={destroySampler}>Delete?</button>
      </div>}
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
                    onChange={(e) =>
                      setSamples({ ...samples, sampleOne: e.target.files[0] })
                    }
                  ></input>
                </label>
              </form>
              <form id="sample-submit">
                <label className="sample-load">
                  2
                  <input
                    type="file"
                    onChange={(e) =>
                      setSamples({ ...samples, sampleTwo: e.target.files[0] })
                    }
                  ></input>
                </label>
              </form>
              <form id="sample-submit">
                <label className="sample-load">
                  3
                  <input
                    type="file"
                    onChange={(e) =>
                      setSamples({ ...samples, sampleThree: e.target.files[0] })
                    }
                  ></input>
                </label>
              </form>
              <form id="sample-submit">
                <label className="sample-load">
                  4
                  <input
                    type="file"
                    onChange={(e) =>
                      setSamples({ ...samples, sampleFour: e.target.files[0] })
                    }
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
                    onChange={(e) =>
                      setSamples({ ...samples, sampleFive: e.target.files[0] })
                    }
                  ></input>
                </label>
              </form>
              <form id="sample-submit">
                <label className="sample-load">
                  6
                  <input
                    type="file"
                    onChange={(e) =>
                      setSamples({ ...samples, sampleSix: e.target.files[0] })
                    }
                  ></input>
                </label>
              </form>
              <form id="sample-submit">
                <label className="sample-load">
                  7
                  <input
                    type="file"
                    onChange={(e) =>
                      setSamples({ ...samples, sampleSeven: e.target.files[0] })
                    }
                  ></input>
                </label>
              </form>
              <form id="sample-submit">
                <label className="sample-load">
                  8
                  <input
                    type="file"
                    name="sample8"
                    onChange={(e) =>
                      setSamples({ ...samples, sampleEight: e.target.files[0] })
                    }
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
export default Sampler;
