import React from "react";
import logo from "../../assets/wizard.png";
import Menu from "./Menu.js";
import Score from "../Typing/Score";
const Header = ({ restartTyping, score, setSettingsView }) => {
  return (
    <div id="header" className="mb-10 h-36 ">
      <div className="flex flex-row justify-between h-20 p-5 bg-c3">
        <button
          onClick={() => {
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
            document.getElementById("scoreContainer").classList.add("fade-out");
            document.getElementById("header").style.height = "2.5rem";
            setSettingsView(true);
          }}
          className="flex flex-row items-center gap-3 w-fit"
        >
          <img src={logo} className="w-12 h-12" />
          <h1 className="text-2xl font-bold text-c1 font-f1">Typing Wizard</h1>
        </button>
        <Menu restartTyping={restartTyping} setSettingsView={setSettingsView} />
      </div>
      <Score score={score} />
    </div>
  );
};

export default Header;
