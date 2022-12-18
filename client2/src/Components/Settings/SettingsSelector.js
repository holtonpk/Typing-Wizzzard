import React from "react";

const SettingsSelector = ({
  restartTyping,
  title,
  description,
  group,
  options,
}) => {
  const updateButton = (group, selected) => {
    let selectedSetting = document.getElementsByClassName(group);
    for (let i = 0; i < selectedSetting.length; i++) {
      selectedSetting[i].classList.remove("buttonSelected");
    }
    document.getElementById(selected).classList.add("buttonSelected");
  };

  return (
    <div className="grid items-center justify-between w-full grid-cols-2 z-60 ">
      <div className="flex flex-col">
        <h1 className="z-40 text-2xl text-white w-fit font-f1">{title}</h1>
        <h1 className="z-40 mb-2 text-lg text-white opacity-50 w-fit font-f1">
          {description}
        </h1>
      </div>
      <div className="flex flex-row gap-10 w-fit ">
        {options.map((option) => {
          return (
            <button
              key={option.id}
              onClick={() => {
                localStorage.setItem(group, option.id);
                updateButton(group, option.id);
                restartTyping();
              }}
              id={option.id}
              className={
                "w-40 p-3 text-xl font-bold text-white rounded-lg font-f1 p-w bg-c3 hover:bg-c1  settingsOption " +
                group
              }
            >
              {option.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsSelector;
