import React from "react";
import "../App.css";
import styles from "./Vision.module.css";
import { gif, strangerCat } from "../assets";

const Vision = () => {
  return (
    <section className={`section`}>
      <div className={`sectionContainer ${styles.visionContainer}`}>
        <div className={`${styles.contentContainer}`}>
          <h1 className={`${styles.title}`}>Long-term Vision</h1>
          <article className={`${styles.text}`}>
            <li>
              Continuous Development: Regular updates and expansions to the
              digital comic series, and additional features based on community
              feedback.
            </li>
            <li>
              {" "}
              Global Outreach: Expand marketing efforts to reach a global
              audience, translating content and forming international
              partnerships.
            </li>
            <li>
              Physical Collectibles: Develop and release high-quality physical
              collectibles, such as action figures and art prints, tied to the
              “Stranger Cats” brand.
            </li>

            <li>
              Sustainability Initiatives: Implement eco-friendly practices in
              project operations and explore blockchain technologies with lower
              environmental impact.
            </li>
          </article>
          qwas
        </div>
        {/* <video autoPlay muted loop>
          <source src={gif} type="video/mp4" />
        </video> */}

        <img src={gif} />
      </div>
    </section>
  );
};

export default Vision;
