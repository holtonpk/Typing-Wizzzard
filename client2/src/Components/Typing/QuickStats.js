import React, { useState, useEffect } from "react";
import { RiDashboard3Line } from "react-icons/ri";
const QuickStats = ({
  speed,
  incorrectCharacters,
  characters,
  setAccuracyMain,
  pacerSpeed,
}) => {
  const [accuracy, setAccuracy] = useState("--");

  useEffect(() => {
    setAccuracyMain(accuracy);
    if (characters != 0) {
      setAccuracy(
        Math.round(((characters - incorrectCharacters) / characters) * 100)
      );
    }
  });

  return (
    <>
      <div className="z-30 flex flex-col justify-between ">
        <div className="flex flex-row justify-between gap-10 p-4 mx-auto mt-6 rounded-lg bg-c3 h-fit w-fit">
          <div className="flex flex-col items-center">
            <h1 className="text-lg text-white opacity-60 font-f1">Speed</h1>
            <h1 className="text-lg font-bold text-white font-f1">{speed}</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-lg text-white opacity-60 font-f1">Accuracy</h1>
            <h1 className="text-lg font-bold text-white font-f1">
              {accuracy + "%"}
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-lg text-white opacity-60 font-f1">
              High Score
            </h1>
            <h1 className="text-lg font-bold text-white font-fq">
              {localStorage.getItem("hScore")}
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-4 mx-auto mt-3 w-fit">
          <div className="flex flex-row items-center gap-2">
            <div className="p-1 py-0 rounded-md bg-c8 text-c2">Ctrl</div>
            <div className="rounded-md text-c8">+</div>

            <div className="p-1 py-0 rounded-md bg-c8 text-c2">r</div>
            <div className="rounded-md text-c8">- Restart</div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="p-1 py-0 rounded-md bg-c8 text-c2">Ctrl</div>
            <div className="rounded-md text-c8">+</div>
            <div className="p-1 py-0 rounded-md bg-c8 text-c2">n</div>
            <div className="rounded-md text-c8">- New Set</div>
          </div>
        </div>
        <div
          onClick={() => {
            document.getElementById("pacerMenu").classList.remove("hidden");
          }}
          className="relative flex flex-row items-center gap-2 mx-auto mt-3 cursor-pointer w-fit text-c8 fill-c8 hover:text-white "
        >
          <RiDashboard3Line className="w-8 h-8" />
          <h1 className="text-xl font-f1">
            {(() => {
              if (localStorage.getItem("pacerType") == "pacerOff") {
                return "Pacer off";
              } else {
                return "Pacer : " + pacerSpeed + " wpm";
              }
            })()}
          </h1>
        </div>
      </div>
    </>
  );
};

export default QuickStats;
