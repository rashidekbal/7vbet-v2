import { useContext, useEffect, useRef, useState } from "react";
import style from "../../css/Timer.module.css";
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
import { data } from "../../store/Contextprovider";
function Timer30sec() {
  const [currentsec, changesec] = useState("0");
  const { get30secwingo, uid, getUserfinances, ws } = useContext(data);

  ws.on("message", (msg) => {
    if (msg.seconds < 30) {
      changesec(Math.abs(msg.seconds - 30).toString());
    } else if (msg.Seconds >= 30) {
      changesec(Math.abs(msg.seconds - 60).toString());
    }
  });
  useEffect(() => {
    setInterval(() => {
      if (currentsec == 29) {
        get30secwingo();
        getUserfinances(String(window.sessionStorage.getItem("uid")));
      }
    }, 1000);
  }, []);

  return (
    <>
      <div className={style.timer}>
        <div class={style.twosectionsspl}>
          <p className={style.insts}>How to play</p>
          <p className={style.selectedsetting}>Win Go 1Min</p>

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
    </>
  );
}

export default Timer30sec;
