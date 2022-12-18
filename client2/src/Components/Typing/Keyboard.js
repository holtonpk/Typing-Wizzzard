import React, { useEffect } from "react";

const Keyboard = ({ keyboardAnimationv }) => {
  const keyboardAnimation = (event) => {
    let keyPressed = String.fromCharCode(event.keyCode);

    if (event.key == "CapsLock") {
      document.getElementById("caps").classList.add("hit");
    }

    if (keyPressed === " ") {
      keyPressed = "space";
    }

    const keyElement = document.getElementById(keyPressed);
    if (keyElement) {
      keyElement.classList.add("hit");
      keyElement.addEventListener("animationend", () => {
        keyElement.classList.remove("hit");
      });
    }
  };

  const capsLock = (event) => {
    if (event.key == "CapsLock") {
      document.getElementById("caps").classList.remove("hit");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("keyboardAnimation") == "keyboardAnimationTrue") {
      document.addEventListener("keydown", keyboardAnimation);
      document.addEventListener("keyup", capsLock);
    } else {
      document.removeEventListener("keydown", keyboardAnimation);
      document.removeEventListener("keyup", capsLock);
    }
  }, [keyboardAnimationv]);

  return (
    <div className="mx-auto keyboard w-fit">
      <ul className="row row-0">
        <li id="esc">ESC</li>
        <li id="1">1</li>
        <li id="2">2</li>
        <li id="3">3</li>
        <li id="4">4</li>
        <li id="5">5</li>
        <li id="6">6</li>
        <li id="7">7</li>
        <li id="8">8</li>
        <li id="9">9</li>
        <li id="10">0</li>
        <li>-</li>
        <li>+</li>
        <li id="back">BACK</li>
      </ul>
      <ul className="row row-1">
        <li id="tab">TAB</li>
        <li id="Q">Q</li>
        <li id="W">W</li>
        <li id="E">E</li>
        <li id="R">R</li>
        <li id="T">T</li>
        <li id="Y">Y</li>
        <li id="U">U</li>
        <li id="I">I</li>
        <li id="O">O</li>
        <li id="P">P</li>
        <li>[</li>
        <li>]</li>
        <li>\</li>
      </ul>
      <ul className="row row-2">
        <li id="caps">CAPS</li>
        <li id="A">A</li>
        <li id="S">S</li>
        <li id="D">D</li>
        <li id="F">F</li>
        <li id="G">G</li>
        <li id="H">H</li>
        <li id="J">J</li>
        <li id="K">K</li>
        <li id="L">L</li>
        <li>:</li>
        <li>''</li>
        <li id="enter">ENTER</li>
      </ul>
      <ul className="row row-3">
        <li id="left-shift">SHIFT</li>
        <li id="Z">Z</li>
        <li id="X">X</li>
        <li id="C">C</li>
        <li id="V">V</li>
        <li id="B">B</li>
        <li id="N">N</li>
        <li id="M">M</li>
        <li>,</li>
        <li>.</li>
        <li>;</li>
        <li id="right-shift">SHIFT</li>
      </ul>
      <ul className="row row-3">
        <li className="w-[60%] mx-auto" id="space">
          {" "}
        </li>
      </ul>
    </div>
  );
};

export default Keyboard;
