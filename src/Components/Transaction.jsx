import React from "react";
import "../App.css";
import Table from "./Table";
import styles from "./Transaction.module.css";

export const Search = () => {
  return (
    <span>
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.24989 4.98824e-08C9.81785 -0.000172339 11.3534 0.44648 12.6766 1.28763C13.9999 2.12878 15.056 3.3296 15.7213 4.74941C16.3866 6.16922 16.6335 7.74922 16.4331 9.30432C16.2328 10.8594 15.5934 12.3252 14.5899 13.53L20.2799 19.22C20.3786 19.3117 20.4508 19.4283 20.4888 19.5575C20.5268 19.6868 20.5293 19.8239 20.4959 19.9544C20.4625 20.0849 20.3946 20.204 20.2992 20.2992C20.2038 20.3943 20.0845 20.462 19.9539 20.495C19.8235 20.5283 19.6866 20.5259 19.5574 20.4881C19.4283 20.4503 19.3117 20.3784 19.2199 20.28L13.5299 14.59C12.5117 15.4378 11.3044 16.0278 10.0099 16.3103C8.71547 16.5928 7.37204 16.5594 6.09325 16.2128C4.81446 15.8663 3.63794 15.2169 2.66321 14.3195C1.68847 13.4222 0.944201 12.3033 0.493345 11.0574C0.0424885 9.81159 -0.101687 8.4755 0.0730132 7.16216C0.247714 5.84883 0.736151 4.59689 1.49701 3.51224C2.25787 2.42759 3.26876 1.54214 4.44419 0.930789C5.61961 0.31944 6.92499 0.000174971 8.24989 4.98824e-08ZM1.49989 8.25C1.49989 9.13642 1.67448 10.0142 2.0137 10.8331C2.35292 11.6521 2.85012 12.3962 3.47692 13.023C4.10371 13.6498 4.84783 14.147 5.66678 14.4862C6.48572 14.8254 7.36347 15 8.24989 15C9.13631 15 10.0141 14.8254 10.833 14.4862C11.652 14.147 12.3961 13.6498 13.0229 13.023C13.6497 12.3962 14.1469 11.6521 14.4861 10.8331C14.8253 10.0142 14.9999 9.13642 14.9999 8.25C14.9999 6.45979 14.2887 4.7429 13.0229 3.47703C11.757 2.21116 10.0401 1.5 8.24989 1.5C6.45968 1.5 4.74279 2.21116 3.47692 3.47703C2.21105 4.7429 1.49989 6.45979 1.49989 8.25Z"
          fill="white"
        />
      </svg>
    </span>
  );
};

const Transaction = ({setOrderDetail, modalHandler}) => {
  return (
    <section className={`section `}>
      <div className={`sectionContainer ${styles.transactionContainer} `}>
        <div className="flex flex-col gap-[0.7rem]">
          <p>My Transactions</p>
          <p>This table shows the records of all your transactions</p>
        </div>

        <div className={styles.selectContainer}>
          <select className={styles.select}>
            <option className="pr-[1rem]"># Select Rows</option>
          </select>

          <div className={`${styles.search} `}>
            <Search />
            <input
              placeholder="Search by Transaction number"
              className={`input`}
            />
          </div>
        </div>

        <div className={`${styles.tableContainer}`}>
          <Table setOrderDetail={setOrderDetail} modalHandler={modalHandler} />
        </div>
      </div>
    </section>
  );
};

export default Transaction;
