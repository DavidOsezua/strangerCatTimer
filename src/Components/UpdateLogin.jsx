import React from "react";
import styles from "./UpdateLogin.module.css";

export const Info = () => {
  return (
    <span>
      <svg
        width="10"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9336 19H13.0667"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25 13C25 6.3728 19.6272 1 13 1C6.3728 1 1 6.3728 1 13C1 19.6272 6.3728 25 13 25C19.6272 25 25 19.6272 25 13Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13 13V6.33313"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  );
};

const UpdateLogin = () => {
  return (
    <>
      <div className={`${styles.step1Container} py-0 `}>
        <div className={`inputContainer h-[50.92px] flex items-center`}>
          <input placeholder="Current Password" className={`input`} />
        </div>

        <div className={`inputContainer h-[50.92px] flex items-center`}>
          <input placeholder="Confirm Password" className={`input`} />
        </div>

        <div className={`inputContainer h-[50.92px] flex items-center`}>
          <input placeholder="New Password" className={`input`} />
        </div>
      </div>

      <div className={`${styles.infoContainer}`}>
        <p className={`${styles.text}`}>
          <Info /> Password should be a minimum of 6 digits and include lower
          and uppercase letter.
        </p>
        <p className={`${styles.text}`}>
          <Info /> Password should be a minimum of 6 digits and include lower
          and uppercase letter.
        </p>
      </div>
    </>
  );
};

export default UpdateLogin;
