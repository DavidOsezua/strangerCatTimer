import React, { useEffect, useState } from "react";
import styles from "./Wallet.module.css";
import { toast } from "react-toastify";
import useClipboardPaste from "../CustomHook/useClipboardPaste";
import { Axios } from "../req";

const Wallet = ({ userDetails, setUserDetails }) => {
 

  const [pastedText, pasteFromClipboard] = useClipboardPaste();

  const [wallet, setWallet] = useState("");

  useEffect(() => {
    if (pastedText !== "") {
      setWallet(pastedText);
    }
  }, [pastedText]);

  const updateAddress = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const payload = { wallet };
    toast
      .promise(
        Axios.put("/wallet", payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }),
        {
          pending: "Updating Wallet Address",
          error: "Error updating wallet",
          success: "Wallet updated successfully",
        }
      )
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <section className={`section`}>
      <div className={`sectionContainer pt-0  ${styles.walletContainer}`}>
        <div className={`${styles.wallet}`}>
          <div className={`${styles.textContainer}`}>
            <p>
              My Wallet Address:{" "}
              {`${
                userDetails
                  ? userDetails.wallet_address
                    ? userDetails.wallet_address
                    : ""
                  : ""
              }`}
            </p>
            <p>
              Add or Update your SOL wallet address if you want to receive your
              $STRANGER token.
            </p>
          </div>

          <div className={`${styles.emailContainer}`}>
            <div className={`${styles.inputContainer}`}>
              <input
                className={`${styles.input} `}
                placeholder="Enter your address"
                onChange={(e) => setWallet(e.target.value)}
                value={wallet}
              />
              <button onClick={pasteFromClipboard} className="text-[#fff]">
                {" "}
                Paste
              </button>
            </div>

            <button className={`btn`} onClick={updateAddress}>
              Update
            </button>
          </div>
        </div>

        <div className={`${styles.wallet}`}>
          <p>Token Balance</p>

          <div>
            <p>
              {userDetails ? userDetails.balance.toPrecision(8) : 0} $STRANGER
            </p>
            <span></span>
          </div>

          <button className={`btn`}>Buy $STRANGER</button>
        </div>

        {/************************************* Second Div  ************************************/}
      </div>
    </section>
  );
};

export default Wallet;
