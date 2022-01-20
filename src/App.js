import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <BrowserRouter basename="{process.env.PUBLIC_URL}">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactform" element={<ContactForm />} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
}

export default App;
