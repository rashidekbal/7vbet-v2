import React, { useEffect, useState } from "react";
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
import Timer30sec from "./Timer30sec";
function Wingo30sec() {
  const [selection, changeSelection] = useState("Big");
  const [balanceSelection, changeBalanceSelection] = useState(1);
  const [MultiplierSelection, changeMultiplierSelection] = useState(1);
  const [quantity, changeQuantity] = useState(1);
  const [BetTab, changeBetTab] = useState("off");
  useEffect(() => {}, []);
  return (
    <div style={{ position: "relative" }}>
      {" "}
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
          <NavLink to="/wingo5min" className={style.Options}>
            <img
              alt="img"
              id="one"
              className={style.OptionsImage}
              src={logoInactive}
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
      <Timer30sec />
      {/* wingo color options  */}
      <div className={style.ColoOptions}>
        <button
          className={style.green}
          onClick={() => {
            changeSelection("green");
            changeBetTab("on");
          }}
        >
          Green
        </button>
        <button
          className={style.violet}
          onClick={() => {
            changeSelection("violet");
            changeBetTab("on");
          }}
        >
          Violet
        </button>
        <button
          className={style.red}
          onClick={() => {
            changeSelection("red");
            changeBetTab("on");
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
              changeSelection(0);
              changeBetTab("on");
            }}
          />
          <img
            src={number1}
            alt="small_one"
            onClick={() => {
              changeSelection(1);
              changeBetTab("on");
            }}
          />
          <img
            src={number2}
            alt="small_three"
            onClick={() => {
              changeSelection(2);
              changeBetTab("on");
            }}
          />
          <img
            src={number3}
            alt="small_four"
            onClick={() => {
              changeSelection(3);
              changeBetTab("on");
            }}
          />
          <img
            src={number4}
            alt="small_four"
            onClick={() => {
              changeSelection(4);
              changeBetTab("on");
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
              changeSelection(5);
              changeBetTab("on");
            }}
          />
          <img
            src={number6}
            alt="small_six"
            onClick={() => {
              changeSelection(6);
              changeBetTab("on");
            }}
          />
          <img
            src={number7}
            alt="small_seven"
            onClick={() => {
              changeSelection(7);
              changeBetTab("on");
            }}
          />
          <img
            src={number8}
            alt="small_four"
            onClick={() => {
              changeSelection(8);
              changeBetTab("on");
            }}
          />
          <img
            src={number9}
            alt="small_four"
            onClick={() => {
              changeSelection(9);
              changeBetTab("on");
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
                changeSelection("Big");
                changeBetTab("on");
              }}
              style={{ backgroundColor: "orange" }}
            >
              Big
            </p>
            <p
              onclick="selection_color('small')"
              style={{ backgroundColor: "#6ea8f4" }}
              onClick={() => {
                changeSelection("small");
                changeBetTab("on");
              }}
            >
              Small
            </p>
          </b>
        </div>
      </div>
      {/* result section*/} <StatsWingo currenttimer="30"></StatsWingo>
      {/* option selector */}
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
          <p className={style.Selectorheading}>Wingo 30s</p>
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
              onClick={() => {
                if (quantity > 0) {
                  changeQuantity(quantity - 1);
                }
              }}
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
              onClick={() => {
                changeQuantity(quantity + 1);
              }}
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
          >
            Total amount {balanceSelection * quantity * MultiplierSelection}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wingo30sec;
