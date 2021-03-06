import React, {useState, useEffect} from 'react'
import KeyHandler, { KEYPRESS } from "react-key-handler";
import * as Tone from 'tone'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {useMixerContext} from '../../context/Mixer'


function AudioPlayers() {
  const { samplerId } = useParams()
  const { sampleVol } = useMixerContext()
  console.log('sampleVol from audio players', sampleVol)
 
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

  const incomingSamples = useSelector((state) => state.sampler.sampler)

  useEffect(() => {
    setLoaded(true)
  },[samplerId])

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

  useEffect(() => {
    if (sampleVol && loaded) {
      setVolumeOne(sampleVol.volOne);
      setVolumeTwo(sampleVol.volTwo);
      setVolumeThree(sampleVol.volThree);
      setVolumeFour(sampleVol.volFour);
      setVolumeFive(sampleVol.volFive);
      setVolumeSix(sampleVol.volSix);
      setVolumeSeven(sampleVol.volSeven);
      setVolumeEight(sampleVol.volEight);
    }
  }, [sampleVol])

  const gainOne = new Tone.Volume().toDestination()
  const gainTwo = new Tone.Volume().toDestination()
  const gainThree = new Tone.Volume().toDestination()
  const gainFour = new Tone.Volume().toDestination()
  const gainFive = new Tone.Volume().toDestination()
  const gainSix = new Tone.Volume().toDestination()
  const gainSeven = new Tone.Volume().toDestination()
  const gainEight = new Tone.Volume().toDestination()

  const playSample1 = (e) => {
    e.preventDefault();
    console.log("a pressed!");
    gainOne.volume.value = volumeOne;
    const sampler1 = new Tone.Player(sampleOne, () => {
      sampler1.start()
      console.log(sampler1.state)
    }
    ).connect(gainOne)
  };
  const playSample2 = (e) => {
    e.preventDefault();
    console.log("s pressed!");
    gainTwo.volume.value = volumeTwo;
    const sampler2 = new Tone.Player(sampleTwo, () => {
      sampler2.start();
      console.log(sampler2.state);
    }).connect(gainTwo);
  };
  const playSample3 = (e) => {
    e.preventDefault();
    console.log("d pressed!");
    gainThree.volume.value = volumeThree;
    const sampler3 = new Tone.Player(sampleThree, () => {
      sampler3.start();
      console.log(sampler3.state);
    }).connect(gainThree);
  };
  const playSample4 = (e) => {
    e.preventDefault();
    console.log("f pressed!");
    gainFour.volume.value = volumeFour;
    const sampler4 = new Tone.Player(sampleFour, () => {
      sampler4.start();
      console.log(sampler4.state);
    }).connect(gainFour);
  };
  const playSample5 = (e) => {
    e.preventDefault();
    console.log("z pressed!");
    gainFive.volume.value = volumeFive;
    const sampler5 = new Tone.Player(sampleFive, () => {
      sampler5.start();
      console.log(sampler5.state);
    }).connect(gainFive);
  };
  const playSample6 = (e) => {
    e.preventDefault();
    console.log("x pressed!");
    gainSix.volume.value = volumeSix;
    const sampler6 = new Tone.Player(sampleSix, () => {
      sampler6.start();
      console.log(sampler6.state);
    }).connect(gainSix);
  };
  const playSample7 = (e) => {
    e.preventDefault();
    console.log("c pressed!");
    gainSeven.volume.value = volumeSeven;
    const sampler7 = new Tone.Player(sampleSeven, () => {
      sampler7.start();
      console.log(sampler7.state);
    }).connect(gainSeven);
  };
  const playSample8 = (e) => {
    e.preventDefault();
    console.log("v pressed!");
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
    </>
  );
}

export default AudioPlayers;
