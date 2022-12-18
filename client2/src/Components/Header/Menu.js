import React, { useEffect } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { BsFillPersonFill, BsFillKeyboardFill } from "react-icons/bs";
const Menu = ({ restartTyping, setSettingsView }) => {
  const openSettings = () => {
    document.getElementById("settings").classList.remove("hidden");
    document.getElementById("settings").classList.add("slide-in-bottom");
    document.getElementById("typingScreen").classList.add("slide-out-top");
    document.getElementById("typingScreen").classList.remove("slide-in-top");
    document.getElementById("scoreContainer").classList.add("fade-out");
    document.getElementById("header").style.height = "2.5rem";
    setSettingsView(true);
  };

  const closeSettings = () => {
    document.getElementById("settings").classList.remove("slide-in-bottom");
    document.getElementById("settings").classList.add("slide-out-bottom");
    document.getElementById("typingScreen").classList.remove("slide-out-top");
    document.getElementById("typingScreen").classList.add("slide-in-top");
    document.getElementById("scoreContainer").classList.remove("fade-out");
    document.getElementById("header").style.height = "10rem";
    setSettingsView(false);
  };

  return (
    <div
      id="menu"
      className="relative flex flex-row items-center gap-10 w-fit "
    >
      <button onClick={closeSettings}>
        <BsFillKeyboardFill className="w-8 h-8 fill-c8 hover:fill-white" />
      </button>
      <button
        onClick={() => {
          openSettings();
          restartTyping();
        }}
      >
        <IoSettingsSharp className="w-8 h-8 fill-c8 hover:fill-white" />
      </button>
    </div>
  );
};

export default Menu;
