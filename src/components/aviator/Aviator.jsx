import React, { useContext, useEffect, useState } from "react";
import style from "./css/Aviator.module.css";
import { NavLink } from "react-router-dom";
import logo from "./icons/aviatorLogo.svg";
import { data } from "../../store/Contextprovider";
import { FaRupeeSign } from "react-icons/fa";
import { HiMiniChatBubbleBottomCenterText } from "react-icons/hi2";
import { MdOutlineHistory } from "react-icons/md";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import blade from "./icons/blades.png";
import background from "./icons/background.png";
import gameOverIcon from "./icons/game_over.png";
import rocket from "./icons/rocket-12318.gif";
function Aviator() {
  const { userfinance, ws } = useContext(data);
  const [typeSelected1, changeTypeSelected1] = useState("bet");
  const [typeSelected2, changeTypeSelected2] = useState("bet");
  const [bet1Amount, changeBet1Amount] = useState("10.00");
  const [bet2Amount, changeBet2Amount] = useState("10.00");
  const [starting_in, set_starting_in] = useState("");
  const [currentHeight, setCurrentHeight] = useState("0.0");
  const [dialogVisibility, set_dialogVisibility] = useState("over");
  const [currentPeriod, set_currentPeriod] = useState("000000");
  useEffect(() => {
    ws.on("Aviator_halt", (data) => {
      set_starting_in(data.remaining_time);
      if (data.remaining_time == 0) {
        set_dialogVisibility("plane");
      } else {
        set_dialogVisibility("halt");
        setCurrentHeight("1.0");
      }
    });
    ws.on("Flight_data", (data) => {
      setCurrentHeight(data.Height);
    });
    ws.on("Game_over", (data) => {
      if (data.msg) {
        set_dialogVisibility("over");
      }
    });
    ws.on("period", (data) => set_currentPeriod(data.period));

    return () => {
      ws.off("Aviator_halt");
      ws.off("Flight_data");
      ws.off("Game_over");
    };
  }, [ws]);
  return (
    <div className={style.mainConatiner}>
      {
        // header section
      }
      <header className={style.header}>
        <div className={style.logo}>
          <img
            src={logo}
            alt="Logo"
            onClick={() => {
              window.location.reload();
            }}
          />
        </div>
        <div className={style.headerBalance}>
          <p>
            <FaRupeeSign className={style.rupeeHeader} />
            {userfinance.balance ? userfinance.balance : "0.0"}
            <span style={{ marginLeft: "3px", fontSize: "17.5px" }}>INR</span>
          </p>
        </div>
        <div className={style.msg}>
          <HiMiniChatBubbleBottomCenterText className={style.msgIcon} />
        </div>
      </header>

      {
        // history section
      }
      <div className={style.historyStrip}>
        <div className={style.prevHistory}>45.02x</div>
        <div className={style.prevHistory}>10.25x</div>
        <div className={style.prevHistory}>0.02x</div>
        <div className={style.prevHistory}>1.245x</div>
        <div className={style.prevHistory}>0.235x</div>
        <div className={style.spclHistory}>
          <MdOutlineHistory style={{ color: "white" }} />
        </div>
      </div>
      <div className={style.period_strip}>
        <p>
          <span>Round No. </span>
          {currentPeriod}
        </p>
      </div>

      {
        //display area
      }

      <div className={style.displayArea}>
        {dialogVisibility == "halt" ? (
          <div className={style.waiting_dialog}>
            <img className={style.blade_icon} src={blade} alt="blade" />
            <h3>WAITING FOR NEXT ROUND</h3>
            <progress
              max={10}
              value={Math.abs(starting_in)}
              className={style.progress}
            ></progress>
            <p>00:0{starting_in}</p>
          </div>
        ) : dialogVisibility == "plane" ? (
          <div className={style.FLyingZone}>
            {/* <img src={background} alt="bg" className={style.background} /> */}
            <div className={style.plane_box}>
              <img src={rocket} className={style.rocket} alt="rocket" />
              <p className={style.height}>
                {" "}
                {Number(currentHeight).toFixed(2)}
                <span>x</span>
              </p>
            </div>
          </div>
        ) : (
          <div className={style.game_over_dialog}>
            <img src={background} alt="bg" className={style.background} />
            <p className={style.GameOvermsg}>Flew Away!</p>
            <p className={style.overAt}>
              {currentHeight}
              <span>x</span>
            </p>
          </div>
        )}

        {/* <h1 style={{ color: "white" }}>currentHeight {currentHeight} </h1> */}
      </div>

      {
        //bet section
      }
    </div>
  );
}

export default Aviator;
