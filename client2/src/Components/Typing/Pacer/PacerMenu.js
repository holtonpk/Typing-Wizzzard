import React, { useState, useEffect } from "react";
import { TiArrowSortedUp } from "react-icons/ti";

const PacerMenu = ({ speedResult, setPacerSpeed, restartTyping }) => {
  const [customPacerSpeed, setCustomPacerSpeed] = useState(
    parseInt(localStorage.getItem("customPacerSpeed"))
  );

  useEffect(() => {
    const menuItems = document.getElementsByClassName("pacerMenuItem");
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].id == localStorage.getItem("pacerType")) {
        menuItems[i].classList.add("pacerSelected");
      }
    }
  });

  const editPacerSpeed = (value) => {
    setCustomPacerSpeed(customPacerSpeed + value);
    setPacerSpeed(customPacerSpeed + value);
    localStorage.setItem("customPacerSpeed", customPacerSpeed + value);
  };

  const selectOption = (element) => {
    // applies class to selected menu item && sets local storage
    const menuItems = document.getElementsByClassName("pacerMenuItem");
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("pacerSelected");
    }
    document.getElementById(element).classList.add("pacerSelected");
    localStorage.setItem("pacerType", element);
  };

  return (
    <div
      id="pacerMenu"
      className="fixed top-0 w-screen h-screen z-[110] hidden"
    >
      <button
        className=" w-screen h-screen bg-black opacity-[60%] z-[100] "
        onClick={() => {
          document.getElementById("pacerMenu").classList.add("hidden");
          restartTyping();
        }}
      ></button>
      <div className="absolute top-1/2 py-4 flex flex-col items-start gap-1 z-[110]  w-[500px] left-1/2  -translate-y-1/2 -translate-x-1/2 rounded-lg bg-c2 overflow-hidden ">
        <button
          onClick={() => {
            selectOption("pacerOff");
            setPacerSpeed("--");
          }}
          id="pacerOff"
          className="w-full p-2 pl-10 text-xl font-bold text-left text-c8 hover:text-c1 font-f1 pacerMenuItem"
        >
          Off
        </button>
        <button
          onClick={() => {
            selectOption("pacerCustom");
            setPacerSpeed(customPacerSpeed);
          }}
          id="pacerCustom"
          className="flex flex-row justify-between w-full p-2 pl-10 text-xl font-bold text-left text-c8 hover:text-c1 font-f1 pacerMenuItem"
        >
          Custom Speed
          <div className="flex flex-row items-center gap-2 mr-10 w-fit">
            <TiArrowSortedUp
              onClick={() => {
                editPacerSpeed(-5);
              }}
              className="w-6 h-6 rotate-180 hover:fill-white "
            />
            <h1 className="text-xl  min-w-[40px] text-center">
              {customPacerSpeed}
            </h1>

            <TiArrowSortedUp
              onClick={() => {
                editPacerSpeed(5);
              }}
              className="w-6 h-6 hover:fill-white "
            />
          </div>
        </button>
        <button
          onClick={() => {
            selectOption("pacerPrev");
            setPacerSpeed(speedResult);
          }}
          id="pacerPrev"
          className="w-full p-2 pl-10 text-xl font-bold text-left text-c8 hover:text-c1 font-f1 pacerMenuItem"
        >
          Previous Speed
        </button>
        <button
          onClick={() => {
            selectOption("pacerHigh");
            setPacerSpeed(localStorage.getItem("hSpeed"));
          }}
          id="pacerHigh"
          className="w-full p-2 pl-10 text-xl font-bold text-left text-c8 hover:text-c1 font-f1 pacerMenuItem"
        >
          High Speed
        </button>
      </div>
    </div>
  );
};

export default PacerMenu;
