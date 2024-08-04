import React from "react";
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

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Participation />
      <Tokenomics />
      <Vision />
      <Contest />
      <Tech />
      <Disclaimer />
    </>
  );
};

export default HomePage;
