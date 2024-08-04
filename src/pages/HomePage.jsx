import React, { useRef } from "react";
import {
  Contest,
  Disclaimer,
  Footer,
  Hero,
  Navbar,
  Participation,
  Roadmap,
  Tech,
  Tokenomics,
  Vision,
} from "../Components";
import TextComponent from "../Components/TextComponent";
import Timer from "../Components/Timer";
import Socials from "../Components/Socials";

const HomePage = () => {
  const burnRef = useRef();
  return (
    <>
      <Navbar burnRef={burnRef} />
      <Hero />
      <Participation />
      <Tokenomics />
      <Vision />
      <Contest />
      <Tech />
      <Disclaimer />
      <Socials/>
    </>
  );
};

export default HomePage;
