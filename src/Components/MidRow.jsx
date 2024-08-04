import React from "react";
import "../App.css";
import styles from "./MidRow.module.css";

export const Green = () => {
  return (
    <span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="7" cy="7" r="7" fill="#67D8A3" fill-opacity="0.5" />
      </svg>
    </span>
  );
};

const MidRow = () => {
  return (
    <section className={`section`}>
      <div className={`sectionContainer py-0`}>
        <div className={`${styles.midRow}`}>
          <p className="text-center gap-2 border border-[#fff] px-[1.1rem] py-[0.5rem]">
            Token holding 0 $STRANGERCAT
          </p>

          <p className="border border-[#fff] px-[1.1rem] py-[0.5rem] ">
            Current Fiat Value 0USDT
          </p>
        </div>
      </div>
    </section>
  );
};

export default MidRow;
