import React from "react";
import styles from "./SuccessForm.module.css";
import { NavLink } from "react-router-dom";

export const Check = () => {
  return (
    <span>
      <svg
        width="65"
        height="65"
        viewBox="0 0 65 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="32.5"
          cy="32.5"
          r="31.5"
          stroke="url(#paint0_linear_143_2383)"
          stroke-opacity="0.7"
        />
        <circle cx="32.5" cy="32.5" r="30" fill="#FF1515" />
        <path
          d="M47.3722 22.3394L27.3722 42.3394L18.2812 33.2484"
          fill="#5F3873"
        />
        <path
          d="M47.3722 22.3394L27.3722 42.3394L18.2812 33.2484"
          stroke="#E8EDEA"
          stroke-width="1.8329"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_143_2383"
            x1="7.54"
            y1="6.52445"
            x2="43.9323"
            y2="75.3719"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E1AD37" />
            <stop offset="1" stop-color="#9C37FD" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
};

const SuccessForm = ({ modalHandler }) => {
  return (
    <div className="flex flex-col items-center">
      <Check />
      <h2 className={`${styles.successTitle} mt-[0.7rem]`}>Payment succeful</h2>

      <button className={`${styles.btn} max-w-[350px] `} onClick={modalHandler}>
        Close
      </button>

      <button className={`${styles.btnTransparent} max-w-[350px] `}>
        <NavLink to="/">Home</NavLink>
      </button>
    </div>
  );
};

export default SuccessForm;
