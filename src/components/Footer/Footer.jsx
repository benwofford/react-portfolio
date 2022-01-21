import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLink,
  SocialMedia,
  WebsiteRights,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer scrollNav={scrollNav}>
      <FooterLinksContainer>
        <FooterLink to="/" onClick={toggleHome}>
          Back to top
        </FooterLink>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialIconLink
          href="https://www.linkedin.com/in/ben-wofford-9a5781217"
          target="_blank"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </SocialIconLink>
        <WebsiteRights>
          &copy; {new Date().getFullYear()} All rights reserved.
        </WebsiteRights>
        <SocialIconLink
          href="https://github.com/benwofford"
          target="_blank"
          aria-label="Github"
        >
          <FaGithub />
        </SocialIconLink>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
