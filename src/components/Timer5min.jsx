import { useEffect, useRef, useState } from "react";
import style from "../css/Timer.module.css";
import number0 from "../icons/n0-30bd92d1.png";
import number1 from "../icons/n1-dfccbff5.png";
import number2 from "../icons/n2-c2913607.png";
import number3 from "../icons/n3-f92c313f.png";
import number4 from "../icons/n4-cb84933b.png";
import number5 from "../icons/n5-49d0e9c5.png";
import number6 from "../icons/n6-a56e0b9a.png";
import number7 from "../icons/n7-5961a17f.png";
import number8 from "../icons/n8-d4d951a4.png";
import number9 from "../icons/n9-a20f6f42.png";

export default function Timer5min() {
  const [currentsec, changesec] = useState("0");
  const [currentmin, changemin] = useState("0");

  var time = new Date();

  useEffect(() => {
    setTimeout(() => {
      changesec(Math.abs(time.getSeconds() - 60).toString());
      changemin(Math.abs((time.getMinutes() % 5) - 5));
    }, 1000);
  });

  return (
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
        <p className={style.currentround}>202406118010733</p>
      </div>
    </div>
  );
}
