import React from "react";
import "./App.css";
import { Toast } from "./components";

function App() {
  return (
    <div className="App">
      <h1>React with typescript Boilerplate</h1>
      <Toast message="success" />
    </div>
  );
}

export default App;
