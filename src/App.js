import React from "react";
import Apod from "./Components/Apod/Apod"
import Info from "./Components/Info/Info"
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>
        🚀 Welcome to Tauan's NASA Photo of The Day App! 🚀
      </h2>
      <Apod />
      <Info />
    </div>
  );
}

export default App;
