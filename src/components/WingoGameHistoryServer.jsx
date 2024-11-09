import style from "../css/WingoGameHostoryServer.module.css";
import WingoGameHistoryServerData from "./WingoGameHistoryServerData";
export default function WingoGameHistoryServer({ currenttimer }) {
  return (
    <>
      <div className={style.DataHeader}>
        <div
          id="period"
          className={style.DataHeadersSecond}
          style={{ width: "34%", textAlign: "center" }}
        >
          <b>Period</b>
        </div>
        <div id="number" className={style.DataHeadersSecond}>
          <b>Number</b>
        </div>
        <div
          id="big_small"
          className={style.DataHeadersSecond}
          style={{ width: "25%", textAlign: "center" }}
        >
          <b>size</b>
        </div>
        <div
          id="color"
          className={style.DataHeadersSecond}
          style={{ textAlign: "center" }}
        >
          <b>Color</b>
        </div>
      </div>
      <WingoGameHistoryServerData
        currenttimer={currenttimer}
      ></WingoGameHistoryServerData>
    </>
  );
}
