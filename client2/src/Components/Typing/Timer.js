import React, { useState, useEffect } from "react";

const Timer = ({
  start,
  seconds,
  setSeconds,
  setSpeed,
  characters,
  correctCharacters,
  setRawSpeed,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [wpmRaw, setWpmRaw] = useState(0);

  const calcWpm = () => {
    let words = Math.round(correctCharacters / 5);
    let rawWords = Math.round(characters / 5);

    if (seconds != 0 && characters != 0) {
      setWpm(Math.round((60 / seconds) * words));
      setWpmRaw(Math.round((60 / seconds) * rawWords));
    }
  };

  useEffect(() => {
    calcWpm();

    if (wpm == 0) {
      setSpeed("--");
    } else {
      setSpeed(wpm);
    }

    if (wpmRaw == 0) {
      setRawSpeed("--");
    } else {
      setRawSpeed(wpmRaw);
    }

    if (start) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        if (seconds == 1) {
          localStorage.setItem("speedMap", JSON.stringify([]));
          localStorage.setItem("speedMapRaw", JSON.stringify([]));
        }
        let storedValues = JSON.parse(localStorage.getItem("speedMap"));
        storedValues.push(correctCharacters);
        localStorage.setItem("speedMap", JSON.stringify(storedValues));
        localStorage.setItem(
          "currentSession",
          parseInt(localStorage.getItem("currentSession")) + 1
        );

        let storedValuesRaw = JSON.parse(localStorage.getItem("speedMapRaw"));
        storedValuesRaw.push(characters);
        localStorage.setItem("speedMapRaw", JSON.stringify(storedValuesRaw));
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, start, wpm]);

  return <></>;
};

export default Timer;
