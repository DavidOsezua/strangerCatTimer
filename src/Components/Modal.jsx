import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import SuccessForm from "./SuccessForm";
import { Axios } from "../req";
import { toast } from "react-toastify";
import QRCode from "react-qr-code";
import ModalPopup from "./ModalPopup";
import { modalClose } from "../assets";

// const finishedStatus = ["confirmed", ]

// export const QrCode = () => {
//   return (
//     <span>
//       <svg
//         width="136"
//         height="196"
//         viewBox="0 0 196 196"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M24.875 24.875H49.25V49.25H24.875V24.875Z" fill="white" />
//         <path
//           d="M73.625 0.5V73.625H0.5V0.5H73.625ZM61.4375 12.6875H12.6875V61.4375H61.4375V12.6875ZM49.25 146.75H24.875V171.125H49.25V146.75Z"
//           fill="white"
//         />
//         <path
//           d="M73.625 122.375V195.5H0.5V122.375H73.625ZM12.6875 134.562V183.312H61.4375V134.562H12.6875ZM146.75 24.875H171.125V49.25H146.75V24.875Z"
//           fill="white"
//         />
//         <path
//           d="M122.375 0.5V73.625H195.5V0.5H122.375ZM183.312 12.6875V61.4375H134.562V12.6875H183.312ZM98 12.6875V0.5H110.188V24.875H98V49.25H85.8125V12.6875H98ZM98 73.625V49.25H110.188V73.625H98ZM73.625 98V85.8125H85.8125V73.625H98V98H110.188V85.8125H171.125V98H122.375V110.188H85.8125V98H73.625ZM73.625 98V110.188H24.875V98H12.6875V110.188H0.5V85.8125H37.0625V98H73.625ZM195.5 110.188H183.312V85.8125H195.5V110.188ZM183.312 110.188H171.125V134.562H195.5V122.375H183.312V110.188ZM134.562 110.188H158.938V122.375H146.75V134.562H134.562V110.188ZM158.938 146.75V134.562H146.75V146.75H134.562V158.938H110.188V171.125H146.75V146.75H158.938ZM158.938 146.75H195.5V158.938H171.125V171.125H158.938V146.75ZM110.188 134.562V146.75H122.375V122.375H85.8125V134.562H110.188Z"
//           fill="white"
//         />
//         <path
//           d="M85.8125 146.75H98V183.312H146.75V195.5H85.8125V146.75ZM195.5 171.125V195.5H158.938V183.312H183.312V171.125H195.5Z"
//           fill="white"
//         />
//       </svg>
//     </span>
//   );
// };

export const Spinner = () => {
  return (
    <span>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 0C33.7674 0 35.2 1.4327 35.2 3.2V12.8C35.2 14.5673 33.7674 16 32 16C30.2326 16 28.8 14.5673 28.8 12.8V3.2C28.8 1.4327 30.2326 0 32 0ZM32 48C33.7674 48 35.2 49.4326 35.2 51.2V60.8C35.2 62.5674 33.7674 64 32 64C30.2326 64 28.8 62.5674 28.8 60.8V51.2C28.8 49.4326 30.2326 48 32 48ZM64 32C64 33.7674 62.5674 35.2 60.8 35.2H51.2C49.4326 35.2 48 33.7674 48 32C48 30.2326 49.4326 28.8 51.2 28.8H60.8C62.5674 28.8 64 30.2326 64 32ZM16 32C16 33.7674 14.5673 35.2 12.8 35.2H3.2C1.4327 35.2 0 33.7674 0 32C0 30.2326 1.4327 28.8 3.2 28.8H12.8C14.5673 28.8 16 30.2326 16 32ZM54.6275 54.6275C53.3776 55.8771 51.3517 55.8771 50.1021 54.6275L43.3136 47.839C42.064 46.5894 42.064 44.5635 43.3136 43.3136C44.5635 42.064 46.5894 42.064 47.839 43.3136L54.6275 50.1021C55.8771 51.3517 55.8771 53.3776 54.6275 54.6275ZM20.6863 20.6863C19.4366 21.936 17.4105 21.936 16.1608 20.6863L9.37258 13.8981C8.12291 12.6484 8.12291 10.6223 9.37258 9.37258C10.6223 8.12291 12.6484 8.12291 13.8981 9.37258L20.6863 16.1608C21.936 17.4105 21.936 19.4366 20.6863 20.6863ZM9.37258 54.6275C8.12291 53.3776 8.12291 51.3517 9.37258 50.1021L16.1608 43.3136C17.4105 42.064 19.4366 42.064 20.6863 43.3136C21.936 44.5635 21.936 46.5894 20.6863 47.839L13.8981 54.6275C12.6484 55.8771 10.6223 55.8771 9.37258 54.6275ZM43.3136 20.6863C42.064 19.4366 42.064 17.4105 43.3136 16.1608L50.1021 9.37258C51.3517 8.12291 53.3776 8.12291 54.6275 9.37258C55.8771 10.6223 55.8771 12.6484 54.6275 13.8981L47.839 20.6863C46.5894 21.936 44.5635 21.936 43.3136 20.6863Z"
          fill="#FDF9FF"
        />
      </svg>
    </span>
  );
};

