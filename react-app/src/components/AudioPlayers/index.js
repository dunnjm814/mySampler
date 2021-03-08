import React, {useState} from 'react'
import KeyHandler, { KEYPRESS } from "react-key-handler";
import * as Tone from 'tone'


function AudioPlayers() {
  const [sampleVol, setSampleVol] = useState({
    sampleOne: -6,
    sampleTwo: -20
  })
  const gainOne = new Tone.Volume().toDestination()
  const gainTwo = new Tone.Volume().toDestination()

  const playSample1 = (e) => {
    e.preventDefault();
    gainOne.volume.value = sampleVol.sampleOne
    console.log("z pressed!");
    const synth = new Tone.Synth().chain(gainOne)
    const now = Tone.now();
    synth.triggerAttackRelease("C4", "8n", now);

  };
  const playSample2 = (e) => {
    e.preventDefault();
    gainTwo.volume.value = sampleVol.sampleTwo
    console.log("x pressed!");
    const synth = new Tone.Synth().chain(gainTwo);
    const now = Tone.now();
    synth.triggerAttackRelease("G4", "8n", now);
  };
  const playSample3 = (e) => {
    e.preventDefault();
    console.log("c pressed!");
  };
  const playSample4 = (e) => {
    e.preventDefault();
    console.log("v pressed!");
  };
  const playSample5 = (e) => {
    e.preventDefault();
    console.log("a pressed!");
  };
  const playSample6 = (e) => {
    e.preventDefault();
    console.log("s pressed!");
  };
  const playSample7 = (e) => {
    e.preventDefault();
    console.log("d pressed!");
  };
  const playSample8 = (e) => {
    e.preventDefault();
    console.log("f pressed!");
  };

  return (
    <>
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="z"
        onKeyHandle={playSample1}
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="x"
        onKeyHandle={playSample2}
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="c"
        onKeyHandle={playSample3}
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="v"
        onKeyHandle={playSample4}
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="a"
        onKeyHandle={playSample5}
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="s"
        onKeyHandle={playSample6}
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="d"
        onKeyHandle={playSample7}
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="f"
        onKeyHandle={playSample8}
      />
    </>
  );
}

export default AudioPlayers;
