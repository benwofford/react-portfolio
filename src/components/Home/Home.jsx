import React, { useState } from "react";
import HeroSection from "../HeroSection/Hero";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import InfoSection from "../InfoSection/InfoSection";
import {
  aboutMe,
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  contactMe,
} from "../InfoSection/Projects";
import Footer from "../Footer/Footer";

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
      <InfoSection {...aboutMe} />
      <InfoSection {...projectOne} />
      <InfoSection {...projectTwo} />
      <InfoSection {...projectThree} />
      <InfoSection {...projectFour} />
      <InfoSection {...projectFive} />
      <InfoSection {...projectSix} />
      <InfoSection {...contactMe} />
      <Footer />
    </>
  );
};

export default Home;
