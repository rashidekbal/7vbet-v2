import React, { useContext } from "react";
import style from "../css/balanceview.module.css";
import balance from "../icons/balance-e39ce400.png";
import { FaRupeeSign } from "react-icons/fa";
import { data } from "../store/Contextprovider";
import refresh from "../icons/refresh-8e0efe26.png";
function BalanceView() {
  let info = useContext(data);
  return (
    <>
      <div className={style.moneyview}>
        <div className={style.moneyviewinner}>
          <div className={style.slogan}>
            <img src={balance} />
            <p>Balance</p>
          </div>
          <div className={style.paisa}>
            <FaRupeeSign className={style.logo} />

            <h1>{info.userfinance.balance}</h1>
            <img src={refresh} className={style.refresh} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BalanceView;
