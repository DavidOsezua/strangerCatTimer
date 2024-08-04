import React from "react";
import styles from "./PersonalInformation.module.css";
import "../App.css";

const PersonalInformation = () => {
  return (
    <div className={`${styles.step1Container} py-0 `}>
      <div className={`inputContainer`}>
        <p className={styles.text}>Full Name</p>
        <input placeholder="$tranger User" className={`input`} />
      </div>

      <div className={`inputContainer`}>
        <p className={styles.text}>Phone Number</p>
        <input placeholder="+1 (647) 555 4133" className={`input`} />
      </div>

      <div className={`inputContainer`}>
        <p className={styles.text}>Email address</p>
        <input placeholder="nacanada@hotmail.com" className={`input`} />
      </div>
    </div>
  );
};

export default PersonalInformation;
