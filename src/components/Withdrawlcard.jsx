import React, { useContext } from "react";
import style from "../css/Historycards.module.css";
import { PiGreaterThanBold } from "react-icons/pi";
import { FaRupeeSign } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";

function Withdrawlcard({ data }) {
  function copydata(args) {
    navigator.clipboard.writeText(args);
  }
  return (
    <div>
      <div className={style.card}>
        <div className={style.status}>
          {data.status === "complete" ? (
            <p
              style={{
                backgroundColor: "rgb(0,153,51)",
                display: "inline-block",
                padding: "4px 10px",
                borderRadius: "4px",
                color: "white",
              }}
            >
              Withdrawl
            </p>
          ) : (
            <p
              style={{
                backgroundColor: "red",
                display: "inline-block",
                padding: "4px 10px",
                borderRadius: "4px",
                color: "white",
              }}
            >
              Withdrawl
            </p>
          )}
          <p
            style={{
              color: "rgb(0,204,0)",
              display: "inline-block",
              verticalAlign: "middle",
              float: "right",
            }}
          >
            {data.status === "complete" ? (
              <span
                style={{
                  color: "green",
                }}
              >
                {data.status}
              </span>
            ) : (
              <span style={{ color: "red" }}>{data.status}</span>
            )}
          </p>
        </div>
        <div className={style.dataholder}>
          <p className={style.left}>Balance</p>
          <p className={style.right} style={{ color: "orange" }}>
            <span>
              {" "}
              <FaRupeeSign
                style={{
                  fontSize: "11px",
                  marginLeft: "0px",
                  color: "orange",
                }}
              ></FaRupeeSign>
            </span>
            {data.balance}
          </p>
        </div>
        <div className={style.dataholder}>
          <p className={style.left}>Channel</p>
          <p className={style.right}>{data.channel}</p>
        </div>
        <div className={style.dataholder}>
          <p className={style.left}>Time</p>
          <p className={style.right}>{data.time}</p>
        </div>
        <div className={style.dataholder}>
          <p className={style.left}>Order number</p>
          <p className={style.right}>
            {data.orderid}
            <IoCopyOutline
              style={{ fontSize: "10px", marginLeft: "2px" }}
              onClick={() => {
                copydata(data.orderid);
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Withdrawlcard;
