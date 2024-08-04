import React from "react";
import styles from "./Disclaimer.module.css";
import "../App.css";
const Disclaimer = () => {
  return (
    <section className={`section`}>
      <div className={`sectionContainer `}>
        <div className={`${styles.container}`}>
          <h1 className={`text-[#FF1515] text-[2rem]`}>Disclaimer</h1>
          <p className="font-[200]">
            $STRANGER is a meme coin with no intrinsic value or expectation of
            financial return. $STRANGER is completely useless and for
            entertainment purposes only. When you purchase $STRANGER, you are
            agreeing that you have seen this disclaimer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
