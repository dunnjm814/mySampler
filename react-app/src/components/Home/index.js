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

  const [samples, setSamples] = useState({
    sample1: '',
    sample2:'',
    sample3:'',
    sample4:'',
    sample5:'',
    sample6:'',
    sample7:'',
    sample8:'',
  });

  useEffect(() => {
    const userId = sessionUser.id
    if (
      Object.values(samples).every((sample) => {
          return sample === ''
        })
      ) return
        const sendData = {
          userId,
          ...samples
        };

      dispatch(receiveSamples(sendData))

  }, [samples])


  const slideTempo = (e) => {
    setTempo(e.target.value);
  };
  return (
    <div id="home-wrap">
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
                      setSamples({ ...samples, sample1: e.target.files[0] })
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
                      setSamples({ ...samples, sample2: e.target.files[0] })
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
                      setSamples({ ...samples, sample3: e.target.files[0] })
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
                      setSamples({ ...samples, sample4: e.target.files[0] })
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
                      setSamples({ ...samples, sample5: e.target.files[0] })
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
                      setSamples({ ...samples, sample6: e.target.files[0] })
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
                      setSamples({ ...samples, sample7: e.target.files[0] })
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
                      setSamples({ ...samples, sample8: e.target.files[0] })
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
export default Home;
