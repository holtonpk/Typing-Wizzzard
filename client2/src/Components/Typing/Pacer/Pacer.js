import React, { useEffect } from "react";

const Pacer = ({
  pacerLine,
  setPacerLine,
  setStartPacer,
  typingWords,
  pacerSpeed,
  startPacer,
}) => {
  const calculateSpeed = () => {
    let length = 0;
    for (let i = 0; i < typingWords[pacerLine].length; i++) {
      length = length + typingWords[pacerLine][i].length + 1;
    }
    let wordsPerLine = length / 5;
    let wordsPerSecond = pacerSpeed / 60;
    let speed = wordsPerLine / wordsPerSecond;
    return speed;
  };

  const remove = () => {
    document.getElementById("Pacer" + pacerLine).classList.add("hidden");
    if (pacerLine + 1 > Object.keys(typingWords).length - 1) {
      setStartPacer(false);
      setPacerLine(0);
    } else {
      setPacerLine(pacerLine + 1);
    }
  };

  useEffect(() => {
    if (startPacer && pacerSpeed != undefined) {
      let pacerElement = document.getElementById("Pacer" + pacerLine);
      pacerElement.style.animationDuration = calculateSpeed() + "s";
      pacerElement.classList.remove("hidden");
      pacerElement.addEventListener("animationend", remove);
      return () => pacerElement.removeEventListener("animationend", remove);
    }
  }, [startPacer, pacerLine]);

  return <></>;
};

export default Pacer;
