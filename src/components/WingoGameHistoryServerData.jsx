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
                <div className={style.data} style={{ width: "38%" }}>
                  {item.period}
                </div>
                <div
                  className={style.data}
                  style={{ textAlign: "center", width: "22%" }}
                >
                  {item.number}
                </div>
                <div className={style.data} style={{ width: "24%" }}>
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
                      <img src={green} style={{ marginLeft: "12px" }} />
                    ) : item.color === "redViolet" ? (
                      <img
                        src={redVilet}
                        style={{ width: "40px", height: "16px" }}
                      />
                    ) : (
                      item.color === "greenviolet" && (
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
                <div className={style.data} style={{ width: "38%" }}>
                  {item.period}
                </div>
                <div
                  className={style.data}
                  style={{ textAlign: "center", width: "22%" }}
                >
                  {item.number}
                </div>
                <div className={style.data} style={{ width: "24%" }}>
                  {item.size}
                </div>
                <div
                  className={style.data}
                  style={{ width: "14.9%", textAlign: "center" }}
                >
                  <div>
                    {item.color === "red" ? (
                      <img
                        className={style.Colorres}
                        src={red}
                        style={{ marginLeft: "12px" }}
                      />
                    ) : item.color === "green" ? (
                      <img src={green} style={{ marginLeft: "12px" }} />
                    ) : item.color === "redViolet" ? (
                      <img
                        src={redVilet}
                        style={{ width: "40px", height: "16px" }}
                      />
                    ) : (
                      item.color === "greenviolet" && (
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
                <div className={style.data} style={{ width: "38%" }}>
                  {item.period}
                </div>
                <div
                  className={style.data}
                  style={{ textAlign: "center", width: "22%" }}
                >
                  {item.number}
                </div>
                <div className={style.data} style={{ width: "24%" }}>
                  {item.size}
                </div>
                <div
                  className={style.data}
                  style={{ width: "14.9%", textAlign: "center" }}
                >
                  <div>
                    {item.color === "red" ? (
                      <img
                        className={style.Colorres}
                        src={red}
                        style={{ marginLeft: "12px" }}
                      />
                    ) : item.color === "green" ? (
                      <img src={green} style={{ marginLeft: "12px" }} />
                    ) : item.color === "redViolet" ? (
                      <img
                        src={redVilet}
                        style={{ width: "40px", height: "16px" }}
                      />
                    ) : (
                      item.color === "greenviolet" && (
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
                <div className={style.data} style={{ width: "38%" }}>
                  {item.period}
                </div>
                <div
                  className={style.data}
                  style={{ textAlign: "center", width: "22%" }}
                >
                  {item.number}
                </div>
                <div className={style.data} style={{ width: "24%" }}>
                  {item.size}
                </div>
                <div
                  className={style.data}
                  style={{ width: "14.9%", textAlign: "center" }}
                >
                  <div>
                    {item.color === "red" ? (
                      <img
                        className={style.Colorres}
                        src={red}
                        style={{ marginLeft: "12px" }}
                      />
                    ) : item.color === "green" ? (
                      <img src={green} style={{ marginLeft: "12px" }} />
                    ) : item.color === "redViolet" ? (
                      <img
                        src={redVilet}
                        style={{ width: "40px", height: "16px" }}
                      />
                    ) : (
                      item.color === "greenviolet" && (
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
