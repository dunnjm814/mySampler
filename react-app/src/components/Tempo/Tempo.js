import React, { useState, useEffect } from "react";
import { useMixerContext } from "../../context/Mixer";
import './tempo.css'


function Tempo() {
  const { tempo } = useMixerContext();

  return (
    <div id="bpm-wrap">
      <div id="bpm-house">
          <h1 id="bpm-text">{tempo}</h1>
          <h4>Bpm</h4>
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
      </div>
    </div>
  )
}
