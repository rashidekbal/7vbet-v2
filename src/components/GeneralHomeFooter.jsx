import style from "../css/GeneralHomeFooter.module.css";
import { NavLink } from "react-router-dom";
export const GeneralHomeFooter = ({ page }) => {
  let newstyle = { textDecoration: "none" };
  return (
    <div className={style.menu}>
      {page == "home" ? (
        <NavLink to="/ajax/" style={newstyle}>
          <div id="home" className={style.menu2}>
            <svg
              data-v-6ab3f23e=""
              class="svg-icon icon-home"
              style={{ width: "21.25px", height: "21.25px", color: "red" }}
            >
              <use xlinkHref="#icon-home"></use>
            </svg>

            <p>Home</p>
          </div>
        </NavLink>
      ) : (
        <NavLink to="/ajax/" style={newstyle}>
          <div id="home" className={style.menu2}>
            <svg
              data-v-6ab3f23e=""
              class="svg-icon icon-home"
              style={{ width: "21.25px", height: "21.25px" }}
            >
              <use xlinkHref="#icon-home"></use>
            </svg>

            <p>Home</p>
          </div>
        </NavLink>
      )}
      {page == "activity" ? (
        <NavLink to="/ajax/activity" style={newstyle}>
          <div id="Activity" className={style.menu2}>
            <svg
              data-v-6ab3f23e=""
              class="svg-icon icon-wallet"
              style={{ width: "21.25px", height: "21.25px", color: "red" }}
            >
              <use xlinkHref="#icon-wallet"></use>
            </svg>
            <p>Activity</p>
          </div>
        </NavLink>
      ) : (
        <NavLink to="/ajax/activity" style={newstyle}>
          <div id="Activity" className={style.menu2}>
            <svg
              data-v-6ab3f23e=""
              class="svg-icon icon-wallet"
              style={{ width: "21.25px", height: "21.25px" }}
            >
              <use xlinkHref="#icon-wallet"></use>
            </svg>
            <p>Activity</p>
          </div>
        </NavLink>
      )}
      {page == "promotion" ? (
        <NavLink to="/ajax/promotion" style={newstyle}>
          <div id="Promotion" className={style.menu2}>
            <svg
              data-v-6ab3f23e=""
              class="svg-icon icon-promotion "
              className={style.specials}
              style={{ width: "49.25px", height: "49.25px" }}
            >
              <use xlinkHref="#icon-promotion"></use>
            </svg>
            <p
              style={{
                position: "relative",
                color: "red",
                fontSize: "14px",
              }}
            >
              Promotion
            </p>
          </div>
        </NavLink>
      ) : (
        <NavLink to="/ajax/promotion" style={newstyle}>
          <div id="Promotion" className={style.menu2}>
            <svg
              data-v-6ab3f23e=""
              class="svg-icon icon-promotion "
              className={style.specials}
              style={{ width: "49.25px", height: "49.25px" }}
            >
              <use xlinkHref="#icon-promotion"></use>
            </svg>
            <p style={{ position: "relative", fontSize: "14px" }}>Promotion</p>
          </div>
        </NavLink>
      )}
      {page == "wallet" ? (
        <NavLink to="/ajax/wallet" style={newstyle}>
          <div id="Wallet" className={style.menu2}>
            <svg
              data-v-6ab3f23e=""
              class="svg-icon icon-wallet"
              style={{ width: "21.25px", height: "21.25px", color: "red" }}
            >
              <use xlinkHref="#icon-wallet"></use>
            </svg>
            <p>Wallet</p>
          </div>
        </NavLink>
      ) : (
        <NavLink to="/ajax/wallet" style={newstyle}>
          <div id="Wallet" className={style.menu2}>
            <svg
              data-v-6ab3f23e=""
              class="svg-icon icon-wallet"
              style={{ width: "21.25px", height: "21.25px" }}
            >
              <use xlinkHref="#icon-wallet"></use>
            </svg>
            <p>Wallet</p>
          </div>
        </NavLink>
      )}
      {page == "account" ? (
        <NavLink to="/ajax/account" style={newstyle}>
          <div id="Main" className={style.menu2}>
            <svg
              data-v-6ab3f23e=""
              class="svg-icon icon-main"
              style={{ width: "21.25px", height: "21.25px", color: "red" }}
            >
              <use xlinkHref="#icon-main"></use>
            </svg>
            <p>Account</p>
          </div>
        </NavLink>
      ) : (
        <NavLink to="/ajax/account" style={newstyle}>
          <div id="Main" className={style.menu2}>
            <svg
              data-v-6ab3f23e=""
              class="svg-icon icon-main"
              style={{ width: "21.25px", height: "21.25px" }}
            >
              <use xlinkHref="#icon-main"></use>
            </svg>
            <p>Account</p>
          </div>
        </NavLink>
      )}
    </div>
  );
};
