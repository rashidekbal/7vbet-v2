import React, { useContext, useState } from "react";
import style from "./css/Aviator.module.css";
import { NavLink } from "react-router-dom";
import logo from "./icons/aviatorLogo.svg";
import { data } from "../../store/Contextprovider";
import { FaRupeeSign } from "react-icons/fa";
import { HiMiniChatBubbleBottomCenterText } from "react-icons/hi2";
import { MdOutlineHistory } from "react-icons/md";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

function Aviator() {
  const { userfinance } = useContext(data);
  const [typeSelected1, changeTypeSelected1] = useState("bet");
  const [typeSelected2, changeTypeSelected2] = useState("bet");
  const [bet1Amount, changeBet1Amount] = useState("10.00");
  const [bet2Amount, changeBet2Amount] = useState("10.00");
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
            {userfinance.balance ? userfinance.balance : "92648.0"}
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

      {
        //display area
      }

      <div className={style.displayArea}></div>

      {
        //bet section
      }
      <div className={style.betSetter}>
        <div className={style.optionContainer}>
          <div
            className={typeSelected1 == "bet" ? style.on : style.off}
            onClick={() => {
              changeTypeSelected1("bet");
            }}
          >
            {" "}
            Bet
          </div>
          <div
            className={typeSelected1 == "auto" ? style.on : style.off}
            onClick={() => {
              changeTypeSelected1("auto");
            }}
          >
            Auto
          </div>
        </div>

        <div className={style.MainOptionArea}>
          <div className={style.division1}>
            <div className={style.inputArea}>
              <span>
                <CiCircleMinus
                  onClick={() => {
                    if (Number(bet1Amount) <= 0) {
                    } else {
                      changeBet1Amount((Number(bet1Amount) - 1).toString());
                    }
                  }}
                />
              </span>
              <span className={style.inputfiledholder}>
                <input
                  type="number"
                  value={bet1Amount}
                  onChange={(e) => {
                    changeBet1Amount(e.target.value);
                  }}
                />
              </span>
              <span>
                <CiCirclePlus
                  onClick={() => {
                    changeBet1Amount((Number(bet1Amount) + 1).toString());
                  }}
                />
              </span>
            </div>
            <div className={style.amountSelectorContainer}>
              <div className={style.conatiner1}>
                <div>100.00</div>
                <div>200.00</div>
              </div>
            </div>
          </div>
          <div className={style.division2}>
            <div>
              <p style={{ textAlign: "center" }}>BET</p>
              <p>
                {" "}
                <FaRupeeSign className={style.rupeeHeader} />
                {bet1Amount}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.betSetter}>
        <div className={style.optionContainer}>
          <div
            className={typeSelected2 == "bet" ? style.on : style.off}
            onClick={() => {
              changeTypeSelected2("bet");
            }}
          >
            {" "}
            Bet
          </div>
          <div
            className={typeSelected2 == "auto" ? style.on : style.off}
            onClick={() => {
              changeTypeSelected2("auto");
            }}
          >
            Auto
          </div>
        </div>
        <div className={style.MainOptionArea}>
          <div className={style.division1}>div1</div>
          <div className={style.division2}>
            <div>
              <p style={{ textAlign: "center" }}>BET</p>
              <p>{bet2Amount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aviator;
