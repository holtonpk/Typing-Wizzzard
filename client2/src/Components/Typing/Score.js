import React, { useEffect, useState } from "react";
import scoreBg from "../../assets/score.svg";
const Score = ({ score }) => {
  const [prevScore, setPrevScore] = useState(0);

  function incNbrRec(i, endNbr, elt) {
    if (i <= endNbr) {
      elt.innerHTML = i;
      setTimeout(function () {
        incNbrRec(i + 1, endNbr, elt);
      }, 20);
    }
  }

  function decNbrRec(i, endNbr, elt) {
    elt.innerHTML = score;
  }

  useEffect(() => {
    if (score != prevScore) {
      if (score > prevScore) {
        incNbrRec(prevScore, score, document.getElementById("scoreElement"));
      } else {
        decNbrRec(prevScore, score, document.getElementById("scoreElement"));
      }
    }

    setPrevScore(score);
  });

  return (
    <div
      id="scoreContainer"
      className="relative  flex flex-row w-[400px] -top-12  -translate-x-1/2  h-[90px]  left-1/2  mb-10"
    >
      <img
        src={scoreBg}
        className="absolute top-0 left-0 w-full h-full"
        alt=""
      />
      <div className="relative top-0 flex flex-row items-center -translate-x-1/2 w-fit left-1/2 h-fit">
        <div className="w-10 h-10 mr-6 rotate-45 bg-yellow-400 rounded-lg shadow-md"></div>
        <h1
          id="scoreElement"
          className="text-5xl font-bold text-white font-f1 "
        >
          {"--"}
        </h1>
      </div>
    </div>
  );
};

export default Score;
