import React, { useEffect, useState } from "react";
import SettingsSelector from "./SettingsSelector.js";
const Settings = ({
  CreateNewWordSet,
  restartTyping,
  configLocalStorageSettings,
}) => {
  const [maxCharactersLocal, setMaxCharactersLocal] = useState(
    localStorage.getItem("maxCharacters")
  );
  const [setSlider, setSetSlider] = useState(false);

  useEffect(() => {
    if (!setSlider) {
      document.getElementById("totalCharacterSlider").value =
        localStorage.getItem("maxCharacters");
      document
        .getElementById(localStorage.getItem("cursorType"))
        .classList.add("buttonSelected");
      document
        .getElementById(localStorage.getItem("showKeyboard"))
        .classList.add("buttonSelected");
      document
        .getElementById(localStorage.getItem("showResults"))
        .classList.add("buttonSelected");
      document
        .getElementById(localStorage.getItem("keyboardAnimation"))
        .classList.add("buttonSelected");
      setSetSlider(true);
    }
    var slider = document.getElementById("totalCharacterSlider");
    var output = document.getElementById("sliderOutput");
    output.innerHTML = slider.value;
    slider.oninput = function () {
      setMaxCharactersLocal(this.value);
      localStorage.setItem("maxCharacters", this.value);
      restartTyping();
      CreateNewWordSet();
    };
  });

  return (
    <div
      id="settings"
      className="absolute hidden left-1/2 min-w-[725px] -translate-x-1/2 h-fit w-[50%]   overflow-hidden bg-c2  z-[80] mx-auto slide-in-bottom "
    >
      <div className="relative ">
        <div className="z-40 flex flex-col h-full px-10 mx-auto ">
          <div className="z-40 flex flex-col w-full gap-10 mt-10">
            <SettingsSelector
              restartTyping={restartTyping}
              title="Cursor"
              description="Select the cursor you want"
              group="cursorType"
              options={[
                { id: "verticalSelector", text: "Vertical" },

                { id: "horizontalSelector", text: "Horizontal" },
              ]}
            />

            <SettingsSelector
              restartTyping={restartTyping}
              title="Keyboard"
              description="Show Helper Keyboard"
              group="showKeyboard"
              options={[
                { id: "showKeyboardTrue", text: "Show" },
                { id: "showKeyboardFalse", text: "Hide" },
              ]}
            />
            <SettingsSelector
              restartTyping={restartTyping}
              title="Show Results"
              description="Show Helper Keyboard"
              group="showResults"
              options={[
                { id: "showResultsTrue", text: "On" },
                { id: "showResultsFalse", text: "Off" },
              ]}
            />

            <SettingsSelector
              restartTyping={restartTyping}
              title="Keyboard Animation"
              description="Show Helper Keyboard"
              group="keyboardAnimation"
              options={[
                { id: "keyboardAnimationTrue", text: "On" },
                { id: "keyboardAnimationFalse", text: "Off" },
              ]}
            />
          </div>

          <div className="sliderContainer z-[90] relative mt-8 float-left  grid grid-cols-2 items-center">
            <h2 className="text-2xl text-white ">
              Total Characters:
              <span className="ml-2 font-bold text-c1" id="sliderOutput"></span>
            </h2>
            <input
              type="range"
              min="5"
              max="500"
              className="slider"
              id="totalCharacterSlider"
              step="5"
            />
          </div>

          <div className="z-40 flex flex-row gap-4 mx-auto mt-10">
            <button
              onClick={() => {
                configLocalStorageSettings();
                let settingButtons =
                  document.getElementsByClassName("settingsOption");

                for (let i = 1; i < settingButtons.length; i++) {
                  settingButtons[i].classList.remove("buttonSelected");
                }

                setSetSlider(false);
                restartTyping();
                CreateNewWordSet();
              }}
              className="p-3 text-xl font-bold text-white bg-c5 font-f1 rounded-xl hover:opacity-50"
            >
              Reset to Default Settings
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("userDataPrompt")
                  .classList.remove("hidden");
              }}
              className="p-3 text-xl font-bold text-white bg-c6 font-f1 rounded-xl hover:opacity-50"
            >
              Reset User Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
