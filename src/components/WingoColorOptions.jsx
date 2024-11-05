import style from "../css/WingoColorOption.module.css";
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
export default function WingoTimerOption() {
  return (
    <>
      <div className={style.ColoOptions}>
        <button className={style.green}>Green</button>
        <button className={style.violet}>Violet</button>
        <button className={style.red}>Red</button>

        <div
          className={style.numberSections}
          style={{
            marginTop: "15px",
            borderRadius: "10px 10px 0 0",
          }}
        >
          <img src={number0} alt="small_zero" />
          <img src={number1} alt="small_one" />
          <img src={number2} alt="small_three" />
          <img src={number3} alt="small_four" />
          <img src={number4} alt="small_four" />
        </div>

        <div
          className={style.numberSections}
          style={{ borderRadius: "0px 0px 10px 10px", height: "69px" }}
        >
          <img src={number5} alt="small_zero" />
          <img src={number6} alt="small_one" />
          <img src={number7} alt="small_three" />
          <img src={number8} alt="small_four" />
          <img src={number9} alt="small_four" />
        </div>

        <div className={style.Randoms}>
          <p
            id="random"
            className={style.Tabs}
            style={{
              backgroundColor: "white",
              color: "red",
              border: "1px solid red",
              borderRadius: "10px",
              width: "25%",
              padding: "7px 5px",
            }}
          >
            Random
          </p>
          <p className={style.Tabs}>x1</p>
          <p className={style.Tabs}>x5</p>
          <p className={style.Tabs}>x10</p>
          <p className={style.Tabs}>x20</p>
          <p className={style.Tabs}>x50</p>
          <p className={style.Tabs}>x100</p>
        </div>
        <div className={style.BetBigSmall}>
          <b>
            <p
              onclick="selection_color('big')"
              style={{ backgroundColor: "orange" }}
            >
              Big
            </p>
            <p
              onclick="selection_color('small')"
              style={{ backgroundColor: "blue" }}
            >
              Small
            </p>
          </b>
        </div>
      </div>
    </>
  );
}
