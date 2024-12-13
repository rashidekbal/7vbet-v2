import React, { useContext, useEffect, useRef, useState } from "react";
import style from "./css/wingo.module.css";
import { WalletViewEffect } from "../WalletViewEffect";
import WalletDataForGames from "../WalletDataForGames";

import Notice from "../Notice";
import logoActive from "../../icons/time_a-f83ed4c7.png";
import logoInactive from "../../icons/time-5d4e96a3.png";
import number0 from "../../icons/n0-30bd92d1.png";
import number1 from "../../icons/n1-dfccbff5.png";
import number2 from "../../icons/n2-c2913607.png";
import number3 from "../../icons/n3-f92c313f.png";
import number4 from "../../icons/n4-cb84933b.png";
import number5 from "../../icons/n5-49d0e9c5.png";
import number6 from "../../icons/n6-a56e0b9a.png";
import number7 from "../../icons/n7-5961a17f.png";
import number8 from "../../icons/n8-d4d951a4.png";
import number9 from "../../icons/n9-a20f6f42.png";
import StatsWingo from "../StatsWingo";
import { NavLink } from "react-router-dom";
import { data } from "../../store/Contextprovider";
function Wingo5minute() {
  const [blocker, changeblocker] = useState("no");
  const [timer, changetimer] = useState();
  const [selection, changeSelection] = useState("Big");
  const [balanceSelection, changeBalanceSelection] = useState(1);
  const [MultiplierSelection, changeMultiplierSelection] = useState(1);
  const [quantity, changeQuantity] = useState(1);
  const [BetTab, changeBetTab] = useState("off");
  const [currentsec, changesec] = useState("");
  const [currentmin, changemin] = useState("");

  const [upcomingperiod, changeupcomingperiod] = useState();
  let periodspecialminute = useRef();
  function periodchanger() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min =
      periodspecialminute.minute +
      Math.abs((periodspecialminute.minute % 5) - 5);
    let period = `${year}${month}${day}${hour == 0 ? `00` : hour}${
      min == 0 ? `60` : min < 10 ? "0" + min : min
    }`;
    changeupcomingperiod(period);
  }
  const {
    uid,
    setWingo5minbet,
    userfinance,
    getwingo5min,
    ws,
    getUserfinances,
  } = useContext(data);
  useEffect(() => {
    getwingo5min();
    setTimeout(() => {
      periodchanger();
    }, 1000);
  }, []);
  let currentTime = useRef({});
  ws.on("message", (msg) => {
    periodspecialminute.minute = msg.minute;
    changemin(Math.abs((msg.minute % 5) - 5));

    changesec(Math.abs(msg.seconds - 60).toString());
    if (currentmin == 1) {
      if (currentsec == 1) {
        getwingo5min();
        periodchanger();
        getUserfinances(String(window.sessionStorage.getItem("uid")));
      }
    }
  });
  return (
    <div style={{ position: "relative" }}>
      {" "}
      <WalletViewEffect>
        <WalletDataForGames></WalletDataForGames>
        <Notice></Notice>
        {/* wingo timer for one minutes setting */}
        <div className={style.GameTimer}>
          <NavLink to="/wingo" className={style.Options}>
            <img
              alt="img"
              id="one"
              className={style.OptionsImage}
              src={logoInactive}
            />
            <div class="count">
              <p>Win Go</p>
              <p>30sec</p>
            </div>
          </NavLink>
          <NavLink to="/wingo1min" className={style.Options}>
            <img
              alt="img"
              id="one"
              className={style.OptionsImage}
              src={logoInactive}
            />
            <div class="count">
              <p>Win Go</p>
              <p>1Min</p>
            </div>
          </NavLink>
          <NavLink to="/wingo3min" className={style.Options}>
            <img
              alt="img"
              id="one"
              className={style.OptionsImage}
              src={logoInactive}
            />
            <div class="count">
              <p>Win Go</p>
              <p>3Min</p>
            </div>
          </NavLink>
          <NavLink
            to="/wingo5min"
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
              <p>Win Go</p>
              <p>5Min</p>
            </div>
          </NavLink>
        </div>
        {/* time selection info ends here */}
      </WalletViewEffect>
      {/*timer section */}
      <div className={style.timer}>
        <div class={style.twosectionsspl}>
          <p className={style.insts}>How to play</p>
          <p className={style.selectedsetting}>Win Go 3Min</p>

          <div className={style.peek}>
            <div className={style.peekitem}>
              <img className={style.peekresult} src={number0} />
            </div>

            <div className={style.peekitem}>
              <img className={style.peekresult} src={number1} />
            </div>

            <div className={style.peekitem}>
              <img className={style.peekresult} src={number5} />
            </div>

            <div className={style.peekitem}>
              <img className={style.peekresult} src={number0} />
            </div>

            <div className={style.peekitem}>
              <img className={style.peekresult} src={number0} />
            </div>
          </div>
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
                  {Math.abs(currentmin - 1)}
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
            ) : currentsec.length === 2 ? (
              <b>
                <span className={style.min} id="min_first">
                  0
                </span>
                <span className={style.min} id="min_sec">
                  {Math.abs(currentmin - 1)}
                </span>
                <span className={style.min} id="min_colen">
                  :
                </span>
                <span className={style.min} id="second_first">
                  {currentsec[0]}
                </span>
                <span className={style.min} id="second_second">
                  {currentsec[1]}
                </span>
              </b>
            ) : (
              <b>
                <span className={style.min} id="min_first">
                  0
                </span>
                <span className={style.min} id="min_sec">
                  {Math.abs(currentmin - 1)}
                </span>
                <span className={style.min} id="min_colen">
                  :
                </span>
                <span className={style.min} id="second_first">
                  0
                </span>
                <span className={style.min} id="second_second">
                  {currentsec[0]}
                </span>
              </b>
            )}
          </p>
          <p className={style.currentround}>{upcomingperiod}</p>
        </div>
      </div>
      {/* wingo color options  */}
      <div className={style.ColoOptions}>
        {/* this is blocker overlay */}
        <div className={blocker == "yes" ? style.blocker : style.offblocker}>
          <div className={style.middlecontainer}>
            <h1>0</h1>
            <h1>{timer}</h1>
          </div>
        </div>
        <button
          className={style.green}
          onClick={() => {
            if (currentTime.minute % 5 == 4) {
              if (currentTime.seconds > 55) {
                alert("betting time is over");
                changeBetTab("off");
              } else {
                changeSelection("green");
                changeBetTab("on");
              }
            } else {
              changeSelection("green");
              changeBetTab("on");
            }
          }}
        >
          Green
        </button>
        <button
          className={style.violet}
          onClick={() => {
            if (currentTime.minute % 5 == 4) {
              if (currentTime.seconds > 55) {
                alert("betting time is over");
                changeBetTab("off");
              } else {
                changeSelection("violet");
                changeBetTab("on");
              }
            } else {
              changeSelection("violet");
              changeBetTab("on");
            }
          }}
        >
          Violet
        </button>
        <button
          className={style.red}
          onClick={() => {
            if (currentTime.minute % 5 == 4) {
              if (currentTime.seconds > 55) {
                alert("betting time is over");
                changeBetTab("off");
              } else {
                changeSelection("red");
                changeBetTab("on");
              }
            } else {
              changeSelection("red");
              changeBetTab("on");
            }
          }}
        >
          Red
        </button>

        <div
          className={style.numberSections}
          style={{
            marginTop: "15px",
            borderRadius: "10px 10px 0 0",
          }}
        >
          <img
            src={number0}
            alt="small_zero"
            onClick={() => {
              if (currentTime.minute % 5 == 4) {
                if (currentTime.seconds > 55) {
                  alert("betting time is over");
                  changeBetTab("off");
                } else {
                  changeSelection(0);
                  changeBetTab("on");
                }
              } else {
                changeSelection(0);
                changeBetTab("on");
              }
            }}
          />
          <img
            src={number1}
            alt="small_one"
            onClick={() => {
              if (currentTime.minute % 5 == 4) {
                if (currentTime.seconds > 55) {
                  alert("betting time is over");
                  changeBetTab("off");
                } else {
                  changeSelection(1);
                  changeBetTab("on");
                }
              } else {
                changeSelection(1);
                changeBetTab("on");
              }
            }}
          />
          <img
            src={number2}
            alt="small_three"
            onClick={() => {
              if (currentTime.minute % 5 == 4) {
                if (currentTime.seconds > 55) {
                  alert("betting time is over");
                  changeBetTab("off");
                } else {
                  changeSelection(2);
                  changeBetTab("on");
                }
              } else {
                changeSelection(2);
                changeBetTab("on");
              }
            }}
          />
          <img
            src={number3}
            alt="small_four"
            onClick={() => {
              if (currentTime.minute % 5 == 4) {
                if (currentTime.seconds > 55) {
                  alert("betting time is over");
                  changeBetTab("off");
                } else {
                  changeSelection(3);
                  changeBetTab("on");
                }
              } else {
                changeSelection(3);
                changeBetTab("on");
              }
            }}
          />
          <img
            src={number4}
            alt="small_four"
            onClick={() => {
              if (currentTime.minute % 5 == 4) {
                if (currentTime.seconds > 55) {
                  alert("betting time is over");
                  changeBetTab("off");
                } else {
                  changeSelection(4);
                  changeBetTab("on");
                }
              } else {
                changeSelection(4);
                changeBetTab("on");
              }
            }}
          />
        </div>

        <div
          className={style.numberSections}
          style={{ borderRadius: "0px 0px 10px 10px", height: "69px" }}
        >
          <img
            src={number5}
            alt="small_five"
            onClick={() => {
              if (currentTime.minute % 5 == 4) {
                if (currentTime.seconds > 55) {
                  alert("betting time is over");
                  changeBetTab("off");
                } else {
                  changeSelection(5);
                  changeBetTab("on");
                }
              } else {
                changeSelection(5);
                changeBetTab("on");
              }
            }}
          />
          <img
            src={number6}
            alt="small_six"
            onClick={() => {
              if (currentTime.minute % 5 == 4) {
                if (currentTime.seconds > 55) {
                  alert("betting time is over");
                  changeBetTab("off");
                } else {
                  changeSelection(6);
                  changeBetTab("on");
                }
              } else {
                changeSelection(6);
                changeBetTab("on");
              }
            }}
          />
          <img
            src={number7}
            alt="small_seven"
            onClick={() => {
              if (currentTime.minute % 5 == 4) {
                if (currentTime.seconds > 55) {
                  alert("betting time is over");
                  changeBetTab("off");
                } else {
                  changeSelection(7);
                  changeBetTab("on");
                }
              } else {
                changeSelection(7);
                changeBetTab("on");
              }
            }}
          />
          <img
            src={number8}
            alt="small_four"
            onClick={() => {
              if (currentTime.minute % 5 == 4) {
                if (currentTime.seconds > 55) {
                  alert("betting time is over");
                  changeBetTab("off");
                } else {
                  changeSelection(8);
                  changeBetTab("on");
                }
              } else {
                changeSelection(8);
                changeBetTab("on");
              }
            }}
          />
          <img
            src={number9}
            alt="small_four"
            onClick={() => {
              if (currentTime.minute % 5 == 4) {
                if (currentTime.seconds > 55) {
                  alert("betting time is over");
                  changeBetTab("off");
                } else {
                  changeSelection(9);
                  changeBetTab("on");
                }
              } else {
                changeSelection(9);
                changeBetTab("on");
              }
            }}
          />
        </div>

        <div className={style.Randoms}>
          <p
            id="random"
            className={style.Tabs}
            style={{
              backgroundColor: "white",
              color: "red",
              border: "1px solid red",
              borderRadius: "10px",
              width: "25%",
              padding: "7px 5px",
            }}
          >
            Random
          </p>
          <p className={style.Tabs}>x1</p>
          <p className={style.Tabs}>x5</p>
          <p className={style.Tabs}>x10</p>
          <p className={style.Tabs}>x20</p>
          <p className={style.Tabs}>x50</p>
          <p className={style.Tabs}>x100</p>
        </div>
        <div className={style.BetBigSmall}>
          <b>
            <p
              onClick={() => {
                if (currentTime.minute % 5 == 4) {
                  if (currentTime.seconds > 55) {
                    alert("betting time is over");
                    changeBetTab("off");
                  } else {
                    changeSelection("Big");
                    changeBetTab("on");
                  }
                } else {
                  changeSelection("Big");
                  changeBetTab("on");
                }
              }}
              style={{ backgroundColor: "orange" }}
            >
              Big
            </p>
            <p
              onclick="selection_color('small')"
              style={{ backgroundColor: "#6ea8f4" }}
              onClick={() => {
                if (currentTime.minute % 5 == 4) {
                  if (currentTime.seconds > 55) {
                    alert("betting time is over");
                    changeBetTab("off");
                  } else {
                    changeSelection("small");
                    changeBetTab("on");
                  }
                } else {
                  changeSelection("small");
                  changeBetTab("on");
                }
              }}
            >
              Small
            </p>
          </b>
        </div>
      </div>
      {/* result section*/}
      <StatsWingo currenttimer="5"></StatsWingo>
      <div className={BetTab == "on" ? style.betSelector : style.bettaboff}>
        <div
          className={style.SelectionInfo}
          style={
            selection == "small"
              ? { backgroundColor: "#6ea8f4" }
              : selection == "Big"
              ? { backgroundColor: "orange" }
              : selection == "green"
              ? { backgroundColor: "#18b660" }
              : selection == "violet"
              ? { backgroundColor: "violet" }
              : selection == "red"
              ? { backgroundColor: "red" }
              : selection == 0
              ? { backgroundImage: "linear-gradient(to right,red, violet)" }
              : selection == 5
              ? { backgroundImage: "linear-gradient(to right, green,violet)" }
              : selection % 2 == 0
              ? { backgroundColor: "red" }
              : selection % 2 !== 0 && { backgroundColor: "#18b660" }
          }
        >
          <p className={style.Selectorheading}>Wingo 5min</p>
          <div className={style.Selectedoption}>
            <p>
              <span style={{ marginRight: "10px" }}>Select</span> {selection}
            </p>
          </div>
        </div>
        <div className={style.firsttab}>
          <div className={style.section}>
            <p style={{ paddingLeft: "10%", fontSize: "20px" }}>Balance</p>
          </div>
          <div className={style.section}>
            <span
              className={
                balanceSelection == 1
                  ? style.activeBalance
                  : style.InActiveBalance
              }
              onClick={() => {
                changeBalanceSelection(1);
              }}
              style={
                balanceSelection == 1
                  ? selection == "small"
                    ? { backgroundColor: "#6ea8f4" }
                    : selection == "Big"
                    ? { backgroundColor: "orange" }
                    : selection == "violet"
                    ? { backgroundColor: "violet" }
                    : selection == "red"
                    ? { backgroundColor: "red" }
                    : selection == 0
                    ? { backgroundColor: "red" }
                    : selection == 5
                    ? { backgroundColor: "green" }
                    : selection % 2 == 0
                    ? { backgroundColor: "red" }
                    : selection % 2 !== 0
                    ? { backgroundColor: "#18b660" }
                    : {}
                  : {}
              }
            >
              1
            </span>
            <span
              className={
                balanceSelection == 10
                  ? style.activeBalance
                  : style.InActiveBalance
              }
              onClick={() => {
                changeBalanceSelection(10);
              }}
              style={
                balanceSelection == 10
                  ? selection == "small"
                    ? { backgroundColor: "#6ea8f4" }
                    : selection == "Big"
                    ? { backgroundColor: "orange" }
                    : selection == "green"
                    ? { backgroundColor: "#18b660" }
                    : selection == "violet"
                    ? { backgroundColor: "violet" }
                    : selection == "red"
                    ? { backgroundColor: "red" }
                    : selection == 0
                    ? { backgroundColor: "red" }
                    : selection == 5
                    ? { backgroundColor: "green" }
                    : selection % 2 == 0
                    ? { backgroundColor: "red" }
                    : selection % 2 !== 0
                    ? { backgroundColor: "#18b660" }
                    : {}
                  : {}
              }
            >
              10
            </span>
            <span
              className={
                balanceSelection == 100
                  ? style.activeBalance
                  : style.InActiveBalance
              }
              onClick={() => {
                changeBalanceSelection(100);
              }}
              style={
                balanceSelection == 100
                  ? selection == "small"
                    ? { backgroundColor: "#6ea8f4" }
                    : selection == "Big"
                    ? { backgroundColor: "orange" }
                    : selection == "green"
                    ? { backgroundColor: "#18b660" }
                    : selection == "violet"
                    ? { backgroundColor: "violet" }
                    : selection == "red"
                    ? { backgroundColor: "red" }
                    : selection == 0
                    ? { backgroundColor: "red" }
                    : selection == 5
                    ? { backgroundColor: "green" }
                    : selection % 2 == 0
                    ? { backgroundColor: "red" }
                    : selection % 2 !== 0
                    ? { backgroundColor: "#18b660" }
                    : {}
                  : {}
              }
            >
              100
            </span>
            <span
              className={
                balanceSelection == 1000
                  ? style.activeBalance
                  : style.InActiveBalance
              }
              onClick={() => {
                changeBalanceSelection(1000);
              }}
              style={
                balanceSelection == 1000
                  ? selection == "small"
                    ? { backgroundColor: "#6ea8f4" }
                    : selection == "Big"
                    ? { backgroundColor: "orange" }
                    : selection == "green"
                    ? { backgroundColor: "#18b660" }
                    : selection == "violet"
                    ? { backgroundColor: "violet" }
                    : selection == "red"
                    ? { backgroundColor: "red" }
                    : selection == 0
                    ? { backgroundColor: "red" }
                    : selection == 5
                    ? { backgroundColor: "green" }
                    : selection % 2 == 0
                    ? { backgroundColor: "red" }
                    : selection % 2 !== 0
                    ? { backgroundColor: "#18b660" }
                    : {}
                  : {}
              }
            >
              1000
            </span>
          </div>
        </div>
        <div className={style.SecondTab}>
          <div className={style.section}>
            <p style={{ paddingLeft: "10%" }}>Quantity</p>
          </div>
          <div className={style.sectionfx}>
            <span
              className={style.iconify}
              style={
                selection == "small"
                  ? { backgroundColor: "#6ea8f4" }
                  : selection == "Big"
                  ? { backgroundColor: "orange" }
                  : selection == "green"
                  ? { backgroundColor: "#18b660" }
                  : selection == "violet"
                  ? { backgroundColor: "violet" }
                  : selection == "red"
                  ? { backgroundColor: "red" }
                  : selection == 0
                  ? { backgroundColor: "red" }
                  : selection == 5
                  ? { backgroundColor: "green" }
                  : selection % 2 == 0
                  ? { backgroundColor: "red" }
                  : selection % 2 !== 0
                  ? { backgroundColor: "#18b660" }
                  : {}
              }
            >
              -
            </span>

            <input
              type="number"
              value={quantity}
              className={style.specialInput}
              onChange={(e) => {
                changeQuantity(e.target.value);
              }}
            />

            <span
              className={style.iconify}
              style={
                selection == "small"
                  ? { backgroundColor: "#6ea8f4" }
                  : selection == "Big"
                  ? { backgroundColor: "orange" }
                  : selection == "green"
                  ? { backgroundColor: "#18b660" }
                  : selection == "violet"
                  ? { backgroundColor: "violet" }
                  : selection == "red"
                  ? { backgroundColor: "red" }
                  : selection == 0
                  ? { backgroundColor: "red" }
                  : selection == 5
                  ? { backgroundColor: "green" }
                  : selection % 2 == 0
                  ? { backgroundColor: "red" }
                  : selection % 2 !== 0
                  ? { backgroundColor: "#18b660" }
                  : {}
              }
            >
              +
            </span>
          </div>
        </div>
        <div className={style.thirdTab}>
          <span
            className={
              MultiplierSelection == 1
                ? style.activeBalance
                : style.InActiveBalance
            }
            onClick={() => {
              changeMultiplierSelection(1);
            }}
            style={
              MultiplierSelection == 1
                ? selection == "small"
                  ? { backgroundColor: "#6ea8f4" }
                  : selection == "Big"
                  ? { backgroundColor: "orange" }
                  : selection == "green"
                  ? { backgroundColor: "#18b660" }
                  : selection == "violet"
                  ? { backgroundColor: "violet" }
                  : selection == "red"
                  ? { backgroundColor: "red" }
                  : selection == 0
                  ? { backgroundColor: "red" }
                  : selection == 5
                  ? { backgroundColor: "green" }
                  : selection % 2 == 0
                  ? { backgroundColor: "red" }
                  : selection % 2 !== 0
                  ? { backgroundColor: "#18b660" }
                  : {}
                : {}
            }
          >
            X1
          </span>
          <span
            className={
              MultiplierSelection == 5
                ? style.activeBalance
                : style.InActiveBalance
            }
            onClick={() => {
              changeMultiplierSelection(5);
            }}
            style={
              MultiplierSelection == 5
                ? selection == "small"
                  ? { backgroundColor: "#6ea8f4" }
                  : selection == "Big"
                  ? { backgroundColor: "orange" }
                  : selection == "green"
                  ? { backgroundColor: "#18b660" }
                  : selection == "violet"
                  ? { backgroundColor: "violet" }
                  : selection == "red"
                  ? { backgroundColor: "red" }
                  : selection == 0
                  ? { backgroundColor: "red" }
                  : selection == 5
                  ? { backgroundColor: "green" }
                  : selection % 2 == 0
                  ? { backgroundColor: "red" }
                  : selection % 2 !== 0
                  ? { backgroundColor: "#18b660" }
                  : {}
                : {}
            }
          >
            X5
          </span>
          <span
            className={
              MultiplierSelection == 10
                ? style.activeBalance
                : style.InActiveBalance
            }
            onClick={() => {
              changeMultiplierSelection(10);
            }}
            style={
              MultiplierSelection == 10
                ? selection == "small"
                  ? { backgroundColor: "#6ea8f4" }
                  : selection == "Big"
                  ? { backgroundColor: "orange" }
                  : selection == "green"
                  ? { backgroundColor: "#18b660" }
                  : selection == "violet"
                  ? { backgroundColor: "violet" }
                  : selection == "red"
                  ? { backgroundColor: "red" }
                  : selection == 0
                  ? { backgroundColor: "red" }
                  : selection == 5
                  ? { backgroundColor: "green" }
                  : selection % 2 == 0
                  ? { backgroundColor: "red" }
                  : selection % 2 !== 0
                  ? { backgroundColor: "#18b660" }
                  : {}
                : {}
            }
          >
            X10
          </span>
          <span
            className={
              MultiplierSelection == 20
                ? style.activeBalance
                : style.InActiveBalance
            }
            onClick={() => {
              changeMultiplierSelection(20);
            }}
            style={
              MultiplierSelection == 20
                ? selection == "small"
                  ? { backgroundColor: "#6ea8f4" }
                  : selection == "Big"
                  ? { backgroundColor: "orange" }
                  : selection == "green"
                  ? { backgroundColor: "#18b660" }
                  : selection == "violet"
                  ? { backgroundColor: "violet" }
                  : selection == "red"
                  ? { backgroundColor: "red" }
                  : selection == 0
                  ? { backgroundColor: "red" }
                  : selection == 5
                  ? { backgroundColor: "green" }
                  : selection % 2 == 0
                  ? { backgroundColor: "red" }
                  : selection % 2 !== 0
                  ? { backgroundColor: "#18b660" }
                  : {}
                : {}
            }
          >
            X20
          </span>
          <span
            className={
              MultiplierSelection == 50
                ? style.activeBalance
                : style.InActiveBalance
            }
            onClick={() => {
              changeMultiplierSelection(50);
            }}
            style={
              MultiplierSelection == 50
                ? selection == "small"
                  ? { backgroundColor: "#6ea8f4" }
                  : selection == "Big"
                  ? { backgroundColor: "orange" }
                  : selection == "green"
                  ? { backgroundColor: "#18b660" }
                  : selection == "violet"
                  ? { backgroundColor: "violet" }
                  : selection == "red"
                  ? { backgroundColor: "red" }
                  : selection == 0
                  ? { backgroundColor: "red" }
                  : selection == 5
                  ? { backgroundColor: "green" }
                  : selection % 2 == 0
                  ? { backgroundColor: "red" }
                  : selection % 2 !== 0
                  ? { backgroundColor: "#18b660" }
                  : {}
                : {}
            }
          >
            X50
          </span>{" "}
          <span
            className={
              MultiplierSelection == 100
                ? style.activeBalance
                : style.InActiveBalance
            }
            onClick={() => {
              changeMultiplierSelection(100);
            }}
            style={
              MultiplierSelection == 100
                ? selection == "small"
                  ? { backgroundColor: "#6ea8f4" }
                  : selection == "Big"
                  ? { backgroundColor: "orange" }
                  : selection == "green"
                  ? { backgroundColor: "#18b660" }
                  : selection == "violet"
                  ? { backgroundColor: "violet" }
                  : selection == "red"
                  ? { backgroundColor: "red" }
                  : selection == 0
                  ? { backgroundColor: "red" }
                  : selection == 5
                  ? { backgroundColor: "green" }
                  : selection % 2 == 0
                  ? { backgroundColor: "red" }
                  : selection % 2 !== 0
                  ? { backgroundColor: "#18b660" }
                  : {}
                : {}
            }
          >
            X100
          </span>
        </div>
        <div className={style.submittab}>
          <button
            onClick={() => {
              changeBetTab("no");
              changeBalanceSelection(1);
              changeMultiplierSelection(1);
              changeQuantity(1);
            }}
          >
            Cancel
          </button>
          <button
            style={
              selection == "small"
                ? { backgroundColor: "#6ea8f4" }
                : selection == "Big"
                ? { backgroundColor: "orange" }
                : selection == "green"
                ? { backgroundColor: "#18b660" }
                : selection == "violet"
                ? { backgroundColor: "violet" }
                : selection == "red"
                ? { backgroundColor: "red" }
                : selection == 0
                ? { backgroundColor: "red" }
                : selection == 5
                ? { backgroundColor: "green" }
                : selection % 2 == 0
                ? { backgroundColor: "red" }
                : selection % 2 !== 0
                ? { backgroundColor: "#18b660" }
                : {}
            }
            onClick={() => {
              let date = new Date();
              let sec = currentTime.seconds;
              let year = date.getFullYear();
              let month = date.getMonth() + 1;
              let day = date.getDate();
              let hour = date.getHours();
              let min =
                currentTime.minute + Math.abs((currentTime.minute % 5) - 5);
              let amount = balanceSelection * quantity * MultiplierSelection;
              let game = "wingo";
              let time = "5min";
              // generate new random int between 0 and 9
              let period = `${year}${month}${day}${hour == 0 ? `00` : hour}${
                min == 0 ? `60` : min < 10 ? "0" + min : min
              }`;
              let packet = { uid, game, time, period, selection, amount };

              if (min % 5 == 4) {
                if (sec > 55) {
                  alert("betting time is over");
                  changeBetTab("off");
                } else {
                  if (amount > userfinance.balance) {
                    alert(
                      "err bet not set low account balance please ad funds"
                    );
                  } else {
                    setWingo5minbet(packet);
                    changeBalanceSelection("1");
                    changeMultiplierSelection(" 1");
                    changeQuantity("1");
                    changeBetTab("off");
                  }
                }
              } else {
                if (amount > userfinance.balance) {
                  alert("err bet not set low account balance please ad funds");
                } else {
                  setWingo5minbet(packet);
                  changeBalanceSelection("1");
                  changeMultiplierSelection(" 1");
                  changeQuantity("1");
                  changeBetTab("off");
                }
              }
            }}
          >
            Total amount {balanceSelection * quantity * MultiplierSelection}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wingo5minute;
