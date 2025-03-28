import { NavLink } from "react-router-dom";
import Notice from "./Notice";
import WalletDataForGames from "./WalletDataForGames";
import { WalletViewEffect } from "./WalletViewEffect";
import style from "../css/K3.module.css";
import logoActive from "../icons/time_a-f83ed4c7.png";
import { useContext, useEffect, useState } from "react";
import { data } from "../store/Contextprovider";
import dice1 from "../icons/dice1.png";
import dice2 from "../icons/dice2.png";
import dice3 from "../icons/dice3.png";
import resDie1 from "../icons/k3Spl_icons/dice1.svg";
import resDie2 from "../icons/k3Spl_icons/dice2.svg";
import resDie3 from "../icons/k3Spl_icons/dice3.svg";
import resDie4 from "../icons/k3Spl_icons/dice4.svg";
import resDie5 from "../icons/k3Spl_icons/dice5.svg";
import resDie6 from "../icons/k3Spl_icons/dice6.svg";
export const K3 = () => {
  const [currentsec, changesec] = useState("00");
  const [upcomingperiod, changeUpcomingPreiod] = useState(265621);
  const [option, changeOption] = useState("");
  const [blocker, changeBlocker] = useState(false);
  const [ActiveTab, setActiveTab] = useState("gamehistory");
  const { ws, k3data } = useContext(data);
  useEffect(() => {
    ws.on("message", (msg) => {
      if (msg.seconds >= 55) {
        changeBlocker(true);
      } else {
        changeBlocker(false);
      }
      if (msg.seconds) {
        changesec(Math.abs(msg.seconds - 60).toString());
      }
    });
    return () => {
      ws.off("message");
    };
  }, [ws]);
  return (
    <>
      <WalletViewEffect>
        <WalletDataForGames></WalletDataForGames>
        <Notice></Notice>
        {/* wingo timer for one minutes setting */}
        <div className={style.GameTimer}>
          <NavLink
            to="/wingo"
            className={style.Options}
            style={{ backgroundColor: "orange", color: "white" }}
          >
            <img
              alt="img"
              id="one"
              className={style.OptionsImage}
              src={logoActive}
            />
            <div class="count">
              <p>k3</p>
              <p> 1 Min</p>
            </div>
          </NavLink>
        </div>
        {/* time selection info ends here */}
      </WalletViewEffect>
      {
        //timer section
      }
      <div className={style.timer}>
        <div class={style.twosectionsspl}>
          <p className={style.insts}>Coming up</p>
          <p className={style.currentround}>{upcomingperiod}</p>
        </div>
        <div class={style.twosectionSpll}>
          <p className={style.timenotice}>Time remaining</p>
          <p className={style.time}>
            {currentsec === "60" ? (
              <b>
                <span className={style.min} id="min_first">
                  0
                </span>
                <span className={style.min} id="min_sec">
                  1
                </span>
                <span className={style.min} id="min_colen">
                  :
                </span>
                <span className={style.min} id="second_first">
                  0
                </span>
                <span className={style.min} id="second_second">
                  0
                </span>
              </b>
            ) : (
              <b>
                <span className={style.min} id="min_first">
                  0
                </span>
                <span className={style.min} id="min_sec">
                  0
                </span>
                <span className={style.min} id="min_colen">
                  :
                </span>
                <span className={style.min} id="second_first">
                  {currentsec.length == "2"
                    ? currentsec[0]
                    : currentsec.length == "1" && "0"}
                </span>
                <span className={style.min} id="second_second">
                  {currentsec.length == "2"
                    ? currentsec[1]
                    : currentsec.length == "1" && currentsec[0]}
                </span>
              </b>
            )}
          </p>
        </div>
      </div>
      {
        // result in form of dice
      }
      <div className={style.diceAreamainframe}>
        <div className={style.mainDiceBox}>
          <div className={style.innerDicebox}>
            <div className={style.individualDicebox}>
              <img src={dice1} alt="dice" className={style.diceLogo} />
            </div>
            <div className={style.individualDicebox}>
              <img src={dice2} alt="dice" className={style.diceLogo} />
            </div>
            <div className={style.individualDicebox}>
              <img src={dice3} alt="dice" className={style.diceLogo} />
            </div>
          </div>
        </div>
      </div>
      {/* wingo color options  */}
      <div className={style.ColoOptions}>
        {/* this is blocker overlay */}
        <div className={blocker ? style.blocker : style.offblocker}>
          <div className={style.middlecontainer}>
            <h1>0</h1>
            <h1>{currentsec}</h1>
          </div>
        </div>
        <button
          className={style.green}
          onClick={() => {
            changeOption("even");
          }}
        >
          Even
        </button>

        <button
          className={style.red}
          onClick={() => {
            changeOption("odd");
          }}
          style={{ marginBottom: 10 }}
        >
          Odd
        </button>

        <div
          className={style.numberSections}
          style={{
            marginTop: "15px",
            borderRadius: "10px 10px 0 0",
            paddingTop: 5,
          }}
        >
          <div className={style.numbers}>
            <p>3</p>
          </div>
          <div className={style.numbers}>
            <p>4</p>
          </div>
          <div className={style.numbers}>
            <p>5</p>
          </div>
          <div className={style.numbers}>
            <p>6</p>
          </div>
        </div>

        <div
          className={style.numberSections}
          style={{ borderRadius: "0px 0px 10px 10px", height: "69px" }}
        >
          <div className={style.numbers}>
            <p>7</p>
          </div>
          <div className={style.numbers}>
            <p>8</p>
          </div>
          <div className={style.numbers}>
            <p>9</p>
          </div>
          <div className={style.numbers}>
            <p>10</p>
          </div>
        </div>
        <div
          className={style.numberSections}
          style={{ borderRadius: "0px 0px 10px 10px", height: "69px" }}
        >
          <div className={style.numbers}>
            <p>11</p>
          </div>{" "}
          <div className={style.numbers}>
            <p>12</p>
          </div>{" "}
          <div className={style.numbers}>
            <p>13</p>
          </div>{" "}
          <div className={style.numbers}>
            <p>14</p>
          </div>
        </div>
        <div
          className={style.numberSections}
          style={{ borderRadius: "0px 0px 10px 10px", height: "69px" }}
        >
          <div className={style.numbers}>
            <p>15</p>
          </div>{" "}
          <div className={style.numbers}>
            <p>16</p>
          </div>{" "}
          <div className={style.numbers}>
            <p>17</p>
          </div>{" "}
          <div className={style.numbers}>
            <p>18</p>
          </div>
        </div>
        <div className={style.BetBigSmall}>
          <b>
            <p
              onClick={() => {
                changeOption("Big");
              }}
              style={{ backgroundColor: "orange" }}
            >
              Big
            </p>
            <p
              onclick="selection_color('small')"
              style={{ backgroundColor: "#6ea8f4" }}
              onClick={() => {
                changeOption("Small");
              }}
            >
              Small
            </p>
          </b>
        </div>
      </div>
      {
        // result and history area
      }
      <div className={style.TabSwitcherMain}>
        <div
          className={`${style.sectionTab} ${
            ActiveTab == "gamehistory" && style.ActiveTab
          }`}
          onClick={() => {
            setActiveTab("gamehistory");
          }}
        >
          <p>Game history</p>
        </div>
        <div
          className={`${style.sectionTab} ${
            ActiveTab == "myhistory" && style.ActiveTab
          }`}
          onClick={() => {
            setActiveTab("myhistory");
          }}
        >
          <p>My histroy</p>
        </div>
      </div>
      {ActiveTab == "gamehistory" ? (
        <div className={style.resultArea}>
          <div className={style.resultHeader}>
            <div className={style.individualResultHeader}>
              <p>Period</p>
            </div>
            <div className={style.individualResultHeader}>
              <p>Pips</p>
            </div>
            <div className={style.individualResultHeader}>
              <p>B/S</p>
            </div>
            <div className={style.individualResultHeader}>
              <p>O/E</p>
            </div>
            <div className={style.individualResultHeader}>
              <p>result</p>
            </div>
          </div>
          {k3data ? (
            k3data.map((item) => {
              return (
                <div className={style.resultColumn}>
                  <div className={style.resultRow}>
                    <p>{item.period}</p>
                    <p>{item.pips}</p>
                    <p
                      style={
                        item.size == "Small"
                          ? { color: "#6EA8F4" }
                          : { color: "#FFA500" }
                      }
                    >
                      {item.size}
                    </p>
                    <p
                      style={
                        item.oddEven == "Even"
                          ? { color: "#18B660" }
                          : { color: "red" }
                      }
                    >
                      {item.oddEven}
                    </p>
                    <p>
                      {item.result.split(",").map((item) => {
                        return (
                          <img
                            className={style.resultDieLogo}
                            src={
                              item == "1"
                                ? resDie1
                                : item == "2"
                                ? resDie2
                                : item == "3"
                                ? resDie3
                                : item == "4"
                                ? resDie4
                                : item == "5"
                                ? resDie5
                                : resDie6
                            }
                          />
                        );
                      })}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <center>No data</center>
            </div>
          )}
        </div>
      ) : (
        <p>my history</p>
      )}
    </>
  );
};
