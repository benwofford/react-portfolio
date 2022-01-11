import React from "react";
import "./css/App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
