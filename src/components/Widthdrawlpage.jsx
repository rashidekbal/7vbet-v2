import React, { useContext, useRef } from "react";
import BalanceView from "./BalanceView";
import style from "../css/Widthdrawlpage.module.css";
import bankcard from "../icons/bankcard.png";
import usdt from "../icons/usdt.png";
import add from "../icons/add-1ad7f3f5.png";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { data } from "../store/Contextprovider";
import Withdrawlhistory from "./Withdrawlhistory";

function Widthdrawlpage() {
  let info = useContext(data);

  return (
    <>
      <div className={style.header}>
        <p>Withdraw</p>
        <p>Withdrawl history</p>
      </div>
      <BalanceView />
      <div className={style.methodholder}>
        <div
          className={style.card}
          style={{
            marginLeft: "0px",

            color: "white",
          }}
        >
          <img src={bankcard} alt="" />
          <p>bank card</p>
        </div>
        <div className={style.card}>
          <img src={usdt} alt="" />
          <p>USDT </p>
        </div>
      </div>
      <div className={style.addbankcard}>
        <img src={add} />
        <p>Add a bank account number</p>
      </div>
      <div className={style.container}>
        <div className={style.formarea}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <div className={style.depositeintput}>
              <div className={style.rupee}>
                <FaRupeeSign className={style.logo} />
              </div>
              <div className={style.inputbox}>
                <input
                  className={style.input}
                  type="number"
                  max="50000"
                  placeholder="Please enter the amount"
                  required
                />
              </div>
              <div className={style.cross}>
                <MdOutlineCancel className={style.div} />
              </div>
            </div>
            <p className={style.withdrawlinfo}>
              Withdrawable balance{" "}
              <span style={{ color: "orange" }}>
                {" "}
                <FaRupeeSign
                  style={{
                    fontSize: "10px",
                    verticalAlign: "middle",
                    color: "orange",
                    marginLeft: "5px",
                  }}
                />
                <span style={{ fontSize: "10px" }}>
                  {" "}
                  {info.account_balance}
                </span>
              </span>
            </p>
            <p className={style.withdrawlinfo}>
              Withdrawable amount received{" "}
              <span>
                {" "}
                <FaRupeeSign
                  style={{ fontSize: "10px", verticalAlign: "middle" }}
                />
                <span>{info.takenout}</span>
              </span>
            </p>
            <div className={style.submitholder}>
              <input className={style.on} type="submit" value="Withdraw" />
            </div>
          </form>
        </div>
        <div className={style.WidthdrawlInstruction}>
          <ul>
            <li>
              Need to bet
              <FaRupeeSign
                style={{
                  fontSize: "11px",
                  marginLeft: "5px",
                  color: "red",
                }}
              />
              <span style={{ color: "red" }}>{info.tobeBet} </span>
              to be able to withdraw
            </li>
            <li>
              Withdrawl time <span style={{ color: "red" }}>00:00-23:50</span>
            </li>
            <li>
              {" "}
              Inday Remaining Withdrawl Times{" "}
              <span style={{ color: "red" }}>{info.WithdrawlReamining}</span>
            </li>
            <li>
              Withdrawl amount range{" "}
              <span style={{ color: "red" }}>
                <FaRupeeSign
                  style={{
                    fontSize: "11px",
                    marginLeft: "5px",
                    color: "red",
                  }}
                />
                110-00-
                <FaRupeeSign
                  style={{
                    fontSize: "11px",
                    marginLeft: "0px",
                    color: "red",
                  }}
                ></FaRupeeSign>
                100,000.00
              </span>
            </li>
            <li>
              Please confirm your benificial account information before
              withdrawing. if your information is incorrect, out company will
              not be liable for the amount of loss
            </li>
            <li>
              {" "}
              If your beneficial information is incorrect, please contact
              customer service{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className={style.withdrawlHistory}>
        <Withdrawlhistory />
      </div>
    </>
  );
}

export default Widthdrawlpage;
