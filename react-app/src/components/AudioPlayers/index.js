import React, {useState, useEffect} from 'react'
import KeyHandler, { KEYPRESS } from "react-key-handler";
import * as Tone from 'tone'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {useMixerContext} from '../../context/Mixer'


function AudioPlayers() {
  const { samplerId } = useParams()
  const { sampleVol, mainOut, delaySends} = useMixerContext()

  const [loaded, setLoaded] = useState(false);
  const [sampleOne, setSampleOne] = useState('')
  const [sampleTwo, setSampleTwo] = useState('')
  const [sampleThree, setSampleThree] = useState('')
  const [sampleFour, setSampleFour] = useState('')
  const [sampleFive, setSampleFive] = useState('')
  const [sampleSix, setSampleSix] = useState('')
  const [sampleSeven, setSampleSeven] = useState('')
  const [sampleEight, setSampleEight] = useState('')

  const [volumeOne, setVolumeOne] = useState(sampleVol.volOne);
  const [volumeTwo, setVolumeTwo] = useState(sampleVol.volTwo);
  const [volumeThree, setVolumeThree] = useState(sampleVol.volThree);
  const [volumeFour, setVolumeFour] = useState(sampleVol.volFour);
  const [volumeFive, setVolumeFive] = useState(sampleVol.volFive);
  const [volumeSix, setVolumeSix] = useState(sampleVol.volSix);
  const [volumeSeven, setVolumeSeven] = useState(sampleVol.volSeven);
  const [volumeEight, setVolumeEight] = useState(sampleVol.volEight);

  const [delayDryWetOne, setDelayDryWetOne] = useState(delaySends.delayWetOne)

  const [mainVolumeOut, setMainVolumeOut] = useState(mainOut.mainVol)
  const [mainLowpass, setMainLowpass] = useState(mainOut.filter)
  const [mainVibe, setMainVibe] = useState(mainOut.vibeMain)
  // const [mainCrushed, setMainCrushed] = useState(mainOut.crushed)

  const incomingSamples = useSelector((state) => state.sampler.sampler)

  let sampler1
  let gainOne
  gainOne = new Tone.Volume().toDestination();
  gainOne.volume.value = volumeOne;

  // when samplerId changes reload
  useEffect(() => {
    setLoaded(true)
  },[samplerId])

  // incoming sample load triggers
  useEffect(() => {
    if (incomingSamples && loaded) {
      console.log(incomingSamples)
      setSampleOne(incomingSamples.sampleOne)
      setSampleTwo(incomingSamples.sampleTwo)
      setSampleThree(incomingSamples.sampleThree)
      setSampleFour(incomingSamples.sampleFour)
      setSampleFive(incomingSamples.sampleFive)
      setSampleSix(incomingSamples.sampleSix)
      setSampleSeven(incomingSamples.sampleSeven)
      setSampleEight(incomingSamples.sampleEight)
    }
  }, [incomingSamples, loaded, sampleOne, sampleTwo, sampleThree, sampleFour, sampleFive, sampleSix, sampleSeven, sampleEight])

  // volume slider triggers
  useEffect(() => {
    if (sampleVol && loaded) {
      return () => {
        sampler1.disconnect(gainOne);
        gainOne.dispose();
        gainOne = new Tone.Volume().toDestination();
        setVolumeOne(sampleVol.volOne);
        gainOne.volume.value = volumeOne;
        sampler1.connect(gainOne);

      }
    }
  }, [sampleVol.volOne, loaded]);
  useEffect(() => {
    if (sampleVol && loaded) {
      return () => {
        // setVolumeOne(sampleVol.volOne);
        setVolumeTwo(sampleVol.volTwo);
        setVolumeThree(sampleVol.volThree);
        setVolumeFour(sampleVol.volFour);
        setVolumeFive(sampleVol.volFive);
        setVolumeSix(sampleVol.volSix);
        setVolumeSeven(sampleVol.volSeven);
        setVolumeEight(sampleVol.volEight);
      }
    }
  }, [sampleVol, loaded])

  //delay effect change triggers
  useEffect(() => {
    if (delaySends && loaded) {
      setDelayDryWetOne(delaySends.delayWetOne)
    }
  }, [delaySends, loaded])

  // main out effect triggers
  useEffect(() => {
    if (mainOut && loaded) {
      setMainVolumeOut(mainOut.mainVol);
      setMainLowpass(mainOut.filter);
      setMainVibe(mainOut.vibeMain);
      // setMainCrushed(mainOut.crushed);
    }
  }, [mainOut, loaded])

  // main output
  const masterVol = new Tone.Volume()
  masterVol.volume.value = mainVolumeOut;
  // const lowpass = new Tone.Filter(mainLowpass, "lowpass");
  // const vibrato = new Tone.Vibrato(mainVibe, 0.3);

  // const delayOne = new Tone.FeedbackDelay(.1, .5)
  Tone.Destination.chain(masterVol)

  sampler1 = new Tone.Player(sampleOne, () => {
    console.log('sampleOne', sampler1.state);
    // sampler1.start()
  } // chain delay, reverb into gain control, out to main Out
  ).chain(gainOne)
  const playSample1 = (e) => {
    e.preventDefault();
    sampler1.start()
    // delayOne.wet.value = delayDryWetOne;
  };
  const playSample2 = (e) => {
    e.preventDefault();
    const gainTwo = new Tone.Volume().toDestination();
    gainTwo.volume.value = volumeTwo;
    const sampler2 = new Tone.Player(sampleTwo, () => {
      sampler2.start();
      console.log(sampler2.state);
    }).connect(gainTwo);
  };
  const playSample3 = (e) => {
    e.preventDefault();
    const gainThree = new Tone.Volume().toDestination();
    gainThree.volume.value = volumeThree;
    const sampler3 = new Tone.Player(sampleThree, () => {
      sampler3.start();
      console.log(sampler3.state);
    }).connect(gainThree);
  };
  const playSample4 = (e) => {
    e.preventDefault();
    const gainFour = new Tone.Volume().toDestination();
    gainFour.volume.value = volumeFour;
    const sampler4 = new Tone.Player(sampleFour, () => {
      sampler4.start();
      console.log(sampler4.state);
    }).connect(gainFour);
  };
  const playSample5 = (e) => {
    e.preventDefault();
    const gainFive = new Tone.Volume().toDestination();
    gainFive.volume.value = volumeFive;
    const sampler5 = new Tone.Player(sampleFive, () => {
      sampler5.start();
      console.log(sampler5.state);
    }).connect(gainFive);
  };
  const playSample6 = (e) => {
    e.preventDefault();
    const gainSix = new Tone.Volume().toDestination();
    gainSix.volume.value = volumeSix;
    const sampler6 = new Tone.Player(sampleSix, () => {
      sampler6.start();
      console.log(sampler6.state);
    }).connect(gainSix);
  };
  const playSample7 = (e) => {
    e.preventDefault();
    const gainSeven = new Tone.Volume().toDestination();
    gainSeven.volume.value = volumeSeven;
    const sampler7 = new Tone.Player(sampleSeven, () => {
      sampler7.start();
      console.log(sampler7.state);
    }).connect(gainSeven);
  };
  const playSample8 = (e) => {
    e.preventDefault();
    const gainEight = new Tone.Volume().toDestination();
    gainEight.volume.value = volumeEight;
    const sampler8 = new Tone.Player(sampleEight, () => {
      sampler8.start();
      console.log(sampler8.state);
    }).connect(gainEight);
  };

  return (
    <>
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="z"
        onKeyHandle={playSample5}
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="x"
        onKeyHandle={playSample6}
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="c"
        onKeyHandle={playSample7}
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="v"
        onKeyHandle={playSample8}
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="a"
        onKeyHandle={playSample1}
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="s"
        onKeyHandle={playSample2}
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="d"
        onKeyHandle={playSample3}
      />
      <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="f"
        onKeyHandle={playSample4}
      />
      {/* <KeyHandler
        keyEventName={KEYPRESS}
        keyValue="p"
        onKeyHandle={togglePlay}
      /> */}
    </>
  );
}

export default AudioPlayers;
