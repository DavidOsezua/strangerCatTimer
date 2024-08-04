// import React from "react"
import { useEffect, useState } from "react";
import { data } from "../Data/data";
import styles from "./Table.module.css";
import { Axios } from "../req";

const HEADERS = [
  "Transaction Number",
  "Tokens",
  "Amount in Crypto Currency",
  "Amount in US dollars",
  // "To Wallet Address",
  "Status",
  "Type",
  "Action",
];

const Table = ({setOrderDetail, modalHandler}) => {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken")
    if(!accessToken){
       return 
    }
    
    Axios.get("/transactions", {
      headers : {
          "Content-Type" : 'application/json',
          "Authorization" :  `Bearer ${accessToken}`
        }
      
    }).then((res) => {
      console.log(res.data)
      setTransactions(res.data.reverse())
    }).catch((e) => {
      console.log(e)
    })
    // console.log("Getting user transactions")
  }, [])
  
  const handleClick = (paymentId) => {
    Axios.get(`/status?id=${paymentId}`).then((res) => {
      setOrderDetail(res.data)
      modalHandler()
    }).catch((e) => {
      console.log(e)
    })


  }
  
  return (
    <div className="table-responsive ">
      <table className={`${styles.tableStyle}`}>
        <thead>
          <tr>
            {HEADERS.map((th, index) => (
              <th className={`${styles.thStyle}`} key={index}>
                {th}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((item, index) => (
            <tr
              key={item.id}
              className={
                (index + 1) % 2 === 0
                  ? "bg-[#02040F99] cursor-pointer"
                  : "bg-[#04081e99] cursor-pointer"
              }
              onClick={() => handleClick(item.id)}
            >
              <td className={`${styles.tdStyle}`}>
                {" "}
                <div className="flex items-center gap-[3px]">
                  <img
                    src=""
                    className={`${styles.image}  w-[2rem] rounded-md`}
                  />
                  {item.id}
                </div>
              </td>

              <td className={`${styles.tdStyle}`}>
                <div className="flex items-center">
                  <img src="" className={`${styles.UserImage}`} />
                  {item.pay_currency}
                </div>
              </td>

              <td
                className={`${styles.tdStyle} ${
                  item.Action === "ENTRY" ? "text-[#FFC72E]" : "text-[#56FF47]"
                }`}
              >
                {item.pay_amount}
              </td>

              <td className={`${styles.tdStyle}`}>
                <div className="flex items-center">
                  <img src="" />
                  {item.price_amount}
                </div>
              </td>

              {/* <td className={`${styles.tdStyle} text-[#FF6665]`}>
                {item.Time}
              </td>     */}
              <td className={`${styles.tdStyle} text-[#FF6665]`}>
                {item.status}
              </td>
              <td className={`${styles.tdStyle} text-[#FF6665]`}>
                {item.type}
              </td>
              <td className={`${styles.tdStyle} text-[#FF6665]`}>
                {item.action}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
