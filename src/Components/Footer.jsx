import React from "react";
import { Logo } from "../assets";
import "../App.css";

export const Line = () => {
  return (
    <span>
      <svg
        width="100%"
        height="1"
        viewBox="0 0 626 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="0.5" x2="626" y2="0.5" stroke="#FF1515" />
      </svg>
    </span>
  );
};

const Footer = () => {
  return (
    <footer className={`section`}>
      <div className="flex gap-3 justify-between items-center">
        <Line />

        <img src={Logo} className="w-[100px]" />

        <Line />
      </div>
      <div
        className={`sectionContainer flex justify-between items-center text-[#fff] text-[0.8rem]`}
      >
        <p>StrangerCat © 2024</p>

        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
