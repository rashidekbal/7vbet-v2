import { useState } from "react";
import style from "../css/StatsWingo.module.css";
import WingoGameHistoryServer from "./WingoGameHistoryServer";
import WingoServerChart from "./WingoServerChart";
import WingoPersonalHistory from "./WingoPersonalHistory";
export default function StatsWingo({ currenttimer }) {
  const [tab, change] = useState("serverhistory");
  const [cdata, changecdata] = useState("serverhistory");
  function changeData(args) {
    change(args);
    changecdata(args);
  }
  return (
    <>
      <div className={style.GamesStat}>
        {cdata === "serverhistory" ? (
          <div
            onClick={() => {
              changeData("Serverhistory");
            }}
            className={style.historyCommon}
            style={{
              backgroundColor: "orange",
              textAlign: "center",
              color: "white",
              marginRight: "10px",
              fontSize: "small",
              width: "108px",
            }}
          >
            History
          </div>
        ) : (
          <div
            onClick={() => {
              changeData("serverhistory");
            }}
            className={style.historyCommon}
            style={{
              backgroundColor: "white",
              textAlign: "center",
              color: "black",
              marginRight: "10px",
              fontSize: "small",
              width: "108px",
            }}
          >
            Game history
          </div>
        )}
        {cdata === "chart" ? (
          <div
            onClick={() => {
              changeData("chart");
            }}
            id="chart"
            className={style.historyCommon}
            style={{
              width: "100px",
              textAlign: "center",
              margin: "0 14px",
              fontSize: "small",
              backgroundColor: "orange",
              color: "white",
            }}
          >
            Chart
          </div>
        ) : (
          <div
            onClick={() => {
              changeData("chart");
            }}
            id="chart"
            className={style.historyCommon}
            style={{
              width: "100px",
              textAlign: "center",
              margin: "0 14px",
              fontSize: "small",
              backgroundColor: "white",
              color: "black",
            }}
          >
            Chart
          </div>
        )}
        {cdata === "mybetHistorys" ? (
          <div
            id="My_bet"
            className={style.historyCommon}
            onClick={() => {
              changeData("mybetHistorys");
            }}
            style={{
              width: "100px",
              marginLeft: "12px",
              textAlign: "center",
              fontSize: "small",
              backgroundColor: "orange",
              color: "white",
            }}
          >
            My history{" "}
          </div>
        ) : (
          <div
            id="My_bet"
            className={style.historyCommon}
            onClick={() => {
              changeData("mybetHistorys");
            }}
            style={{
              width: "100px",
              marginLeft: "12px",
              textAlign: "center",
              fontSize: "small",
              backgroundColor: "white",
              color: "black",
            }}
          >
            My history{" "}
          </div>
        )}
      </div>
    </>
  );
}
