import React from 'react'
import KeyHandler, { KEYPRESS } from "react-key-handler";


function Sampler() {
  const playSample1 = (e) => {
    e.preventDefault();
    console.log("z pressed!");
  };
  const playSample2 = (e) => {
    e.preventDefault();
    console.log("z pressed!");
  };
  const playSample3 = (e) => {
    e.preventDefault();
    console.log("z pressed!");
  };
  const playSample4 = (e) => {
    e.preventDefault();
    console.log("z pressed!");
  };
  const playSample5 = (e) => {
    e.preventDefault();
    console.log("z pressed!");
  };
  const playSample6 = (e) => {
    e.preventDefault();
    console.log("z pressed!");
  };
  const playSample7 = (e) => {
    e.preventDefault();
    console.log("z pressed!");
  };
  const playSample8 = (e) => {
    e.preventDefault();
    console.log("z pressed!");
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

export default Sampler;
