import React from "react";
import "../App.css";

const MySettings = () => {
  return (
    <div className="flex gap-1">
      <input type="checkbox"/>
      <p>Alert me by email in case of unusual activity in my account</p>
    </div>
  );
};

export default MySettings;
