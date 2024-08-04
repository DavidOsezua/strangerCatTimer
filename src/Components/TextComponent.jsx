import React from "react";
import styles from "./TextComponent.module.css";
import "../App.css";

const TextComponent = () => {
  return (
    <section className={`section`}>
      <h1 className={`${styles.aboutTitle}`}>About Stranger Cats</h1>
      <div className={`sectionContainer ${styles.textContainer}`}>
        <p className={styles.text}>
          Stranger Cats, the deriv you never knew you needed. Inspired by
          Stranger Things.
        </p>

        <div>
          <p className={styles.title}>The ticker is $STRANGER</p>
          <p className={styles.text}>
            Step into the enchanting world of Stranger Cats, where the playful
            allure of meme coins meets the electrifying nostalgia of Stranger
            Things. Built on the super-speedy Solana network,{" "}
            <span className="font-extrabold text-[1.2rem]"> $STRANGER </span>
            isn't just a meme coin; it’s a dynamic community of crypto
            enthusiasts ready for adventure.
          </p>
        </div>

        <p className={styles.text}>
          <span className={styles.title}>$STRANGER</span> cultivates joy and
          creativity, through rewarding our community. We believe in the magic
          of memes to bring people together and create unforgettable shared
          experiences. Our exciting features and reward systems, transform the
          Stranger Things universe and ushers it into an immersive, rewarding
          crypto journey.
        </p>

        <div>
          <p className={styles.title}>The Fun Stuff</p>
          <div>
            <li className={styles.title}>Cat-tastic Airdrops:</li>
            <p className={styles.text}>
              Hold Stranger Cats tokens and unlock the potential for regular
              airdrops. The more you hold, the more you earn. Stay tuned for
              <span className="font-extrabold text-[1.2rem]">
                {" "}
                $STRANGER
              </span>{" "}
              rewards that will keep you multiplying pawfits!{" "}
            </p>
          </div>

          <div>
            <li className={styles.title}>Interactive Community Events</li>
            <p className={styles.text}>
              Dive into our themed events and contests. From Stranger Things
              trivia quizzes to make your own meme competitions, there’s always
              a thrilling opportunity to WIN BIG and have FUN!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextComponent;
