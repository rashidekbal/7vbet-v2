import React, { useContext } from "react";
import style from "../css/Attendance.module.css";
import photo from "../icons/headerBg-c5504bca.png";
import { data } from "../store/Contextprovider";
import { FaRupeeSign } from "react-icons/fa";
import coin from "../icons/coin-294b6998.png";
import box from "../icons/day7Bg-ada1d750.png";
function Attendance() {
  let infos = useContext(data);
  return (
    <>
      <div className={style.banner}>
        <div className={style.Heading}>
          <p>Attendance bonus</p>
          <p style={{ padding: "8px 0px" }}>
            Get rewards based on consecutive login days
          </p>
        </div>
        <div className={style.numberofdays}>
          <p>
            Attended consecutively
            <br />
            <span style={{ color: "green" }}>0</span> days
          </p>
          <div className={style.lund}></div>
        </div>
        <div className={style.bannerSecond}>
          <img src={photo} />
        </div>
        <div className={style.sideholder}>
          <div>
            <p>Accumulated</p>
            <h1>
              <FaRupeeSign style={{ fontSize: "24px" }} />
              {infos.accumulated}
            </h1>
          </div>
          <div className={style.sides1}>
            <button className={style.btn}>Game Rules</button>
          </div>
          <div className={style.sides2}>
            <button className={style.btn}>Bonus</button>
          </div>
        </div>
      </div>
      <div className={style.rewardsDisplay}>
        <div className={style.row}>
          <div className={style.column}>
            <p>
              <FaRupeeSign /> 6.00
            </p>
            <img src={coin} alt="" />
            <p>1 Day</p>
          </div>
          <div className={style.column}>
            {" "}
            <p>
              <FaRupeeSign /> 20.00
            </p>
            <img src={coin} alt="" />
            <p>2 Day</p>
          </div>
          <div className={style.column}>
            {" "}
            <p>
              <FaRupeeSign /> 100.00
            </p>
            <img src={coin} alt="" />
            <p>3 Day</p>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.column}>
            {" "}
            <p>
              <FaRupeeSign /> 200.00
            </p>
            <img src={coin} alt="" />
            <p>4 Day</p>
          </div>
          <div className={style.column}>
            {" "}
            <p>
              <FaRupeeSign /> 450.00
            </p>
            <img src={coin} alt="" />
            <p>5 Day</p>
          </div>
          <div className={style.column}>
            {" "}
            <p>
              <FaRupeeSign /> 2800.00
            </p>
            <img src={coin} alt="" />
            <p>6 Day</p>
          </div>
        </div>
      </div>
      <div className={style.dayseven}>
        <div className={style.boxonne}>
          <img src={box} alt="" />
        </div>
        <div className={style.boxdata}>
          <h3>
            --
            <FaRupeeSign />
            7,000.00 --
          </h3>
          <p>7 Day</p>
        </div>
      </div>
      <div className={style.btnholder}>
        <button
          className={style.btn}
          style={{
            width: "65%",
            padding: "10px",
          }}
        >
          Attendence
        </button>
      </div>
    </>
  );
}

export default Attendance;
