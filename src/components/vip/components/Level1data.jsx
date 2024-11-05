import React from "react";
import style from "../css/LevelData.module.css";
import gift from "../../../icons/1-fd9896f4.png";
import coins from "../../../icons/2-0a41a908.png";
import safe from "../../../icons/4-e53b4da2.png";
import wallet from "../../../icons/balance-e39ce400.png";

function Level1data() {
  return (
    <>
      <div className={style.levelPerks}>
        <div className={style.heading}>
          <h3 className={style.headinginfo}>
            <svg
              data-v-9bb5e81c=""
              class="svg-icon icon-diamond"
              style={{
                height: "35px",
                width: " 15%",
                display: " inline-block",
                verticalAlign: " middle",
              }}
            >
              <use xlinkHref="#icon-diamond"></use>
            </svg>
            VIP1 Benefits level
          </h3>
        </div>

        <div>
          {" "}
          <div className={style.perkslist}>
            <div className={style.first}>
              <img src={gift} alt="gift" />
            </div>
            <div className={style.sec}>
              <p className={style.listHeading}>Level up rewards</p>
              <p className={style.listInfodata}>
                Each account can only recieve 1 times
              </p>
            </div>
            <div className={style.third}>
              <div className={style.moneyoperkingo}>
                <p className={style.yyx}>
                  <span>
                    <img src={wallet} className={style.xyximg} />
                  </span>
                  60
                </p>
              </div>
              <div className={style.moneyoperkingo}>
                <p className={style.yyx}>
                  <span>
                    <svg
                      data-v-9bb5e81c=""
                      class="svg-icon icon-love"
                      style={{
                        height: "13px",
                        width: " 23%",
                        display: "inline",
                        marginRight: "8px",
                      }}
                    >
                      <use xlinkHref="#icon-love"></use>
                    </svg>
                  </span>
                  0
                </p>
              </div>
            </div>
          </div>
          <div className={style.perkslist}>
            <div className={style.first}>
              {" "}
              <img src={coins} alt="coins" />
            </div>
            <div className={style.sec}>
              {" "}
              <p className={style.listHeading}>Monthly reward</p>
              <p className={style.listInfodata}>
                Each account can only recieve 1 time per month
              </p>
            </div>
            <div className={style.third}>
              {" "}
              <div className={style.moneyoperkingo}>
                <p className={style.yyx}>
                  <span>
                    <img src={wallet} className={style.xyximg} />
                  </span>
                  30
                </p>
              </div>
              <div className={style.moneyoperkingo}>
                <p className={style.yyx}>
                  <span>
                    <svg
                      data-v-9bb5e81c=""
                      class="svg-icon icon-love"
                      style={{
                        height: "13px",
                        width: " 23%",
                        display: "inline",
                        marginRight: "8px",
                      }}
                    >
                      <use xlinkHref="#icon-love"></use>
                    </svg>
                  </span>
                  0
                </p>
              </div>
            </div>
          </div>
          <div className={style.perkslist}>
            <div className={style.first}>
              {" "}
              <img src={safe} alt="gift" />
            </div>
            <div className={style.sec}>
              {" "}
              <p className={style.listHeading}>Safe</p>
              <p className={style.listInfodata}>
                Increase the extra income of the safe
              </p>
            </div>
            <div className={style.third}>
              {" "}
              <div className={style.moneyoperkingosec}>
                {" "}
                <p
                  className={style.yyx}
                  style={{ position: "relative", color: "orange" }}
                >
                  <span>
                    <svg
                      data-v-9bb5e81c=""
                      class="svg-icon icon-weal4"
                      style={{
                        height: "28px",
                        width: " 25%",
                        position: "absolute",
                        left: "9px",
                      }}
                    >
                      <use xlinkHref="#icon-weal4"></use>
                    </svg>
                  </span>
                  <span
                    style={{ position: "absolute", top: "4px", right: "9px" }}
                  >
                    0.2%
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={style.perkslist}>
            <div className={style.first}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <svg
                  data-v-9bb5e81c=""
                  class="svg-icon icon-weal4"
                  style={{
                    height: "60px",
                    width: " 100%",
                  }}
                >
                  <use xlinkHref="#icon-weal4"></use>
                </svg>
              </div>
            </div>
            <div className={style.sec}>
              <p className={style.listHeading} style={{ marginTop: "4px" }}>
                Rebate rate
              </p>
              <p className={style.listInfodata} style={{ marginTop: "6px" }}>
                Increase income of rebate
              </p>
            </div>
            <div className={style.third}>
              {" "}
              <div className={style.moneyoperkingosec}>
                <p
                  className={style.yyx}
                  style={{ position: "relative", color: "orange" }}
                >
                  <span>
                    <svg
                      data-v-9bb5e81c=""
                      class="svg-icon icon-weal5"
                      style={{
                        height: "28px",
                        width: " 25%",
                        position: "absolute",
                        left: "9px",
                      }}
                    >
                      <use xlinkHref="#icon-weal5"></use>
                    </svg>
                  </span>
                  <span
                    style={{ position: "absolute", top: "4px", right: "9px" }}
                  >
                    0.6%
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Level1data;
