import React from "react";

const Confirmation = ({ configLocalStorageUserData }) => {
  return (
    <div id="userDataPrompt" className="hidden">
      <button
        onClick={() => {
          document.getElementById("userDataPrompt").classList.add("hidden");
        }}
        className="w-screen h-[110vh] bg-black z-[100] opacity-70 fixed top-0 left-0"
      ></button>
      <div className="fixed z-[130] bg-c2 shadow-xl top-1/2 p-4  left-1/2  -translate-x-1/2 -translate-y-1/2 w-[400px] text-white rounded-xl text-center text-2xl ">
        <h1 className="mb-6 text-2xl font-bold text-white font-f1">
          Reset all user data?
        </h1>
        <div className="flex flex-col justify-between mx-auto w-[60%]">
          <button
            onClick={() => {
              configLocalStorageUserData();
              document.getElementById("userDataPrompt").classList.add("hidden");
            }}
            className="p-3 text-xl font-bold text-white bg-c1 font-f1 rounded-xl hover:opacity-50"
          >
            Reset
          </button>
          <button
            onClick={() => {
              document.getElementById("userDataPrompt").classList.add("hidden");
            }}
            className="p-3 text-xl font-bold text-white font-f1 rounded-xl hover:opacity-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
