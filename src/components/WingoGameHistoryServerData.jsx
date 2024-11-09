import { useContext } from "react";
import { data } from "../store/Contextprovider";
import style from "../css/WingoGameHistoryServerData.module.css";
import green from "../icons/green.png";
import red from "../icons/red.png";
import redVilet from "../icons/redviolet.png";
import greenViolet from "../icons/greenviolet.png";
export default function WingoGameHistoryServerData({ currenttimer }) {
  const {
    WingoServerData1min,
    WingoServerData3min,
    WingoServerData5min,
    WingoServerData10min,
  } = useContext(data);

  return (
    <>
      {currenttimer === "1"
        ? WingoServerData1min.map((item) => (
            <div className={style.gameHistoryData}>
              <div className={style.DataHolder}>
                <div
                  className={style.data}
                  style={{ width: "38%", fontSize: "17px" }}
                >
                  {item.period}
                </div>
                <div
                  className={style.data}
                  style={{
                    textAlign: "center",
                    width: "22%",
                    fontSize: "17px",
                  }}
                >
                  {item.number}
                </div>
                <div
                  className={style.data}
                  style={{ width: "24%", fontSize: "17px" }}
                >
                  {item.size}
                </div>
                <div
                  className={style.data}
                  style={{
                    width: "40px",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <div>
                    {item.color === "red" ? (
                      <img
                        className={style.Colorres}
                        src={red}
                        style={{ marginLeft: "12px" }}
                      />
                    ) : item.color === "green" ? (
                      <img
                        src={green}
                        style={{ marginLeft: "12px", height: "14px" }}
                      />
                    ) : item.color === "redViolet" ? (
                      <img
                        src={redVilet}
                        style={{ width: "40px", height: "16px" }}
                      />
                    ) : (
                      item.color === "greenViolet" && (
                        <img
                          src={greenViolet}
                          style={{ width: "40px", height: "16px" }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        : currenttimer === "3"
        ? WingoServerData3min.map((item) => (
            <div className={style.gameHistoryData}>
              <div className={style.DataHolder}>
                <div
                  className={style.data}
                  style={{ width: "38%", fontSize: "17px" }}
                >
                  {item.period}
                </div>
                <div
                  className={style.data}
                  style={{
                    textAlign: "center",
                    width: "22%",
                    fontSize: "17px",
                  }}
                >
                  {item.number}
                </div>
                <div
                  className={style.data}
                  style={{ width: "24%", fontSize: "17px" }}
                >
                  {item.size}
                </div>
                <div
                  className={style.data}
                  style={{
                    width: "40px",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <div>
                    {item.color === "red" ? (
                      <img
                        className={style.Colorres}
                        src={red}
                        style={{ marginLeft: "12px" }}
                      />
                    ) : item.color === "green" ? (
                      <img
                        src={green}
                        style={{ marginLeft: "12px", height: "14px" }}
                      />
                    ) : item.color === "redViolet" ? (
                      <img
                        src={redVilet}
                        style={{ width: "40px", height: "16px" }}
                      />
                    ) : (
                      item.color === "greenViolet" && (
                        <img
                          src={greenViolet}
                          style={{ width: "40px", height: "16px" }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        : currenttimer === "5"
        ? WingoServerData5min.map((item) => (
            <div className={style.gameHistoryData}>
              <div className={style.DataHolder}>
                <div
                  className={style.data}
                  style={{ width: "38%", fontSize: "17px" }}
                >
                  {item.period}
                </div>
                <div
                  className={style.data}
                  style={{
                    textAlign: "center",
                    width: "22%",
                    fontSize: "17px",
                  }}
                >
                  {item.number}
                </div>
                <div
                  className={style.data}
                  style={{ width: "24%", fontSize: "17px" }}
                >
                  {item.size}
                </div>
                <div
                  className={style.data}
                  style={{
                    width: "40px",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <div>
                    {item.color === "red" ? (
                      <img
                        className={style.Colorres}
                        src={red}
                        style={{ marginLeft: "12px" }}
                      />
                    ) : item.color === "green" ? (
                      <img
                        src={green}
                        style={{ marginLeft: "12px", height: "14px" }}
                      />
                    ) : item.color === "redViolet" ? (
                      <img
                        src={redVilet}
                        style={{ width: "40px", height: "16px" }}
                      />
                    ) : (
                      item.color === "greenViolet" && (
                        <img
                          src={greenViolet}
                          style={{ width: "40px", height: "16px" }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        : currenttimer === "10" &&
          WingoServerData10min.map((item) => (
            <div className={style.gameHistoryData}>
              <div className={style.DataHolder}>
                <div
                  className={style.data}
                  style={{ width: "38%", fontSize: "17px" }}
                >
                  {item.period}
                </div>
                <div
                  className={style.data}
                  style={{
                    textAlign: "center",
                    width: "22%",
                    fontSize: "17px",
                  }}
                >
                  {item.number}
                </div>
                <div
                  className={style.data}
                  style={{ width: "24%", fontSize: "17px" }}
                >
                  {item.size}
                </div>
                <div
                  className={style.data}
                  style={{
                    width: "40px",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <div>
                    {item.color === "red" ? (
                      <img
                        className={style.Colorres}
                        src={red}
                        style={{ marginLeft: "12px" }}
                      />
                    ) : item.color === "green" ? (
                      <img
                        src={green}
                        style={{ marginLeft: "12px", height: "14px" }}
                      />
                    ) : item.color === "redViolet" ? (
                      <img
                        src={redVilet}
                        style={{ width: "40px", height: "16px" }}
                      />
                    ) : (
                      item.color === "greenViolet" && (
                        <img
                          src={greenViolet}
                          style={{ width: "40px", height: "16px" }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
    </>
  );
}
