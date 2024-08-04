import React from "react";
import styles from "./Roadmap.module.css";
import { plan } from "../Data/data";

const Roadmap = () => {
  return (
    <section className={`section text-center`}>
      <h1 className="text-[2rem]">Roadmap</h1>

      <div className={`sectionContainer  ${styles.stepsContainer}`}>
        <div className={`${styles.steps}`}>
          {plan.map((step) => (
            <div key={step.title} className={`${styles.stepGuide}`}>
              <h1 className={styles.title}> {step.title}</h1>
              <p className={`${styles.text}`}>{step.text}</p>
              <p>Read More</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
