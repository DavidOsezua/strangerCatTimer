import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import "../App.css";
import Time from "./Time";
import {
  Cats,
  eth,
  HeroImage,
  heroImg,
  Logo,
  sol,
  usdc,
  usdt,
} from "../assets";
import { visionCard } from "../Data/data";
import { Line, Circle } from "rc-progress";
import { NavLink } from "react-router-dom";
import TextComponent from "./TextComponent";
import axios from "axios";
import { getTotalSold } from "../req";
import Timer from "./Timer";

// export const Line = () => {
//   return (
//     <span>
//       <svg
//         width="100%"
//         height="14"
//         viewBox="0 0 592 14"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect width="592" height="14" rx="7" fill="white" />
//         <path
//           d="M7 7H43"
//           stroke="#12B76A"
//           stroke-width="10"
//           stroke-linecap="round"
//         />
//       </svg>
//     </span>
//   );
// };



const Hero = () => {
  const [filled, setFilled] = useState(0);
  const [loading, isLoading] = useState(false);
  const [totalSold, setTotalSold] = useState(0);

  useEffect(() => {
    getTotalSold().then((res) => {
      setTotalSold(parseInt(res));
    });
  }, []);

  useEffect(() => {
    setFilled((totalSold / 500_000_000_000) * 100);
  }, [totalSold]);

  return (
    <section className={`section ${styles.heroSection}`}>
      <div className={`sectionContainer ${styles.heroContainer}`}>
        <img src={heroImg} className="w-[145%]" />

        <div className={styles.wrapper}>
          <img src={Cats} className={styles.catsImage} />
          <div className={styles.timerContianer}>
            <h1 className={styles.timerTitle}>
              Stranger Cats Presale Starts in:
            </h1>
            <Timer />
          </div>
        </div>

        <TextComponent />

        <div className={styles.wrapper}>
          <div className="">
            <h1 className={`${styles.visionTitle} mb-[2rem]`}>
              Deflationary Vision
            </h1>
            <p className={`${styles.text}`}>
              We have four burn initiatives to constantly support value: Airdrop
              Burns, Secret Team Burns, Roadmap Burns and Community Burns.
              Everything sent to the Solana wallet will be burned and everyone
              can participate and contribute to achieving scarcity for
              $STRANGER.
            </p>
          </div>

          <div className={`${styles.vision}`}>
            {visionCard.map((visionCard) => (
              <div key={visionCard.title} className={styles.visionCard}>
                <img src={visionCard.image} className="w-[50px]" />
                <h3 className={`${styles.visionCardTitle}`}>
                  {visionCard.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
