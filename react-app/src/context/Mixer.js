import React, { createContext, useContext, useState } from "react";

const MixerContext = createContext();

export const useMixerContext = () => useContext(MixerContext)

const MixerProvider = ({ children }) => {

  const [tempo, setTempo] = useState(120);

  const [sampleVol, setSampleVol] = useState({
    volOne: -3,
    volTwo: -3,
    volThree: -3,
    volFour: -3,
    volFive: -3,
    volSix: -3,
    volSeven: -3,
    volEight: -3,
  });

  const [mainOut, setMainOut] = useState({
    mainVol: -3,
    filter: 24000,
    vibeMain: 0,
    // crushed: 16
  })

  const [delaySends, setDelaySends] = useState({
    delayWetOne: 0,
  })

  return (
    <MixerContext.Provider
      value={{
        sampleVol,
        setSampleVol,
        mainOut,
        setMainOut,
        delaySends,
        setDelaySends,
        tempo,
        setTempo,
      }}
    >
      {children}
    </MixerContext.Provider>
  );
}
export default MixerProvider
