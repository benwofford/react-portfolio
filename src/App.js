import React from "react";
import "./css/App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
