import React, { useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { MdRestartAlt, MdNavigateNext } from "react-icons/md";
import Confetti from "react-confetti";
import ResultsGraph from "../Results/ResultsGraph.js";
const Results = ({
  CreateNewWordSet,
  ShowHighScorePopup,
  restartTyping,
  speed,
  accuracy,
  setTypingWords,
  score,
  characters,
  rawSpeed,
  seconds,
  setSettingsView,
}) => {
  const closeWindow = () => {
    document.getElementById("resultsWindow").classList.add("hidden");
  };

  const keyListener = (event) => {
    if (event.key == "r") {
      restartTyping();
      closeWindow();
    }

    if (event.key == "n") {
      closeWindow();
      setTypingWords([]);
      CreateNewWordSet();
      restartTyping();
    }
  };

  const [averageSpeed, setAverageSpeed] = useState(0);
  useEffect(() => {
    let speeds = JSON.parse(localStorage.getItem("aSpeed"));

    let total = 0;
    for (let i = 0; i < speeds.length; i++) {
      total = total + speeds[i];
    }
    let average = Math.round(total / speeds.length);
    setAverageSpeed(average);

    if (
      !document.getElementById("resultsWindow").classList.contains("hidden")
    ) {
      document.addEventListener("keydown", keyListener);
      return () => document.removeEventListener("keydown", keyListener);
    }
  });

  return (
    <div id="resultsWindow" className=" z-[120] hidden">
      {(() => {
        if (ShowHighScorePopup) {
          return (
            <div id="highScoreWindow" className=" z-[120] absolute hs-confetti">
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                colors={["#FF6920", "#DC4987", "#6236B2", "#F3BB0A", "#3F52FC"]}
              />
            </div>
          );
        }
      })()}

      <button
        onClick={() => {
          closeWindow();
          setTypingWords([]);
          CreateNewWordSet();
          restartTyping();
        }}
        className="w-screen h-[110vh] bg-black z-[100] opacity-70 fixed"
      ></button>

      <div className="absolute left-1/2 top-[50%]  -translate-x-1/2 -translate-y-1/2 h-fit w-[70%] min-w-fit z-[110] bg-c2 p-10 pb-4 rounded-xl fade-inr">
        <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col justify-between ">
              <h1 className="text-2xl font-bold text-white font-f1">Score</h1>
              <h1 className="font-bold text-7xl text-c1 font-f1 whitespace-nowrap">
                {score}
              </h1>
              {(() => {
                if (ShowHighScorePopup == "score") {
                  return (
                    <h1 className="absolute p-1 text-sm font-bold font-f1 text-white rounded-lg left-[120px] bg-c1  high-score">
                      High Score
                    </h1>
                  );
                }
              })()}
            </div>
            <div className="flex flex-col justify-between ">
              <h1 className="text-2xl font-bold text-white font-f1">Wpm</h1>
              <h1 className="font-bold text-7xl text-c1 font-f1 whitespace-nowrap">
                {speed}
              </h1>
              {(() => {
                if (ShowHighScorePopup == "speed") {
                  return (
                    <h1 className="absolute p-10 text-6xl font-bold text-white -translate-x-1/2 rounded-lg font-f1 left-1/2 bg-c1 high-score">
                      High Speed
                    </h1>
                  );
                }
              })()}
              {/* <h1 className="absolute p-10 text-6xl font-bold text-white -translate-x-1/2 rounded-lg font-f1 left-1/2 bg-c1 high-score">
                High Speed
              </h1> */}
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white font-f1">Accuracy</h1>
              <h1 className="text-5xl font-bold text-c1 font-f1">
                {accuracy + "%"}
              </h1>
            </div>
          </div>

          <ResultsGraph seconds={seconds} averageSpeed={averageSpeed} />
        </div>

        <div className="flex flex-row justify-between w-full gap-16 mt-6">
          <div className="flex flex-col ">
            <h1 className="text-base font-bold text-white font-f1 whitespace-nowrap">
              raw
            </h1>
            <h1 className="text-4xl font-bold text-c1 font-f1">{rawSpeed}</h1>
          </div>

          <div className="flex flex-col">
            <h1 className="text-base font-bold text-white font-f1">
              characters
            </h1>
            <h1 className="text-4xl font-bold text-c1 font-f1">{characters}</h1>
          </div>

          <div className="flex flex-col">
            <h1 className="text-base font-bold text-white font-f1">speed pr</h1>
            <h1 className="text-4xl font-bold text-c1 font-f1">
              {localStorage.getItem("hSpeed")}
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold text-white font-f1">
              average speed
            </h1>
            <h1 className="text-4xl font-bold text-c1 font-f1">
              {averageSpeed}
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold text-white font-f1">time</h1>
            <h1 className="text-4xl font-bold text-c1 font-f1">
              {seconds + "s"}
            </h1>
            <h1 className="text-sm font-bold text-c8 font-f1">
              {(() => {
                let totalSeconds = parseInt(
                  localStorage.getItem("currentSession")
                );

                let minutes = 0;
                let hours = 0;
                let seconds = totalSeconds;

                if (seconds / 60 >= 1) {
                  minutes = Math.round(seconds / 60);
                  seconds = seconds % 60;
                }

                if (minutes / 60 >= 1) {
                  hours = Math.round(minutes / 60);
                  minutes = minutes % 60;
                }

                if (minutes.toString().length == 1) {
                  minutes = "0" + minutes.toString();
                }

                if (seconds.toString().length == 1) {
                  seconds = "0" + seconds.toString();
                }

                if (hours.toString().length == 1) {
                  hours = "0" + hours.toString();
                }

                return hours + ":" + minutes + ":" + seconds + " session";
              })()}
            </h1>
          </div>
        </div>

        <div className="flex flex-row gap-6 mx-auto w-fit ">
          <button
            onClick={() => {
              restartTyping();
              closeWindow();
              document.getElementById("settings").classList.remove("hidden");
              document
                .getElementById("settings")
                .classList.add("slide-in-bottom");
              document
                .getElementById("typingScreen")
                .classList.add("slide-out-top");
              document
                .getElementById("typingScreen")
                .classList.remove("slide-in-top");
              document
                .getElementById("scoreContainer")
                .classList.add("fade-out");
              document.getElementById("header").style.height = "2.5rem";
              setSettingsView(true);
            }}
            className="flex flex-row items-center gap-3 p-2 pr-3 text-2xl font-bold text-white font-f1 bg-c6 rounded-xl"
          >
            <IoSettingsSharp className="w-10 h-10 fill-white" />
            Settings
          </button>
          <button
            onClick={() => {
              restartTyping();
              closeWindow();
            }}
            className="flex flex-row items-center gap-3 p-2 pr-3 text-2xl font-bold text-white font-f1 bg-c5 rounded-xl"
          >
            <MdRestartAlt className="w-10 h-10 fill-white" />
            Repeat
          </button>
          <button
            onClick={() => {
              closeWindow();
              setTypingWords([]);
              CreateNewWordSet();
              restartTyping();
            }}
            className="flex flex-row items-center gap-3 p-2 pl-4 text-2xl font-bold text-white font-f1 bg-c1 rounded-xl"
          >
            Next
            <MdNavigateNext className="w-10 h-10 fill-white" />
          </button>
        </div>

        <div className="flex flex-row justify-between gap-4 mx-auto mt-3 w-fit">
          <div className="flex flex-row items-center gap-2">
            <div className="p-1 py-0 rounded-md bg-c8 text-c2">R</div>
            <div className="rounded-md text-c8">- Repeat</div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="p-1 py-0 rounded-md bg-c8 text-c2">N</div>
            <div className="rounded-md text-c8">- Next Set</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
