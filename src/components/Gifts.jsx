import React from "react";
import banner from "../icons/rand.png";
import style from "../css/gifts.module.css";

function gifts() {
  return (
    <>
      <div>
        <img className={style.banner} src={banner}></img>
      </div>
      <div className={style.giftscollector}>
        <div className={style.notice}>
          <p>Hi</p>
          <p>We have a git for you</p>
        </div>
        <div className={style.giftdialog}>
          <p>Please enter the gift code below</p>
          <form>
            <input
              type="text"
              placeholder="Please enter gift code"
              maxLength="20"
            />
            <input type="submit" value="Recieve"></input>
          </form>
        </div>
      </div>
      <div className={style.history}>
        <div
          style={{
            paddingLeft: "25px",
          }}
        >
          <h4>History</h4>
        </div>
        <div>
          <svg data-v-f84b843f="" class="svg-icon icon-empty">
            <use xlinkHref="#icon-empty"></use>
          </svg>
          <center className={style.center}>No data</center>
        </div>
      </div>
    </>
  );
}

export default gifts;
