import React, { useState, useRef, useEffect} from "react";
import KeyHandler, { KEYPRESS } from "react-key-handler";
import * as Tone from "tone";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useMixerContext } from "../../context/Mixer";
import Sequencer from "../Sequencer";

function AudioPlayers() {
  const { samplerId } = useParams();
  const { sampleVol } = useMixerContext();

  const [loaded, setLoaded] = useState(false);

  const [volumeOne, setVolumeOne] = useState(sampleVol.volOne);
  const [volumeTwo, setVolumeTwo] = useState(sampleVol.volTwo);
  const [volumeThree, setVolumeThree] = useState(sampleVol.volThree);
  const [volumeFour, setVolumeFour] = useState(sampleVol.volFour);
  const [volumeFive, setVolumeFive] = useState(sampleVol.volFive);
  const [volumeSix, setVolumeSix] = useState(sampleVol.volSix);
  const [volumeSeven, setVolumeSeven] = useState(sampleVol.volSeven);
  const [volumeEight, setVolumeEight] = useState(sampleVol.volEight);

  const incomingSamples = useSelector((state) => state.sampler.sampler);

  let sampleRefOne = useRef()
  let sampleRefTwo = useRef();
  let sampleRefThree = useRef();
  let sampleRefFour = useRef();
  let sampleRefFive = useRef();
  let sampleRefSix = useRef();
  let sampleRefSeven = useRef();
  let sampleRefEight = useRef();

  let sampler1;
  let sampler2;
  let sampler3;
  let sampler4;
  let sampler5;
  let sampler6;
  let sampler7;
  let sampler8;

  let gainOne = new Tone.Volume().toDestination();
  let gainTwo = new Tone.Volume().toDestination();
  let gainThree = new Tone.Volume().toDestination();
  let gainFour = new Tone.Volume().toDestination();
  let gainFive = new Tone.Volume().toDestination();
  let gainSix = new Tone.Volume().toDestination();
  let gainSeven = new Tone.Volume().toDestination();
  let gainEight = new Tone.Volume().toDestination();

  gainOne.volume.value = volumeOne;
  gainTwo.volume.value = volumeTwo;
  gainThree.volume.value = volumeThree;
  gainFour.volume.value = volumeFour;
  gainFive.volume.value = volumeFive;
  gainSix.volume.value = volumeSix;
  gainSeven.volume.value = volumeSeven;
  gainEight.volume.value = volumeEight;


  // when samplerId changes reload
  useEffect(() => {
    setLoaded(true);

  }, [samplerId, incomingSamples]);



  // incoming sample load triggers
  useEffect(() => {
    if (incomingSamples && loaded) {
      sampleRefOne.current = incomingSamples.sampleOne
      sampleRefTwo.current = incomingSamples.sampleTwo
      sampleRefThree.current = incomingSamples.sampleThree
      sampleRefFour.current = incomingSamples.sampleFour
      sampleRefFive.current = incomingSamples.sampleFive
      sampleRefSix.current = incomingSamples.sampleSix
      sampleRefSeven.current = incomingSamples.sampleSeven
      sampleRefEight.current = incomingSamples.sampleEight
    }
  }, [
    incomingSamples, loaded, samplerId
  ]);

  // volume slider triggers
  useEffect(() => {
    if (sampleVol && loaded) {
      return () => {
        sampler1.disconnect(gainOne);
        gainOne.dispose();
        gainOne = new Tone.Volume().toDestination();
        setVolumeOne(sampleVol.volOne);
        gainOne.volume.value = volumeOne
        sampler1.connect(gainOne);
      };
    }
  }, [sampleVol.volOne, loaded]);
  useEffect(() => {
    if (sampleVol && loaded) {
      return () => {
        sampler2.disconnect(gainTwo);
        gainTwo.dispose();
        gainTwo = new Tone.Volume().toDestination();
        setVolumeTwo(sampleVol.volTwo);
        gainTwo.volume.value = volumeTwo;
        sampler2.connect(gainTwo);
      };
    }
  }, [sampleVol.volTwo, loaded]);
  useEffect(() => {
    if (sampleVol && loaded) {
      return () => {
        sampler3.disconnect(gainThree);
        gainThree.dispose();
        gainThree = new Tone.Volume().toDestination();
        setVolumeThree(sampleVol.volThree);
        gainThree.volume.value = volumeThree;
        sampler3.connect(gainThree);
      };
    }
  }, [sampleVol.volThree, loaded]);
  useEffect(() => {
    if (sampleVol && loaded) {
      return () => {
        sampler4.disconnect(gainFour);
        gainFour.dispose();
        gainFour = new Tone.Volume().toDestination();
        setVolumeFour(sampleVol.volFour);
        gainFour.volume.value = volumeFour;
        sampler4.connect(gainFour);
      };
    }
  }, [sampleVol.volFour, loaded]);
  useEffect(() => {
    if (sampleVol && loaded) {
      return () => {
        sampler5.disconnect(gainFive);
        gainFive.dispose();
        gainFive = new Tone.Volume().toDestination();
        setVolumeFive(sampleVol.volFive);
        gainFive.volume.value = volumeFive;
        sampler5.connect(gainFive);
      };
    }
  }, [sampleVol.volFive, loaded]);
  useEffect(() => {
    if (sampleVol && loaded) {
      return () => {
        sampler6.disconnect(gainSix);
        gainSix.dispose();
        gainSix = new Tone.Volume().toDestination();
        setVolumeSix(sampleVol.volSix);
        gainSix.volume.value = volumeSix;
        sampler6.connect(gainSix);
      };
    }
  }, [sampleVol.volSix, loaded]);
  useEffect(() => {
    if (sampleVol && loaded) {
      return () => {
        sampler7.disconnect(gainSeven);
        gainSeven.dispose();
        gainSeven = new Tone.Volume().toDestination();
        setVolumeSeven(sampleVol.volSeven);
        gainSeven.volume.value = volumeSeven;
        sampler7.connect(gainSeven);
      };
    }
  }, [sampleVol.volSeven, loaded]);
  useEffect(() => {
    if (sampleVol && loaded) {
      return () => {
        sampler8.disconnect(gainEight);
        gainEight.dispose();
        gainEight = new Tone.Volume().toDestination();
        setVolumeEight(sampleVol.volEight);
        gainEight.volume.value = volumeEight;
        sampler8.connect(gainEight);
      };
    }
  }, [sampleVol.volEight, loaded]);

  //delay effect change triggers

  sampler1 = new Tone.Player(sampleRefOne.current).connect(gainOne);
  sampler2 = new Tone.Player(sampleRefTwo.current).connect(gainTwo);
  sampler3 = new Tone.Player(sampleRefThree.current).connect(gainThree);
  sampler4 = new Tone.Player(sampleRefFour.current).connect(gainFour);
  sampler5 = new Tone.Player(sampleRefFive.current).connect(gainFive);
  sampler6 = new Tone.Player(sampleRefSix.current).connect(gainSix);
  sampler7 = new Tone.Player(sampleRefSeven.current).connect(gainSeven);
  sampler8 = new Tone.Player(sampleRefEight.current).connect(gainEight);
  const playSample1 = () => {
    Tone.loaded().then(() => {
      if (sampleRefOne.current) {
        sampler1.stop();
        sampler1.start();
      }
    });
  };
  const playSample2 = () => {
    Tone.loaded().then(() => {
      if (sampleRefTwo.current) {
        sampler2.stop();
        sampler2.start();
      }
    });
  };
  const playSample3 = () => {
    Tone.loaded().then(() => {
      if (sampleRefThree.current) {
        sampler3.stop();
        sampler3.start();
      }
    });
  };
  const playSample4 = () => {
    Tone.loaded().then(() => {
      if (sampleRefFour.current) {
        sampler4.stop();
        sampler4.start();
      }
    });
  };
  const playSample5 = () => {
    Tone.loaded().then(() => {
      if (sampleRefFive.current) {
        sampler5.stop();
        sampler5.start();
      }
    });
  };
  const playSample6 = () => {
    Tone.loaded().then(() => {
      if (sampleRefSix.current) {
        sampler6.stop();
        sampler6.start();
      }
    });
  };
  const playSample7 = () => {
    Tone.loaded().then(() => {
      if (sampleRefSeven.current) {
        sampler7.stop();
        sampler7.start();
      }
    });
  };
  const playSample8 = () => {
    Tone.loaded().then(() => {
      if (sampleRefEight.current) {
        sampler8.stop();
        sampler8.start();
      }
    });
  };

  return (
    <>
      <div style={{ display: "none" }}>
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
      </div>
      <Sequencer
        playSample1={playSample1}
        playSample2={playSample2}
        playSample3={playSample3}
        playSample4={playSample4}
        playSample5={playSample5}
        playSample6={playSample6}
        playSample7={playSample7}
        playSample8={playSample8}
      />
    </>
  );
}

export default AudioPlayers;