const finished_stauses = ["confirming", "confirmed", "sending", "finished"];

const Modal = ({ modalHandler, orderDetail }) => {
  const [miniModal, setMiniModal] = useState(false);
  const [loading, setLoading] = useState();
  const [status, setStatus] = useState(
    orderDetail ? orderDetail.payment_status : "waiting"
  );
  const [success, setSuccess] = useState(false);

  // const miniModalHandler = () => {
  //   setMiniModal(!false);
  // };

  useEffect(function () {
    async function fetch() {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 3000));

      setLoading(false);
    }

    fetch();
  }, []);

  useEffect(() => {
    if (orderDetail) setStatus(orderDetail.payment_status);
  }, [orderDetail]);

  const miniModalHandler = () => {
    if (!orderDetail) return;
    setLoading(true);
    setMiniModal(true);

    Axios.get(`/status?id=${orderDetail.payment_id}`)
      .then((res) => {
        setStatus(res.data.payment_status);
        // setLoading(false);
        const paymentStatus = res.data.payment_status;

        if (finished_stauses.includes(paymentStatus)) {
          setMiniModal(false);
          setSuccess(true);
          toast.success("Payment Confirmed");
        } else {
          setMiniModal(false);
          toast.warn("Payment not confirmed");
        }
      })
      .catch((e) => {
        console.log(e);
        toast.error("Error confirming payment");
        setLoading(false);
        setMiniModal(false);
      });

    // setMiniModal(!false);
  };

  return (
    <>
      <div className={`${styles.overlay}`}>
        <div className={`${styles.overlay2}`} onClick={modalHandler}></div>
        <div className={`${styles.wrapper}`}>
          <div className="flex justify-end cursor-pointer" onClick={modalHandler}>
            <img src={modalClose} />
          </div>
          {/* {loading && (
            <div className={styles.overlay3}>
              <div className={styles.spinner}>
                <Spinner />
              </div>
            </div>
          )} */}

          {miniModal && (
            <div className={styles.overlay3}>
              <div>
                <ModalPopup />
              </div>
            </div>
          )}

          {success && (
            <div className={styles.overlay3}>
              <div>
                <SuccessForm modalHandler={modalHandler} />{" "}
              </div>
            </div>
          )}

          <div className={`flex justify-center`}>
            {orderDetail && (
              <QRCode value={orderDetail.pay_address} viewBox={`0 0 256 256`} />
            )}
          </div>
          <p className="text-center w-[70%] mx-auto pb-[1rem] text-[#fff]">
            {`Send only ${orderDetail && orderDetail.pay_amount} ${
              orderDetail && orderDetail.pay_currency
            } to this address. Sending any other coin may result in
            permanent loss.`}
          </p>

          <div className="flex justify-between pb-[1rem]">
            <p>Network</p>
            <p>{orderDetail && orderDetail.network}</p>
          </div>

          <div className="flex justify-between pb-[1rem]">
            <p>Status</p>
            <p>{status}</p>
          </div>

          <div className="flex justify-between">
            <p>Wallet address</p>
            <p>{orderDetail && orderDetail.pay_address} </p>
          </div>

          <div className="flex gap-3 pt-3 ">
            <button
              className={`${styles.btn} text-[fff]`}
              onClick={() => {
                navigator.clipboard.writeText(orderDetail.pay_address);
                toast.success("Address copied");
              }}
            >
              Copy address
            </button>
            <button
              className={`${styles.btn} bg-[#310B0B] `}
              onClick={miniModalHandler}
            >
              Confirm payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
