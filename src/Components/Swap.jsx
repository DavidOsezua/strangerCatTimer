import React, { useEffect, useState, useRef, useCallback } from "react";
import "../App.css";
import styles from "./Swap.module.css";
import { arrowDown, usdt } from "../assets";
import Dropdown from "./Dropdown";
import { Axios, getConversion } from "../req";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import _ from "lodash";

const usdTokens = ["usdterc20", "usdtbsc", "usdttrc20", "usdc"];

const tokens = {
  usdterc20: {
    minAmount: 12,
    maxAmount: 84533,
  },
  usdtbsc: {
    minAmount: 10,
    maxAmount: 25425,
  },
  usdttrc20: {
    minAmount: 12,
    maxAmount: 88983,
  },
  sol: {
    minAmount: 0.0533304,
    maxAmount: 51,
  },
  eth: {
    minAmount: 0.0028929,
    maxAmount: 26.589458072453095,
  },

  usdc: {
    minAmount: 12,
    maxAmount: 31775,
  },
};

const price = 1 / 0.000025;

const Swap = ({ modalHandler, setOrderDetail }) => {
  const [dropdown, setDropDown] = useState(false);
  const [tokenState, setTokenState] = useState([usdt, "USDT"]);
  const [token, setToken] = useState("usdtbsc");
  const [amountUsd, setAmountUsd] = useState("0");
  const [amountToken, setAmountToken] = useState("");
  // const [orderDetail, setOrderDetail] = useState(null)
  const isUpdatingRef = useRef(false);
  const navigate = useNavigate();

  const debouncedHandleChange = useCallback(
    _.debounce((amountIn, tokenIn, tokenOut, setter) => {
      console.log("Debounced input value:", amountIn, tokenIn, tokenOut);
      getConversion(amountIn, tokenIn, tokenOut)
        .then((res) => {
          setter(res);
        })
        .catch((e) => {
          console.log(e);
        });

      // Place your API call or expensive operation here
    }, 200), // Adjust the delay as needed
    []
  );

  const showDropdown = () => {
    setDropDown(!false);
  };

  const closeDropdown = () => {
    setDropDown(false);
  };

  const tokenStateHandler = (currentToken) => {
    setTokenState(currentToken);
  };

  useEffect(() => {
    if (!amountUsd) {
      setAmountToken("");
      return;
    }
    if (isUpdatingRef.current !== "usdt") return;
    if (token.includes("usd")) {
      setAmountToken(amountUsd);
      return;
    }
    if (!token) return;
    debouncedHandleChange(amountUsd, "usd", token, setAmountToken);
    // getConversion(amountUsd, "usd", token).then((res) => {
    //   setAmountToken(res)
    // }).catch((e) => {
    //   console.log(e)
    // })
  }, [amountUsd]);

  useEffect(() => {
    if (!amountToken) {
      setAmountUsd("");
      return;
    }
    if (isUpdatingRef.current !== "token") return;
    if (token.includes("usd")) {
      setAmountUsd(amountToken);
      return;
    }

    if (!token) return;

    debouncedHandleChange(amountToken, token, "usd", setAmountUsd);
    // getConversion(amountToken, token, "usd").then((res) => {
    //   setAmountUsd(res)
    // }).catch((e) => {
    //   console.log(e)
    // })

    // setAmountUsd(amountToken)
  }, [amountToken, token]);

  const handleBuy = async () => {
    if (!amountToken) {
      toast.warn("Token amount required");
      return;
    }
    if (!token) {
      toast.warn("Token required");
      return;
    }

    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (!accessToken) {
      toast.warn("Not logged in");
      navigate("/login");
      return;
    }
    // if(!)
    // const res = toast.loading("Creating Order")

    const payload = {
      price_amount: amountUsd,
      pay_currency: token,
      pay_amount: amountToken,
    };

    toast
      .promise(
        Axios.post("/buy", payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }),
        {
          pending: "Creating Order",
          error: "Error Creating order",
          success: "Order created successfully",
        }
      )
      .then((res) => {
        setOrderDetail(res.data);
        modalHandler();
      })
      .catch((e) => {
        console.log(e);
      });

    // modalHandler controls the modal
  };

  return (
    <section className={`section pt-[1rem]`}>
      <div className={`sectionContainer ${styles.swapContainer} `}>
        <div className={`${styles.step1Container} py-0 `}>
          <div className={styles.label}>
            <p className={styles.text}>Step 1</p>
            <p className={styles.text}>
              Enter the amount in USD to purchase tokens
            </p>
          </div>

          <div className={`${styles.inputContainer} `}>
            <p className={styles.text}>Amount in USD</p>
            <input
              placeholder="0"
              className={`${styles.input}`}
              value={amountUsd}
              onChange={(e) => {
                isUpdatingRef.current = "usdt";
                setAmountUsd(e.target.value);
              }}
            />
          </div>
        </div>

        {/************************************* Second Div  ************************************/}
        <div>
          {/************************************* Second inner Div  ************************************/}
          <>
            <div className="pb-[0.5rem]">
              <p className={styles.text}>Step 2</p>
              <p className={styles.text}>
                Please select a currency in order to proceed
              </p>
            </div>

            <div className={`${styles.secondDiv}`}>
              {/************************************* Form and Option Div  one ************************************/}

              <div className={`${styles.inputWrapper} flex  w-full relative`}>
                <div
                  className={`${styles.inputContainer} rounded-tr-[0px] rounded-br-[0px] `}
                >
                  <p className={styles.text}>You Send</p>
                  <input
                    className={`${styles.input}`}
                    value={amountToken}
                    onChange={(e) => {
                      isUpdatingRef.current = "token";
                      setAmountToken(e.target.value);
                    }}
                  />
                </div>

                <>
                  <button className={styles.swapBtn} onClick={showDropdown}>
                    <img src={tokenState[0]} className="w-[15px]" />
                    {tokenState[1]}
                    <img src={arrowDown} />
                  </button>

                  <div className="absolute right-0 top-[51px] ">
                    {dropdown && (
                      <Dropdown
                        setToken={setToken}
                        tokenStateHandler={tokenStateHandler}
                        closeDropdown={closeDropdown}
                        isUpdatingRef={isUpdatingRef}
                      />
                    )}
                  </div>
                </>
              </div>

              {/************************************* Form and Option Div Two************************************/}

              <div className={`${styles.inputWrapper} flex  w-full`}>
                <div
                  className={`${styles.inputContainer} rounded-tr-[0px] rounded-br-[0px] `}
                >
                  <p className={styles.text}>You receive</p>
                  <input
                    className={`${styles.input}`}
                    disabled
                    value={
                      amountUsd
                        ? (parseFloat(amountUsd) * price).toPrecision(8)
                        : 0
                    }
                  />
                </div>

                <p className={`${styles.swapBtn}  `}>$STRANGER</p>
              </div>
            </div>
          </>
        </div>

        <button className={`${styles.btn}`} onClick={handleBuy}>
          Buy $STRANGER
        </button>
      </div>
    </section>
  );
};

export default Swap;
