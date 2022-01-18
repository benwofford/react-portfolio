import React, { useState } from "react";
import HeroSection from "../HeroSection/Hero";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import InfoSection from "../InfoSection/InfoSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection />
    </>
  );
};

export default Home;
