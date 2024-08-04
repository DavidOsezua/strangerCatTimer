import React from "react";
import styles from "./Token.module.css";

// eslint-disable-next-line react/prop-types
const Token = ({ token, tokenStateHandler, img, network, closeDropdown, setToken, value, isUpdatingRef }) => {
  return (
    <div onClick={closeDropdown}>
      <div
        className={`flex gap-4 items-center cursor-pointer text-[#C8A2D6] border-b-[1px] py-[10px] border-[#7B548D99]`}
        onClick={() => {
          tokenStateHandler([img, token])
          isUpdatingRef.current = "token"
          setToken(value)
        }}
      >
        <img src={img} className="w-[15px]"/>
        <p >{token}</p>
        <p>{network}</p>
      </div>
    </div>
  );
};

export default Token;
