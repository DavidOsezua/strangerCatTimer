import React from "react";
import { product } from "../Data/data";
import styles from "./Tech.module.css";
import "../App.css";

const Tech = () => {
  return (
    <section className={`section`}>
      <div className={`sectionContainer`}>
        <div className={`${styles.wrapper}`}>
          {product.map((oneProduct, i) => (
            <div key={i} className={`${styles.card}`}>
              <img src={oneProduct.image} className="w-[70px]" />

              <p className={`${styles.title}`}>{oneProduct.productName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
