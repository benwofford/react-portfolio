import React from "react";
import Video from "../../video/video.mp4";
// import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  // HeroBtnWrapper,
  // ArrowForward,
  // ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  // const [hover, setHover] = useState(false);

  // const onHover = () => {
  //   setHover(!hover);
  // };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hello there!</HeroH1>
        <HeroP>My name is Ben Wofford.</HeroP>
        {/* <HeroBtnWrapper>
          <Button
            to="/contactform"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Come say hello! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button> */}
        {/* </HeroBtnWrapper> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
