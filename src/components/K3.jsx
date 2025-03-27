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
import number3 from "../icons/n3-f92c313f.png";
import number4 from "../icons/n4-cb84933b.png";
import number5 from "../icons/n5-49d0e9c5.png";
import number6 from "../icons/n6-a56e0b9a.png";
import number7 from "../icons/n7-5961a17f.png";
import number8 from "../icons/n8-d4d951a4.png";
import number9 from "../icons/n9-a20f6f42.png";
export const K3 = () => {
  const [currentsec, changesec] = useState("00");
  const [upcomingperiod, changeUpcomingPreiod] = useState(265621);
  const [option, changeOption] = useState("");
  const [blocker, changeBlocker] = useState(false);
  const { ws } = useContext(data);
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
              <p>Trx</p>
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
          <p className={style.insts}>How to play</p>
          <p className={style.selectedsetting}>Trx 1Min</p>
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
          <p className={style.currentround}>{upcomingperiod}</p>
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
          }}
        >
          <img
            src={number4}
            alt="small_one"
            onClick={() => {
              changeOption(1);
            }}
          />
          <img
            src={number5}
            alt="small_three"
            onClick={() => {
              changeOption(2);
            }}
          />
          <img
            src={number6}
            alt="small_four"
            onClick={() => {
              changeOption(3);
            }}
          />
          <img
            src={number7}
            alt="small_four"
            onClick={() => {
              changeOption(4);
            }}
          />
        </div>

        <div
          className={style.numberSections}
          style={{ borderRadius: "0px 0px 10px 10px", height: "69px" }}
        >
          <img
            src={number9}
            alt="small_six"
            onClick={() => {
              changeOption(6);
            }}
          />
          <img
            src={number3}
            alt="small_seven"
            onClick={() => {
              changeOption(7);
            }}
          />
          <img
            src={number4}
            alt="small_four"
            onClick={() => {
              changeOption(8);
            }}
          />
          <img
            src={number5}
            alt="small_four"
            onClick={() => {
              changeOption(9);
            }}
          />
        </div>
        <div
          className={style.numberSections}
          style={{ borderRadius: "0px 0px 10px 10px", height: "69px" }}
        >
          <img
            src={number9}
            alt="small_six"
            onClick={() => {
              changeOption(6);
            }}
          />
          <img
            src={number3}
            alt="small_seven"
            onClick={() => {
              changeOption(7);
            }}
          />
          <img
            src={number4}
            alt="small_four"
            onClick={() => {
              changeOption(8);
            }}
          />
          <img
            src={number5}
            alt="small_four"
            onClick={() => {
              changeOption(9);
            }}
          />
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
      </div>{" "}
    </>
  );
};
