import React from "react";
import styles from "./Participation.module.css";
import "../App.css";
import { steps } from "../Data/data";
import { Element } from "react-scroll";

export const StepsMobile = () => {
  return <span></span>;
};
const Participation = () => {
  return (
    <Element name="participation">
      <section className={`section text-center`}>
        <h1 className={`${styles.participationtitle}`}>
          How to participate in a burn
        </h1>

        <div className={`sectionContainer  ${styles.stepsContainer}`}>
          <div className={`${styles.steps}`}>
            {steps.map((step) => (
              <div key={step.title} className={`${styles.stepGuide}`}>
                <p className={styles.title}> {step.title}</p>
                <h1 className={styles.text}>{step.text}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Participation;
