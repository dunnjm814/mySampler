import React, { createContext, useContext, useState } from "react";

const MixerContext = createContext();

export const useMixerContext = () => useContext(MixerContext)

const MixerProvider = ({ children }) => {
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

  return(
    <MixerContext.Provider value={{ sampleVol, setSampleVol}}>
      {children}
    </MixerContext.Provider>
  )
}
export default MixerProvider
