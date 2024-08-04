import React, { useState } from "react";
import styles from "./TabComponent.module.css";
import PersonalInformation from "./PersonalInformation";
import MySettings from "./MySettings";
import UpdateLogin from "./UpdateLogin";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Personal Information");

  const handleTabSwitching = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <div className={`${styles.tabSection}`}>
        <div className={`${styles.tabContainer}`}>
          {/************************** EXCHANGE TAB ********************************/}
          <button
            onClick={() => {
              handleTabSwitching("Personal Information");
            }}
            className={`${
              activeTab === "Personal Information" ? styles.active : ""
            } ${styles.btn}
           `}
          >
            Personal Information
          </button>

          {/************************** MINING TAB  ********************************/}
          <button
            onClick={() => {
              handleTabSwitching("My Settings");
            }}
            className={`${activeTab === "My Settings" ? styles.active : ""}  ${
              styles.btn
            }
           `}
          >
            My Settings
          </button>

          {/************************** FRIENDS TAB ********************************/}
          <button
            onClick={() => {
              handleTabSwitching("Update Login Credentials");
            }}
            className={`${
              activeTab === "Update Login Credentials" ? styles.active : ""
            } ${styles.btn}
           `}
          >
            Update Login Credentials
          </button>
        </div>
      </div>
      {activeTab === "Personal Information" && <PersonalInformation />}
      {activeTab === "My Settings" && <MySettings />}
      {activeTab === "Update Login Credentials" && <UpdateLogin />}
    </>
  );
};

export default TabComponent;
