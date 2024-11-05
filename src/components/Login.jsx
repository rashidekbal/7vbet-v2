import { useContext } from "react";
import style from "../css/login.module.css";
import { data } from "../store/Contextprovider";
import Header from "./Header";
import { NavLink } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div
        style={{
          maxWidth: "412px",
          margin: "0 auto",
          backgroundColor: "#f7f7f7",
          height: "800px",
        }}
      >
        <Header />
        <div className={style.mainview}>
          <div className={style.punch}>
            <p id="page_notice">Please login by phone number</p>
            <p>If you forgot your password , please contact customer service</p>
          </div>

          <div className={style.loginform}>
            <div className={style.login}>
              <p>Login by your credentials </p>
            </div>
            <form id="register" action="axjhqhsdgdsbhj/index.php" method="post">
              <p className={style.p2}>
                <span className={style.phonenumberholder}>Phone number</span>
              </p>
              <input
                className={style.input}
                type="number"
                placeholder="enter your phone number"
                required
                minlength="10"
                maxlength="10"
              />
              <p className={style.p1}>
                <img
                  src="axjhqhsdgdsbhj/src/svgs/padlock-lock-svgrepo-com.svg"
                  height="25.59px"
                />
                <span className={style.passwordholder}>Enter password</span>
              </p>
              <input
                className={style.input}
                type="password"
                placeholder="Create your password"
                required
                minlength="6"
                maxlength="10"
              />
              <NavLink to="/ajax">
                <input
                  type="submit"
                  value="login"
                  className={style.inputsubmit}
                />
              </NavLink>
            </form>
            <NavLink to="register" className={style.register}>
              Registrartion page
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
