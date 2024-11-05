import React from "react";
import style from "../css/LevelData.module.css";

import wallet from "../../../icons/balance-e39ce400.png";
function Mybenifits() {
  return (
    <>
      <div className={style.Benifits}>
        <div className={style.benifitsheader}>
          <div>
            <svg
              data-v-4e842459=""
              class="svg-icon icon-crown"
              style={{ width: "40px", height: "35px" }}
            >
              <use xlinkHref="#icon-crown"></use>
            </svg>
          </div>
          <div>
            <h3>My benifits</h3>
          </div>
        </div>

        <div className={style.gridHolder}>
          <div className={style.gridItem}>
            {" "}
            <div className={style.Item}>
              <div className={style.imagebar}>
                <p>
                  <span>
                    <img src={wallet} alt="" className={style.miniwallet} />
                  </span>
                  <span>60</span>
                </p>
              </div>
              <div className={style.infobar}>
                <h4>Level up rewards</h4>
                <p>Each account can only receive 1 time</p>
              </div>
              <button className={style.recieve}>Recieve</button>
            </div>
            <div className={style.Item}>
              <div className={style.imagebar2}>
                <p>
                  <span>
                    <img src={wallet} alt="" className={style.miniwallet} />
                  </span>
                  <span>30</span>
                </p>
              </div>
              <div className={style.infobar}>
                <h4>Monthly reward</h4>
                <p style={{ fontSize: "14px" }}>
                  Each account can only receive 1 time per month
                </p>
              </div>
              <button className={style.recieve}>Recieve</button>
            </div>
          </div>

          <div className={style.gridItem}>
            {" "}
            <div className={style.Item}>
              <div className={style.imagebar3}>
                <p>
                  <span>
                    <img src={wallet} alt="" className={style.miniwallet} />
                  </span>
                  <span>0.2%</span>
                </p>
              </div>
              <div className={style.infobar}>
                <h4>Safe</h4>
                <p>Increase the extra income of the safe</p>
              </div>
            </div>
            <div className={style.Item}>
              <div className={style.imagebar4}>
                <p>
                  <span>
                    <img src={wallet} alt="" className={style.miniwallet} />
                  </span>
                  <span>0.6%</span>
                </p>
              </div>
              <div className={style.infobar} style={{ height: "104px" }}>
                <h4>Rebate rate</h4>
                <p>Increase income of rebate</p>
                <p
                  style={{
                    color: "orange",
                    padding: "7px",
                    border: "1px solid orange",
                    textAlign: "center",
                    marginTop: "10px",
                    borderRadius: "25px",
                  }}
                >
                  Check the details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mybenifits;
