import React from "react";
import style from "../css/Level6.module.css";
import stamp from "../assets/images/6-05959c7c.png";
import vipstamp from "../assets/images/2-5df32e87.png";
import ok from "../assets/images/HaveReached-bd0aadbf.png";
function Level6() {
  return (
    <>
      <div className={style.maincontainer}>
        <div className={style.heading}>
          <div className={style.left}>
            <div className={style.first}>
              <img src={vipstamp} alt="" />
              <h1>VIP6</h1>
              <p
                style={{
                  verticalAlign: "middle",
                  color: "lightgreen",
                  width: "52%",
                  marginLeft: "10px",
                  fontSize: "12px",
                }}
              >
                <img
                  src={ok}
                  alt=""
                  style={{
                    verticalAlign: "middle",
                    height: "15px",
                    marginRight: "2px",
                  }}
                />
                Achieved
              </p>
            </div>
            <div className={style.sec}>
              <p>
                Dear <span>VIP6</span> customer
              </p>
            </div>
            <div className={style.mentenenceinfo}>
              <p>Level maintenance</p>
            </div>
          </div>
          <div className={style.right}>
            <img src={stamp} alt="stamp" />
          </div>
        </div>
        <div className={style.stage2}>
          <div className={style.f}>
            <p>
              <span>500</span>/50000000
            </p>
          </div>
          <div className={style.se}>
            <p>1% completed</p>
          </div>
        </div>
        <div className={style.stage3}>
          <div className={style.bar}></div>
        </div>
        <div className={style.stage4}>
          <p>Incomplete will be deducted by the system </p>
          <p>{"[50000000]"}</p>
        </div>
      </div>
    </>
  );
}

export default Level6;
