import React from "react";
import style from "../css/Userbethistory.module.css";

function UserbetHistorycard({ data }) {
  return (
    <>
      <div className={style.main}>
        <div
          className={
            data.choice == "0"
              ? style.resultzero
              : data.choice == "5"
              ? style.resultfive
              : data.choice == "red"
              ? style.resulteven
              : data.choice == "green"
              ? style.resultodd
              : data.choice == "violet"
              ? style.resultviol
              : data.choice == "Big"
              ? style.resultbig
              : data.choice == "small"
              ? style.resultsmall
              : Number(data.choice) % 2 == 0
              ? style.resulteven
              : style.resultodd
          }
        >
          {data.choice}
        </div>
        <div className={style.periodTime}>
          <div className={style.period}>{data.period}</div>
          <div className={style.time}>{data.BetTime}</div>
        </div>
        <div className={style.amount}>
          {data.status == "pending" ? (
            <div style={{ color: "orange", textAlign: "center" }}>pending</div>
          ) : (
            <div className={data.status == "win" ? style.sucess : style.fail}>
              {data.status == "win" ? "sucess" : "failed"}
            </div>
          )}
          {data.status == "pending" ? (
            <div></div>
          ) : (
            <div
              className={
                data.status == "win" ? style.winamount : style.losseamount
              }
            >
              <span>{data.status == "win" ? " + " : " - "}</span>
              {data.status == "win" ? data.wlAmount : data.amount}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserbetHistorycard;
