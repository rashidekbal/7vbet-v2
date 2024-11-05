import style from "../css/WingoTimerSetting.module.css";
import logoActive from "../icons/time_a-f83ed4c7.png";
import logoInactive from "../icons/time-5d4e96a3.png";
export default function WingoTimerSetting({
  currenttimer,
  changecurrenttimer,
}) {
  function change(arg) {
    changecurrenttimer(arg);
  }
  return (
    <>
      <div className={style.GameTimer}>
        {currenttimer === "1" ? (
          <div
            className={style.Options}
            style={{ backgroundColor: "orange", color: "white" }}
          >
            <img
              alt="img"
              id="one"
              className={style.OptionsImage}
              src={logoActive}
            />
            <div class="count">
              <p>Win Go</p>
              <p>1Min</p>
            </div>
          </div>
        ) : (
          <div
            className={style.Options}
            onClick={() => {
              change("1");
            }}
          >
            <img
              alt="img"
              id="one"
              className={style.OptionsImage}
              src={logoInactive}
            />
            <div class="count">
              <p>Win Go</p>
              <p>1Min</p>
            </div>
          </div>
        )}
        {currenttimer === "3" ? (
          <div
            className={style.Options}
            style={{ backgroundColor: "orange", color: "white" }}
          >
            <img
              alt="img"
              className={style.OptionsImage}
              id="three"
              src={logoActive}
            />
            <div class="count">
              <p>Win Go</p>
              <p>3Min</p>
            </div>
          </div>
        ) : (
          <div
            className={style.Options}
            onClick={() => {
              change("3");
            }}
          >
            <img
              alt="img"
              className={style.OptionsImage}
              id="three"
              src={logoInactive}
            />
            <div class="count">
              <p>Win Go</p>
              <p>3Min</p>
            </div>
          </div>
        )}
        {currenttimer === "5" ? (
          <div
            className={style.Options}
            style={{ backgroundColor: "orange", color: "white" }}
          >
            <img
              alt="img"
              className={style.OptionsImage}
              id="five"
              src={logoActive}
            />
            <div class="count">
              <p>Win Go</p>
              <p>5Min</p>
            </div>
          </div>
        ) : (
          <div
            className={style.Options}
            onClick={() => {
              change("5");
            }}
          >
            <img
              alt="img"
              className={style.OptionsImage}
              id="five"
              src={logoInactive}
            />
            <div class="count">
              <p>Win Go</p>
              <p>5Min</p>
            </div>
          </div>
        )}
        {currenttimer === "10" ? (
          <div
            className={style.Options}
            style={{ backgroundColor: "orange", color: "white" }}
          >
            <img
              alt="img"
              className={style.OptionsImage}
              id="ten"
              src={logoActive}
            />
            <div class="count">
              <p>Win Go</p>
              <p>10Min</p>
            </div>
          </div>
        ) : (
          <div
            className={style.Options}
            onClick={() => {
              change("10");
            }}
          >
            <img
              alt="img"
              className={style.OptionsImage}
              id="ten"
              src={logoInactive}
            />
            <div class="count">
              <p>Win Go</p>
              <p>10Min</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
