import React, { useContext, useState } from "react";
import style from "../css/Depositehistorypage.module.css";
import { CiGrid42 } from "react-icons/ci";
import upi from "../icons/upi.png";
import bankcard from "../icons/bankcard.png";
import usdt from "../icons/usdt.png";
import Depositehistorypostcards from "./Depositehistorypostcards";
import { data } from "../store/Contextprovider";
//<CiGrid42 />
function DepositHistoryPage() {
  const [currenttab, changetab] = useState("all");
  const [dateins, dateinschange] = useState(true);
  const tabchanger = (val) => {
    changetab(val);
  };
  let info = useContext(data);
  return (
    <>
      <div className={style.header}>Deposit history</div>
      <div className={style.OptionSlider}>
        <div
          className={currenttab === "all" ? style.selected : style.option}
          onClick={() => {
            tabchanger("all");
          }}
        >
          <p>
            <CiGrid42
              style={{
                fontSize: "20px",
                verticalAlign: "middle",
                marginRight: "5px",
              }}
            />
            All
          </p>
        </div>
        <div
          className={currenttab === "upi" ? style.selected : style.option}
          onClick={() => {
            tabchanger("upi");
          }}
        >
          <p>
            <img src={upi} alt="image" className={style.optionImg} /> UPI
          </p>
        </div>
        <div
          className={currenttab === "bankcard" ? style.selected : style.option}
          onClick={() => {
            tabchanger("bankcard");
          }}
        >
          {" "}
          <p>
            <img
              src={bankcard}
              alt="image"
              className={style.optionImg}
              style={{ height: "13px", paddingRight: "2px" }}
            />{" "}
            Bank
          </p>
        </div>
        <div
          className={currenttab === "usdt" ? style.selected : style.option}
          onClick={() => {
            tabchanger("usdt");
          }}
        >
          {" "}
          <p>
            <img
              src={usdt}
              alt="image"
              className={style.optionImg}
              style={{ height: "18px" }}
            />{" "}
            Usdt
          </p>
        </div>
      </div>
      <div className={style.dropdownholder}>
        <div className={`${style.catagory} ${style.flexItem}`}>
          <select className={style.select}>
            <option value="upi">Upi</option>
            <option value="bankcard">Bankcard</option>
            <option value="paytm">Paytm</option>
            <option value="usdt"> Usdt</option>
          </select>
        </div>
        <div className={`${style.choosedate} ${style.flexItem}`}>
          <div style={{ position: "relative" }}>
            <input
              type="date"
              className={style.datepicker}
              onChange={() => {
                dateinschange(false);
              }}
            />
            <p className={dateins === true ? style.p : style.invisible}>
              Choose a date
            </p>
          </div>
        </div>
      </div>

      <div style={{ width: "94%", margin: "0 auto" }}>
        <Depositehistorypostcards data={info.rechargehistory} />
      </div>
    </>
  );
}

export default DepositHistoryPage;
