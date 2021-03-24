import React, { useCallback, useState, useEffect } from "react";
import * as Tone from "tone";
import './seq.css'
import { CgPlayButtonR } from "react-icons/cg";
import { CgPlayStopR } from "react-icons/cg";
import { useMixerContext } from "../../context/Mixer";
import {keyOptions} from '../../services/scales'

// const notes = [
//   "C#4",
//   "D#4",
//   "F#4",
//   "G#4",
//   "A#4",
//   "C#5",
//   "D#5",
//   "F#5",
// ].reverse();

const initialPattern = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const synth = new Tone.PolySynth().toDestination();

function Sequencer({
  playSample1,
  playSample2,
  playSample3,
  playSample4,
  playSample5,
  playSample6,
  playSample7,
  playSample8,
}) {
  const { tempo } = useMixerContext();
  const [pattern, updatePattern] = useState(initialPattern);
  const [playState, setPlayState] = useState(Tone.Transport.state);
  const [activeColumn, setColumn] = useState(0);
  const [notes, setNotes] = useState([]);

  Tone.Transport.bpm.value = tempo;

  useEffect(
    () => {
      const loop = new Tone.Sequence(
        (time, col) => {
          // Update active column for animation
          setColumn(col);
          // Loop current pattern
          pattern.map((row, noteIndex) => {
            // If active
            if (row[col]) {
              // Play based on which row
              //trigger sample here
              synth.triggerAttackRelease(notes[noteIndex], "8n", time);
            }
            if (row[col] && noteIndex === 0) {
              playSample1();
            }
            if (row[col] && noteIndex === 1) {
              playSample2();
            }
            if (row[col] && noteIndex === 2) {
              playSample3();
            }
            if (row[col] && noteIndex === 3) {
              playSample4();
            }
            if (row[col] && noteIndex === 4) {
              playSample5();
            }
            if (row[col] && noteIndex === 5) {
              playSample6();
            }
            if (row[col] && noteIndex === 6) {
              playSample7();
            }
            if (row[col] && noteIndex === 7) {
              playSample8();
            }
          });
        },
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        "16n"
      ).start(0);
      return () => loop.dispose();
    },
    [pattern, notes] // Retrigger when pattern changes
  );

  // Toggle playing / stopped
  const toggle = useCallback(() => {
    Tone.Transport.toggle();
    setPlayState(Tone.Transport.state);
  }, []);
  // Updates pattern via copy and invert value
  function setPattern({ y, x, value }) {
    const patternCopy = [...pattern];
    patternCopy[y][x] = +!value;
    updatePattern(patternCopy);
  }
  return (
    <div>
      <div className="grid">
        {pattern.map((row, y) => (
          <div key={y} style={{ display: "flex", justifyContent: "center" }}>
            {row.map((value, x) => (
              <Square
                key={x}
                active={activeColumn === x}
                selected={pattern[y][x] === 1 ? "#a8a8a8" : "white"}
                onClick={() => {
                  setPattern({ y, x, value });
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="play-key">
        <div
          className="play-state"
          onClick={() => {
            toggle();
          }}
        >
          {playState === "started" ? (
            <a>
              <CgPlayStopR />
            </a>
          ) : (
            <a>
              <CgPlayButtonR />
            </a>
          )}
        </div>
        <div>
          <label htmlFor="chooseKey" className='key-select-label'>
            Pick a Key:
            <select
              className='key-select'
              name="chooseKey"
              id="chooseKey"
              value={notes}
              onChange={(e) => setNotes(JSON.parse(e.target.value))}
            >
              {keyOptions.map((keyOpt, i) => (
                <>
                  <option key={`key-${i}`} className="key-option" value={JSON.stringify(keyOpt.value)}>
                    {keyOpt.label}
                  </option>
                </>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}

const Square = ({ active, value, onClick, selected}) => {
  return (
    <div
      className={(active && "cell seq-active") || "cell"}
      style={{
        backgroundColor: selected
      }}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Sequencer;
