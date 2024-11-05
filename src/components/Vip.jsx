import style from "../css/Vip.module.css";
import avatar from "../icons/ladki.png";
import React, { useContext, useState } from "react";
import { data } from "../store/Contextprovider";
import level1 from "../icons/1-953c5909.png";
import Level1 from "./vip/components/Level1";
import { IoIosArrowForward } from "react-icons/io";
import Leveltwo from "./vip/components/Leveltwo";
import Level1data from "./vip/components/Level1data";
import VipbonusHistory from "./vip/components/VipbonusHistory";
import Level2data from "./vip/components/Level2data";
import Mybenifits from "./vip/components/Mybenifits";
import Level3 from "./vip/components/Level3";
import Level4 from "./vip/components/Level4";
import Level5 from "./vip/components/Level5";
import Level6 from "./vip/components/Level6";
import Level7 from "./vip/components/Level7";
import Level8 from "./vip/components/Level8";
import Level9 from "./vip/components/Level9";
import Level10 from "./vip/components/Level10";
import Level3data from "./vip/components/Level3data";
import Level4data from "./vip/components/Level4data";
import Level5data from "./vip/components/Level5data";
import Level6data from "./vip/components/Level6data";
import Level7data from "./vip/components/Level7data";
import Level8data from "./vip/components/Level8data";
import Level9data from "./vip/components/Level9data";
import Level10data from "./vip/components/Level10data";
const viplevel = [
  <Level1 />,
  <Leveltwo />,
  <Level3 />,
  <Level4 />,
  <Level5 />,
  <Level6 />,
  <Level7 />,
  <Level8 />,
  <Level9 />,
  <Level10 />,
];
const levelData = [
  <Level1data />,
  <Level2data />,
  <Level3data />,
  <Level4data />,
  <Level5data />,
  <Level6data />,
  <Level7data />,
  <Level8data />,
  <Level9data />,
  <Level10data />,
];

function Vip() {
  let [current, changecurrent] = useState(0);
  const { names, exp } = useContext(data);
  function change(val) {
    if (val == "forward") {
      if (current == viplevel.length - 1) {
        console.log("nothing has been done");
      } else {
        changecurrent(current + 1);
      }
    } else {
      if (current == 0) {
        console.log("nothing has been done");
      } else {
        changecurrent(current - 1);
      }
    }
  }

  let date = new Date();
  return (
    <>
      <section className={style.top}>
        <div className={style.heading}>
          <p>VIP</p>
        </div>

        <div className={style.showuser}>
          <div className={style.avatarbox}>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={style.userinfo}>
            <div className={style.currentlevel}>
              <img src={level1} />
            </div>
            <div className={style.username}>
              <p>{names}</p>
            </div>
          </div>
        </div>

        <div className={style.twosider}>
          <div>
            <p style={{ color: "orange" }}>{exp} EXP</p>
            <p>My experience</p>
          </div>
          <div>
            <p>
              <span style={{ fontWeight: "800" }}>
                {Math.abs(date.getDate() - 30)}
              </span>{" "}
              Days
            </p>
            <p>Payout time</p>
          </div>
        </div>

        <div className={style.settelmentTime}>
          <p>
            VIP level rewards are settled at 2:00 am on the 1<sup>st</sup> of
            every month
          </p>
        </div>
      </section>
      <div className={style.cardHolderMain}>
        <div className={style.btnholder}>
          <IoIosArrowForward
            className={`${style.back}`}
            onClick={() => {
              change("backward");
            }}
          />
        </div>
        <div className={`${style.card}`}>{viplevel[current]}</div>
        <div className={style.btnholder}>
          <IoIosArrowForward
            className={style.btn}
            onClick={() => {
              change("forward");
            }}
          />
        </div>
      </div>
      <div className={style.bonusInfo}>{levelData[current]}</div>
      <div className={style.history}>
        <Mybenifits />
      </div>
      <div className={style.history}>
        <VipbonusHistory />
      </div>
    </>
  );
}

export default Vip;
