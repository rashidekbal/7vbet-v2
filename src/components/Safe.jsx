import React, { useContext, useState } from "react";
import style from "../css/Safe.module.css";
import { FaRupeeSign } from "react-icons/fa";
import { data } from "../store/Contextprovider";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import tip from "../icons/tip-0498e3f9.png";
import { AiOutlineClose } from "react-icons/ai";

function Safe() {
  const [popupstate, changepopupstate] = useState("no");
  let { totalrevenuesafe, safeRevenue, currentintrestrate } = useContext(data);
  const [input, inputshow] = useState("no");
  let { account_balance } = useContext(data);
  const [multiplier, changeMultiplier] = useState(2);

  return (
    <>
      <div className={style.heading}>
        <p>Safe</p>
      </div>
      <div className={style.intrest}>
        <p>Intrest rate {currentintrestrate}%</p>
      </div>
      <div className={style.walletView}>
        <div className={style.first}>
          <div className={style.vaultimage}>
            <svg
              style={{
                height: "25px",
                width: "60px",
                display: "inline-block",
                verticalAlign: "middle",
              }}
              data-v-acd6d46f=""
              class="svg-icon icon-vault"
            >
              <use xlinkHref="#icon-vault"></use>
            </svg>
          </div>
          <div className={style.right}>
            <div>
              <p style={{ verticalAlign: "middle" }}>
                <svg
                  data-v-d24f0506=""
                  class="svg-icon icon-safeIcon"
                  style={{
                    height: "13px",
                    width: "25px",
                    verticalAlign: "middle",
                  }}
                >
                  <use xlinkHref="#icon-safeIcon"></use>
                </svg>
                Financial security
              </p>
            </div>
          </div>
        </div>
        <div className={style.second}>
          <h1 style={{ marginLeft: "20px" }}>
            <span style={{ color: "white" }}>
              <FaRupeeSign
                className={style.logo}
                style={{ fontSize: "18px" }}
              />
            </span>
            <span
              style={{ fontSize: "27px", marginLeft: "-7px", color: "white" }}
            >
              {" "}
              0.00
            </span>
          </h1>
        </div>
        <div className={style.third}>
          <p
            style={{
              verticalAlign: "middle",
              marginLeft: "20px",
              color: "white",
              fontSize: "12px",
              marginTop: "5px",
            }}
          >
            24-hour estimated revenue
            <span style={{ color: "white", verticalAlign: "middle" }}>
              <FaRupeeSign
                className={style.logo}
                style={{ fontSize: "14px", marginLeft: "4px" }}
              />
            </span>
            <span
              style={{
                fontSize: "19px",
                marginLeft: "-7px",
                color: "white",
                verticalAlign: "middle",
              }}
            >
              {" "}
              0.00
            </span>
          </p>
        </div>
      </div>
      <div className={style.mainView}>
        <div className={style.data}>
          <div>
            <p>
              {" "}
              <span style={{ color: "red", fontSize: "20px" }}>
                {" "}
                <FaRupeeSign
                  className={style.logo}
                  style={{ fontSize: "14px", color: "red" }}
                />
                {safeRevenue}
              </span>
            </p>
            <p style={{ fontSize: "13px" }}>Generated revenue</p>
          </div>
          <div>
            <p>
              <span style={{ color: "black", fontSize: "20px" }}>
                <FaRupeeSign
                  className={style.logo}
                  style={{ fontSize: "14px", color: "black" }}
                />
                {totalrevenuesafe}
              </span>
            </p>
            <p style={{ fontSize: "13px" }}>Accumulated revenue</p>
          </div>
        </div>
        <p className={style.intersinfo}>
          My intrest rate {currentintrestrate}%
        </p>
        <div className={style.btnholder}>
          <div>
            <button
              onClick={() => {
                changepopupstate("yes");
              }}
            >
              Transfer Out{" "}
            </button>
          </div>
          <div>
            <button
              style={{ color: "white", backgroundColor: "orange" }}
              onClick={() => {
                inputshow("yes");
              }}
            >
              Transfer In
            </button>
          </div>
        </div>
        <div>
          <p className={style.notice}>
            <span>
              <FaCircleExclamation
                style={{ fontSize: "12px", verticalAlign: "middle" }}
              />
            </span>{" "}
            Funds are safe and secure, and can be transfered at any time
          </p>
        </div>
        <div className={style.extra}>
          <p>
            Learn more about safes{" "}
            <span>
              <FaAngleDoubleRight
                style={{ fontSize: "12px", verticalAlign: "middle" }}
              />
            </span>
          </p>
        </div>
      </div>
      <div className={style.history}>
        <p>
          {" "}
          <span
            style={{
              display: "inline-block",
              overflow: "hidden",
              width: "50px",

              height: "40px",
              verticalAlign: "middle",
            }}
          >
            <svg
              data-v-002ff529=""
              class="svg-icon icon-historyHead"
              style={{ width: "28px", height: "40px" }}
            >
              <use xlinkHref="#icon-historyHead"></use>
            </svg>
          </span>
          Historical records
        </p>
      </div>
      <div className={style.historybtn}>
        <button>All histroy</button>
      </div>
      {/*this is popup of no current added safe balance*/}
      <div className={popupstate == "yes" ? style.showpopup : style.hidepopup}>
        <div className={style.tipimage}>
          <img src={tip} alt="" />
        </div>
        <p
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            textAlign: "center",
            display: "block",
            width: "100%",
            marginTop: "8px",
          }}
        >
          No income
        </p>
        <p
          style={{
            fontSize: "13px",
            color: "#a4a4a4",
            textAlign: "center",
            display: "block",
            width: "100%",
            marginTop: "5px",
          }}
        >
          No income at this moment, want to transfer out
        </p>
        <button
          className={style.btn}
          style={{
            marginTop: "28px",
            backgroundColor: "orange",
            color: "white",
          }}
          onClick={() => {
            changepopupstate("no");
            alert("sucess");
          }}
        >
          Transfer Out
        </button>
        <button
          onClick={() => {
            changepopupstate("no");
          }}
          className={style.btn}
        >
          Cancel
        </button>
      </div>
      {/*no current balance pop ends here*/}
      {/* from here input method starts */}

      <div className={input == "yes" ? style.showInput : style.hideInput}>
        <form
          action="post"
          onSubmit={(event) => {
            event.preventDefault();
          }}
          style={{ position: "relative", height: "100%", width: "100%" }}
        >
          <div className={style.inputheading}>
            <p className={style.headingslogan}>Transfer In</p>
            <div>
              <AiOutlineClose
                onClick={() => {
                  inputshow("no");
                  changeMultiplier("");
                }}
              />
            </div>
          </div>
          <p className={style.secondslogan}>
            Each amount <span>1000</span>
          </p>

          <div className={style.inputDiv}>
            <input
              type="number"
              maxLength="1000"
              placeholder="Please enter Quantity"
              value={multiplier}
              onChange={(event) => {
                changeMultiplier(event.target.value);
              }}
            />
            <p>All</p>
          </div>
          {multiplier * 1000 > account_balance && (
            <p className={style.notice}>
              <span>
                <FaCircleExclamation
                  style={{ fontSize: "12px", verticalAlign: "middle" }}
                />
              </span>{" "}
              Insufficient amount available
            </p>
          )}
          <div className={style.buttonsHolder}>
            <div className={style.row}>
              <button
                className={
                  multiplier == 2 ? style.checkedButton : style.unckeckedbutton
                }
                onClick={() => {
                  changeMultiplier(2);
                }}
              >
                2x
              </button>
              <button
                className={
                  multiplier == 5 ? style.checkedButton : style.unckeckedbutton
                }
                onClick={() => {
                  changeMultiplier(5);
                }}
              >
                5x
              </button>
              <button
                className={
                  multiplier == 10 ? style.checkedButton : style.unckeckedbutton
                }
                onClick={() => {
                  changeMultiplier(10);
                }}
              >
                10x
              </button>
              <button
                className={
                  multiplier == 50 ? style.checkedButton : style.unckeckedbutton
                }
                onClick={() => {
                  changeMultiplier(50);
                }}
              >
                50x
              </button>
            </div>
            <div className={style.row}>
              <button
                className={
                  multiplier == 100
                    ? style.checkedButton
                    : style.unckeckedbutton
                }
                onClick={() => {
                  changeMultiplier(100);
                }}
              >
                100x
              </button>
              <button
                className={
                  multiplier == 200
                    ? style.checkedButton
                    : style.unckeckedbutton
                }
                onClick={() => {
                  changeMultiplier(200);
                }}
              >
                200x
              </button>
              <button
                className={
                  multiplier == 500
                    ? style.checkedButton
                    : style.unckeckedbutton
                }
                onClick={() => {
                  changeMultiplier(500);
                }}
              >
                500x
              </button>
              <button
                className={
                  multiplier == 1000
                    ? style.checkedButton
                    : style.unckeckedbutton
                }
                onClick={() => {
                  changeMultiplier(1000);
                }}
              >
                1000x
              </button>
            </div>
          </div>
          <div className={style.availablebalanceView}>
            <p>Amount available</p>
            <p>
              <span
                style={{ color: "black", fontSize: "16px", color: "black" }}
              >
                <FaRupeeSign
                  className={style.logo}
                  style={{ fontSize: "12px", color: "black" }}
                />
                {account_balance}
              </span>
            </p>
          </div>
          <div className={style.availablebalanceView}>
            <p>Amount to be transfered</p>
            <p>
              <span style={{ color: "black", fontSize: "16px", color: "red" }}>
                <FaRupeeSign
                  className={style.logo}
                  style={{ fontSize: "12px", color: "red" }}
                />
                {multiplier * 1000}
              </span>
            </p>
          </div>
          <p className={style.estimated}>
            24-hour estimated revenue{" "}
            <span style={{ color: "black", fontSize: "16px", color: "red" }}>
              <FaRupeeSign
                className={style.logo}
                style={{ fontSize: "12px", color: "red" }}
              />
              {multiplier * 10 * currentintrestrate}
            </span>
          </p>
          <div className={style.finalbutton}>
            <input
              type="submit"
              value="Transfer In"
              onClick={() => {
                if (multiplier <= 0) {
                  alert("please add amount first");
                } else {
                  inputshow("no");
                  alert("sucess");
                  changeMultiplier("");
                }
              }}
            />
          </div>
        </form>
      </div>

      {/* over here input method ends */}
    </>
  );
}

export default Safe;
