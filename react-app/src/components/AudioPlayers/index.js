import React, { useState, useEffect } from "react";
import KeyHandler, { KEYPRESS } from "react-key-handler";
import * as Tone from "tone";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useMixerContext } from "../../context/Mixer";

function AudioPlayers() {
  const { samplerId } = useParams();
  const { sampleVol, mainOut, delaySends } = useMixerContext();

  const [loaded, setLoaded] = useState(false);
  const [sampleOne, setSampleOne] = useState("");
  const [sampleTwo, setSampleTwo] = useState("");
  const [sampleThree, setSampleThree] = useState("");
  const [sampleFour, setSampleFour] = useState("");
  const [sampleFive, setSampleFive] = useState("");
  const [sampleSix, setSampleSix] = useState("");
  const [sampleSeven, setSampleSeven] = useState("");
  const [sampleEight, setSampleEight] = useState("");

  const [volumeOne, setVolumeOne] = useState(sampleVol.volOne);
  const [volumeTwo, setVolumeTwo] = useState(sampleVol.volTwo);
  const [volumeThree, setVolumeThree] = useState(sampleVol.volThree);
  const [volumeFour, setVolumeFour] = useState(sampleVol.volFour);
  const [volumeFive, setVolumeFive] = useState(sampleVol.volFive);
  const [volumeSix, setVolumeSix] = useState(sampleVol.volSix);
  const [volumeSeven, setVolumeSeven] = useState(sampleVol.volSeven);
  const [volumeEight, setVolumeEight] = useState(sampleVol.volEight);

  const [delayDryWetOne, setDelayDryWetOne] = useState(delaySends.delayWetOne);

  const [mainVolumeOut, setMainVolumeOut] = useState(mainOut.mainVol);
  const [mainLowpass, setMainLowpass] = useState(mainOut.filter);
  const [mainVibe, setMainVibe] = useState(mainOut.vibeMain);
  // const [mainCrushed, setMainCrushed] = useState(mainOut.crushed)

  const incomingSamples = useSelector((state) => state.sampler.sampler);

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
  }, [samplerId]);

  // incoming sample load triggers
  useEffect(() => {
    if (incomingSamples && loaded) {
      console.log(incomingSamples);
      setSampleOne(incomingSamples.sampleOne);
      setSampleTwo(incomingSamples.sampleTwo);
      setSampleThree(incomingSamples.sampleThree);
      setSampleFour(incomingSamples.sampleFour);
      setSampleFive(incomingSamples.sampleFive);
      setSampleSix(incomingSamples.sampleSix);
      setSampleSeven(incomingSamples.sampleSeven);
      setSampleEight(incomingSamples.sampleEight);
    }
  }, [
    incomingSamples,
    loaded,
    sampleOne,
    sampleTwo,
    sampleThree,
    sampleFour,
    sampleFive,
    sampleSix,
    sampleSeven,
    sampleEight,
  ]);

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
  // useEffect(() => {
  //   if (sampleVol && loaded) {
  //     return () => {
  //       // setVolumeOne(sampleVol.volOne);
  //       // setVolumeTwo(sampleVol.volTwo);
  //       // setVolumeThree(sampleVol.volThree);
  //       // setVolumeFour(sampleVol.volFour);
  //       // setVolumeFive(sampleVol.volFive)5
  //       // setVolumeSix(sampleVol.volSix);
  //       // setVolumeSeven(sampleVol.volSeven);
  //       // setVolumeEight(sampleVol.volEight);
  //     };
  //   }
  // }, [sampleVol, loaded]);

  //delay effect change triggers
  useEffect(() => {
    if (delaySends && loaded) {
      setDelayDryWetOne(delaySends.delayWetOne);
    }
  }, [delaySends, loaded]);

  // main out effect triggers
  useEffect(() => {
    if (mainOut && loaded) {
      setMainVolumeOut(mainOut.mainVol);
      setMainLowpass(mainOut.filter);
      setMainVibe(mainOut.vibeMain);
      // setMainCrushed(mainOut.crushed);
    }
  }, [mainOut, loaded]);

  // main output
  const masterVol = new Tone.Volume();
  masterVol.volume.value = mainVolumeOut;
  // const lowpass = new Tone.Filter(mainLowpass, "lowpass");
  // const vibrato = new Tone.Vibrato(mainVibe, 0.3);

  // const delayOne = new Tone.FeedbackDelay(.1, .5)
  Tone.Destination.chain(masterVol);

  sampler1 = new Tone.Player(sampleOne).connect(gainOne);
  sampler2 = new Tone.Player(sampleTwo).connect(gainTwo);
  sampler3 = new Tone.Player(sampleThree).connect(gainThree);
  sampler4 = new Tone.Player(sampleFour).connect(gainFour);
  sampler5 = new Tone.Player(sampleFive).connect(gainFive);
  sampler6 = new Tone.Player(sampleSix).connect(gainSix);
  sampler7 = new Tone.Player(sampleSeven).connect(gainSeven);
  sampler8 = new Tone.Player(sampleEight).connect(gainEight);

  const playSample1 = (e) => {
    e.preventDefault();
    Tone.loaded().then(() => {
      sampler1.stop();
      sampler1.start();
    });
  };
  const playSample2 = (e) => {
    e.preventDefault();
    Tone.loaded().then(() => {
      sampler2.stop();
      sampler2.start();
    });
  };
  const playSample3 = (e) => {
    e.preventDefault();
    Tone.loaded().then(() => {
      sampler3.stop();
      sampler3.start();
    });
  };
  const playSample4 = (e) => {
    e.preventDefault();
    Tone.loaded().then(() => {
      sampler4.stop();
      sampler4.start();
    });
  };
  const playSample5 = (e) => {
    e.preventDefault();
    Tone.loaded().then(() => {
      sampler5.stop();
      sampler5.start();
    });
  };
  const playSample6 = (e) => {
    e.preventDefault();
    Tone.loaded().then(() => {
      sampler6.stop();
      sampler6.start();
    });
  };
  const playSample7 = (e) => {
    e.preventDefault();
    Tone.loaded().then(() => {
      sampler7.stop();
      sampler7.start();
    });
  };
  const playSample8 = (e) => {
    e.preventDefault();
    Tone.loaded().then(() => {
      sampler7.stop();
      sampler7.start();
    });
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
