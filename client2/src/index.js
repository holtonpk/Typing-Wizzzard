import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Pages/App";
// import Settings from "./Components/Settings";strin
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
