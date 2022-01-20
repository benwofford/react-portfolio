import React from "react";
import Video from "../../video/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hello there!</HeroH1>
        <HeroP>My name is Ben Wofford.</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
